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

function buildResumeMount(markup: string, styles: string) {
  const mount = document.createElement('div')
  mount.setAttribute('aria-hidden', 'true')
  mount.style.position = 'fixed'
  mount.style.left = '0'
  mount.style.top = '0'
  mount.style.opacity = '0'
  mount.style.overflow = 'hidden'
  mount.style.zIndex = '-1'
  mount.style.pointerEvents = 'none'
  mount.style.width = '210mm'
  mount.style.padding = '0'
  mount.style.margin = '0'
  mount.innerHTML = `<style>${styles}</style>${markup}`
  document.body.appendChild(mount)
  return mount
}

async function waitForRender() {
  await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()))
  await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()))
}

async function waitForFonts() {
  if (!('fonts' in document)) {
    return
  }

  try {
    await document.fonts.ready
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

  const resumePage = documentNode.querySelector('.resume-page')

  if (!resumePage) {
    throw new Error('Estrutura do curriculo nao encontrada no HTML.')
  }

  const tempWrapper = document.createElement('div')
  tempWrapper.innerHTML = resumePage.outerHTML.replaceAll('src="./', 'src="/')
  const markup = tempWrapper.innerHTML
  const mount = buildResumeMount(markup, styleMarkup)

  try {
    const target = mount.querySelector('.resume-page')

    if (!(target instanceof HTMLElement)) {
      throw new Error('Nao foi possivel montar o curriculo para exportacao.')
    }

    const layout = target.querySelector('.resume-layout')

    target.style.boxShadow = 'none'
    target.style.margin = '0'
    target.style.background = '#ffffff'
    target.style.width = '210mm'
    target.style.minHeight = '297mm'
    target.style.height = '297mm'
    target.style.overflow = 'hidden'

    if (layout instanceof HTMLElement) {
      layout.style.minHeight = '297mm'
      layout.style.height = '297mm'
    }

    await waitForFonts()
    await waitForImages(target)
    await waitForRender()

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

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const imageData = canvas.toDataURL('image/png')

    pdf.addImage(imageData, 'PNG', 0, 0, pageWidth, pageHeight)

    downloadBlob(pdf.output('blob'))
  } finally {
    mount.remove()
  }
}
