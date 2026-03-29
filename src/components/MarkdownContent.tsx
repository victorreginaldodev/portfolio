import { Fragment, type ReactNode } from 'react'

type MarkdownContentProps = {
  markdown: string
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type MarkdownBlock =
  | { type: 'divider'; key: string }
  | { type: 'image'; key: string; alt: string; src: string }
  | { type: 'heading'; key: string; level: number; content: string }
  | { type: 'list'; key: string; items: string[] }
  | { type: 'quote'; key: string; content: string }
  | { type: 'paragraph'; key: string; content: string }

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

function parseBlocks(markdown: string) {
  const blocks: MarkdownBlock[] = []
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
      blocks.push({ type: 'divider', key: `divider-${index}` })
      index += 1
      continue
    }

    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/u)

    if (imageMatch) {
      const [, alt, src] = imageMatch
      blocks.push({ type: 'image', key: `image-${index}`, alt, src })
      index += 1
      continue
    }

    const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/u)

    if (headingMatch) {
      const [, hashes, content] = headingMatch
      blocks.push({
        type: 'heading',
        key: `heading-${index}`,
        level: Math.min(hashes.length, 6),
        content,
      })
      index += 1
      continue
    }

    if (trimmed.startsWith('- ')) {
      const items: string[] = []

      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2))
        index += 1
      }

      blocks.push({ type: 'list', key: `list-${index}`, items })
      continue
    }

    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = []

      while (index < lines.length && lines[index].trim().startsWith('>')) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/u, ''))
        index += 1
      }

      blocks.push({
        type: 'quote',
        key: `quote-${index}`,
        content: joinParagraphLines(quoteLines),
      })
      continue
    }

    const paragraphLines: string[] = []

    while (index < lines.length && !isSpecialLine(lines[index])) {
      paragraphLines.push(lines[index])
      index += 1
    }

    blocks.push({
      type: 'paragraph',
      key: `paragraph-${index}`,
      content: joinParagraphLines(paragraphLines),
    })
  }

  return blocks
}

function renderBlock(block: MarkdownBlock) {
  if (block.type === 'divider') {
    return <hr key={block.key} className="markdown-divider" />
  }

  if (block.type === 'image') {
    return (
      <figure key={block.key} className="markdown-figure">
        <img className="markdown-image" src={block.src} alt={block.alt || 'Imagem do projeto'} />
        {block.alt ? <figcaption>{block.alt}</figcaption> : null}
      </figure>
    )
  }

  if (block.type === 'heading') {
    const Tag = `h${block.level}` as HeadingTag

    return (
      <Tag key={block.key} className={`markdown-heading markdown-heading-${block.level}`}>
        {renderInline(block.content, block.key)}
      </Tag>
    )
  }

  if (block.type === 'list') {
    return (
      <ul key={block.key} className="markdown-list">
        {block.items.map((item, index) => (
          <li key={`${block.key}-${index}`}>{renderInline(item, `${block.key}-${index}`)}</li>
        ))}
      </ul>
    )
  }

  if (block.type === 'quote') {
    return (
      <blockquote key={block.key} className="markdown-quote">
        <p>{renderInline(block.content, block.key)}</p>
      </blockquote>
    )
  }

  return (
    <p key={block.key} className="markdown-paragraph">
      {renderInline(block.content, block.key)}
    </p>
  )
}

function renderAccordionSections(blocks: MarkdownBlock[]) {
  const leadingBlocks: ReactNode[] = []
  const sections: Array<{ heading: Extract<MarkdownBlock, { type: 'heading' }>; blocks: MarkdownBlock[] }> = []

  let currentSection: { heading: Extract<MarkdownBlock, { type: 'heading' }>; blocks: MarkdownBlock[] } | null = null

  blocks.forEach((block) => {
    if (block.type === 'heading' && block.level === 2) {
      currentSection = { heading: block, blocks: [] }
      sections.push(currentSection)
      return
    }

    if (currentSection) {
      currentSection.blocks.push(block)
      return
    }

    leadingBlocks.push(renderBlock(block))
  })

  return (
    <>
      {leadingBlocks}
      <div className="markdown-accordion">
        {sections.map((section, index) => (
          <details
            key={section.heading.key}
            className="markdown-accordion-item"
            open={index === 0}
          >
            <summary className="markdown-accordion-summary">
              <span className="markdown-accordion-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="markdown-accordion-title">
                {renderInline(section.heading.content, `${section.heading.key}-summary`)}
              </span>
              <span className="markdown-accordion-icon" aria-hidden="true">
                +
              </span>
            </summary>

            <div className="markdown-accordion-panel">
              {section.blocks
                .filter((block) => block.type !== 'divider')
                .map((block) => renderBlock(block))}
            </div>
          </details>
        ))}
      </div>
    </>
  )
}

function MarkdownContent({ markdown }: MarkdownContentProps) {
  const blocks = parseBlocks(markdown)

  return <div className="markdown-content">{renderAccordionSections(blocks)}</div>
}

export default MarkdownContent
