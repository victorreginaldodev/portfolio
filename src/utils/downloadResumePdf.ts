import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const RESUME_HTML_PATH = '/Victor-Reginaldo-Curriculo.html'
const DOWNLOAD_PREFIX = 'Victor-Reginaldo-Curriculo'

function getTimestamp() {
  const now = new Date()
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('')
  const time = [
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0'),
    String(now.getSeconds()).padStart(2, '0'),
  ].join('')

  return `${date}-${time}`
}

type ResumeFrame = {
  documentNode: Document
  frame: HTMLIFrameElement
}

function isHtmlElement(node: Element | null): node is HTMLElement {
  return Boolean(node) && node.nodeType === Node.ELEMENT_NODE
}

async function buildResumeMount(markup: string, styles: string): Promise<ResumeFrame> {
  const frame = document.createElement('iframe')
  frame.setAttribute('aria-hidden', 'true')
  frame.tabIndex = -1
  frame.style.position = 'fixed'
  frame.style.left = '-10000px'
  frame.style.top = '0'
  frame.style.width = '210mm'
  frame.style.height = '297mm'
  frame.style.border = '0'
  frame.style.opacity = '0'
  frame.style.pointerEvents = 'none'
  frame.style.background = '#ffffff'

  document.body.appendChild(frame)

  const documentNode = frame.contentDocument

  if (!documentNode) {
    frame.remove()
    throw new Error('Nao foi possivel preparar a area de exportacao do curriculo.')
  }

  documentNode.open()
  documentNode.write(`<!DOCTYPE html><html><head><meta charset="UTF-8" /><style>
    html, body {
      margin: 0;
      padding: 0;
      background: #ffffff;
      width: 210mm;
      min-height: 297mm;
      overflow: hidden;
    }
    ${styles}
  </style></head><body>${markup}</body></html>`)
  documentNode.close()

  await new Promise<void>((resolve) => {
    frame.onload = () => resolve()
    window.setTimeout(() => resolve(), 50)
  })

  return { documentNode, frame }
}

async function waitForRender(targetWindow: Window) {
  await new Promise<void>((resolve) => targetWindow.requestAnimationFrame(() => resolve()))
  await new Promise<void>((resolve) => targetWindow.requestAnimationFrame(() => resolve()))
}

async function waitForFonts(documentNode: Document) {
  if (!('fonts' in documentNode)) {
    return
  }

  try {
    await documentNode.fonts.ready
  } catch {
    // Continue even when the browser cannot report font readiness.
  }
}

async function waitForImages(root: ParentNode) {
  const images = Array.from(root.querySelectorAll('img'))

  await Promise.all(
    images.map(async (image) => {
      if (image.complete) {
        return
      }

      if ('decode' in image) {
        try {
          await image.decode()
          return
        } catch {
          // Fall back to load events when decode fails.
        }
      }

      await new Promise<void>((resolve) => {
        image.addEventListener('load', () => resolve(), { once: true })
        image.addEventListener('error', () => resolve(), { once: true })
      })
    }),
  )
}

function downloadBlob(blob: Blob) {
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = `${DOWNLOAD_PREFIX}-${getTimestamp()}.pdf`
  document.body.appendChild(link)
  link.click()
  link.remove()

  window.setTimeout(() => {
    URL.revokeObjectURL(objectUrl)
  }, 1000)
}

export async function downloadResumePdf() {
  const response = await fetch(`${RESUME_HTML_PATH}?t=${Date.now()}`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar o HTML do curriculo.')
  }

  const html = await response.text()
  const parser = new DOMParser()
  const documentNode = parser.parseFromString(html, 'text/html')
  const styleMarkup = Array.from(documentNode.querySelectorAll('style'))
    .map((node) => node.textContent ?? '')
    .join('\n')

  const resumePages = Array.from(documentNode.querySelectorAll('.resume-page'))

  if (!resumePages.length) {
    throw new Error('Estrutura do curriculo nao encontrada no HTML.')
  }

  const tempWrapper = document.createElement('div')
  tempWrapper.innerHTML = documentNode.body.innerHTML.replaceAll('src="./', `src="${window.location.origin}/`)
  const markup = tempWrapper.innerHTML
  const mount = await buildResumeMount(markup, styleMarkup)

  try {
    const frameWindow = mount.frame.contentWindow
    const targets = Array.from(mount.documentNode.querySelectorAll('.resume-page'))

    if (!targets.length || !frameWindow) {
      throw new Error('Nao foi possivel montar o curriculo para exportacao.')
    }

    await waitForFonts(mount.documentNode)
    await Promise.all(
      targets.map(async (target) => {
        if (!isHtmlElement(target)) {
          return
        }

        const layout = target.querySelector('.resume-layout')

        target.style.boxShadow = 'none'
        target.style.margin = '0'
        target.style.background = '#ffffff'
        target.style.width = '210mm'
        target.style.minHeight = '297mm'
        target.style.height = '297mm'
        target.style.overflow = 'hidden'

        if (isHtmlElement(layout)) {
          layout.style.minHeight = '297mm'
          layout.style.height = '297mm'
        }

        await waitForImages(target)
      }),
    )
    await waitForRender(frameWindow)

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()

    for (const [index, target] of targets.entries()) {
      if (!isHtmlElement(target)) {
        continue
      }

      const captureWidth = target.offsetWidth
      const captureHeight = target.offsetHeight

      const canvas = await html2canvas(target, {
        backgroundColor: '#f3f6f8',
        scale: 2,
        useCORS: true,
        logging: false,
        scrollX: 0,
        scrollY: 0,
        width: captureWidth,
        height: captureHeight,
        windowWidth: captureWidth,
        windowHeight: captureHeight,
      })

      if (index > 0) {
        pdf.addPage()
      }

      const imageData = canvas.toDataURL('image/png')
      pdf.addImage(imageData, 'PNG', 0, 0, pageWidth, pageHeight)
    }

    downloadBlob(pdf.output('blob'))
  } finally {
    mount.frame.remove()
  }
}
