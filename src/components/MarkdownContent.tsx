import { Fragment, type ReactNode } from 'react'

type MarkdownContentProps = {
  markdown: string
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

function renderInline(text: string, keyPrefix: string) {
  return text
    .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    .filter(Boolean)
    .map((chunk, index) => {
      const key = `${keyPrefix}-${index}`

      if (chunk.startsWith('**') && chunk.endsWith('**')) {
        return <strong key={key}>{chunk.slice(2, -2)}</strong>
      }

      if (chunk.startsWith('`') && chunk.endsWith('`')) {
        return <code key={key}>{chunk.slice(1, -1)}</code>
      }

      return <Fragment key={key}>{chunk}</Fragment>
    })
}

function isSpecialLine(line: string) {
  const trimmed = line.trim()

  return (
    trimmed === '' ||
    trimmed === '---' ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('- ') ||
    trimmed.startsWith('>') ||
    /^!\[[^\]]*\]\([^)]+\)$/u.test(trimmed)
  )
}

function joinParagraphLines(lines: string[]) {
  return lines.map((line) => line.trim()).join(' ')
}

function renderImage(line: string, key: string) {
  const match = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/u)

  if (!match) {
    return null
  }

  const [, alt, src] = match

  return (
    <figure key={key} className="markdown-figure">
      <img className="markdown-image" src={src} alt={alt || 'Imagem do projeto'} />
      {alt ? <figcaption>{alt}</figcaption> : null}
    </figure>
  )
}

function parseMarkdown(markdown: string) {
  const elements: ReactNode[] = []
  const lines = markdown.replace(/\r\n/g, '\n').trim().split('\n')

  let index = 0

  while (index < lines.length) {
    const line = lines[index]
    const trimmed = line.trim()

    if (!trimmed) {
      index += 1
      continue
    }

    if (trimmed === '---') {
      elements.push(<hr key={`hr-${index}`} className="markdown-divider" />)
      index += 1
      continue
    }

    if (/^!\[[^\]]*\]\([^)]+\)$/u.test(trimmed)) {
      const imageElement = renderImage(line, `image-${index}`)

      if (imageElement) {
        elements.push(imageElement)
      }

      index += 1
      continue
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/u)

    if (headingMatch) {
      const [, hashes, content] = headingMatch
      const level = Math.min(hashes.length, 6)
      const Tag = `h${level}` as HeadingTag

      elements.push(
        <Tag key={`heading-${index}`} className={`markdown-heading markdown-heading-${level}`}>
          {renderInline(content, `heading-${index}`)}
        </Tag>,
      )
      index += 1
      continue
    }

    if (trimmed.startsWith('- ')) {
      const items: string[] = []

      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2))
        index += 1
      }

      elements.push(
        <ul key={`list-${index}`} className="markdown-list">
          {items.map((item, itemIndex) => (
            <li key={`list-item-${index}-${itemIndex}`}>{renderInline(item, `list-${index}-${itemIndex}`)}</li>
          ))}
        </ul>,
      )
      continue
    }

    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = []

      while (index < lines.length && lines[index].trim().startsWith('>')) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/u, ''))
        index += 1
      }

      elements.push(
        <blockquote key={`quote-${index}`} className="markdown-quote">
          <p>{renderInline(joinParagraphLines(quoteLines), `quote-${index}`)}</p>
        </blockquote>,
      )
      continue
    }

    const paragraphLines: string[] = []

    while (index < lines.length && !isSpecialLine(lines[index])) {
      paragraphLines.push(lines[index])
      index += 1
    }

    elements.push(
      <p key={`paragraph-${index}`} className="markdown-paragraph">
        {renderInline(joinParagraphLines(paragraphLines), `paragraph-${index}`)}
      </p>,
    )
  }

  return elements
}

function MarkdownContent({ markdown }: MarkdownContentProps) {
  return <div className="markdown-content">{parseMarkdown(markdown)}</div>
}

export default MarkdownContent
