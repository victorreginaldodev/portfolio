import { Children, isValidElement, type ReactNode } from 'react'
import { Document, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

import { curriculoProfile } from '../data/curriculo/profile'
import { experience } from '../data/curriculo/experience'
import { education } from '../data/curriculo/education'
import { skillCategories } from '../data/curriculo/skills'
import { differentials } from '../data/curriculo/differentials'
import { languages } from '../data/curriculo/languages'
import { registerPdfFonts } from './fonts'

registerPdfFonts()

const color = {
  ink: '#0f1117',
  inkMid: '#3a3d4a',
  inkLight: '#6b6f80',
  inkXLight: '#9a9eae',
  rule: '#e2e3e8',
  accent: '#c8392b',
  tagBg: '#ededeb',
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 28,
    paddingHorizontal: 40,
    fontFamily: 'DM Sans',
    fontSize: 9,
    color: color.inkMid,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 12,
    marginBottom: 14,
    borderBottomWidth: 1.4,
    borderBottomColor: color.ink,
  },
  label: {
    fontSize: 7.2,
    fontWeight: 500,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: color.accent,
    marginBottom: 5,
  },
  name: {
    fontFamily: 'DM Serif Display',
    fontSize: 22,
    color: color.ink,
  },
  nameEm: {
    fontFamily: 'DM Serif Display',
    fontStyle: 'italic',
    fontSize: 22,
    color: color.inkMid,
  },
  tagline: {
    marginTop: 6,
    fontSize: 8.2,
    color: color.inkMid,
    maxWidth: 300,
    lineHeight: 1.4,
  },
  contactList: {
    alignItems: 'flex-end',
  },
  contactItem: {
    fontSize: 7.6,
    color: color.inkLight,
    marginBottom: 2.5,
  },
  body: {
    flexDirection: 'row',
    gap: 24,
  },
  main: {
    flex: 1,
  },
  sidebar: {
    width: 145,
  },
  section: {
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 6.6,
    fontWeight: 600,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: color.inkXLight,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 0.8,
    borderBottomColor: color.rule,
  },
  expItem: {
    marginBottom: 18,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  expRole: {
    fontFamily: 'DM Serif Display',
    fontSize: 14,
    color: color.ink,
  },
  expPeriod: {
    fontSize: 8,
    color: color.inkXLight,
  },
  expCompany: {
    fontSize: 9.6,
    fontWeight: 500,
    color: color.accent,
    marginBottom: 7,
  },
  expDesc: {
    fontSize: 9.4,
    color: color.inkMid,
    lineHeight: 1.55,
    marginBottom: 9,
  },
  bullets: {
    marginTop: 2,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bulletMark: {
    width: 10,
    fontSize: 8.4,
    color: color.inkXLight,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: color.inkMid,
    lineHeight: 1.55,
  },
  bold: {
    fontWeight: 600,
    color: color.ink,
  },
  sidebarItem: {
    marginBottom: 7,
  },
  sidebarItemTitle: {
    fontSize: 7.6,
    fontWeight: 600,
    color: color.ink,
    marginBottom: 2,
  },
  sidebarItemSub: {
    fontSize: 7.4,
    color: color.inkLight,
    lineHeight: 1.35,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
    marginTop: 1,
  },
  tag: {
    fontSize: 7,
    color: color.inkMid,
    backgroundColor: color.tagBg,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  tagHighlight: {
    color: '#ffffff',
    backgroundColor: color.ink,
  },
  footer: {
    position: 'absolute',
    bottom: 14,
    left: 40,
    right: 40,
    paddingTop: 8,
    borderTopWidth: 0.8,
    borderTopColor: color.rule,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerNote: {
    fontSize: 7.2,
    color: color.inkXLight,
    letterSpacing: 0.3,
  },
})

function richText(node: ReactNode, keyPrefix = 'n'): ReactNode {
  if (node === null || node === undefined || typeof node === 'boolean') {
    return null
  }

  if (typeof node === 'string' || typeof node === 'number') {
    return node
  }

  if (Array.isArray(node)) {
    return Children.map(node, (child, index) => richText(child, `${keyPrefix}-${index}`))
  }

  if (isValidElement(node)) {
    const children = richText(
      (node.props as { children?: ReactNode }).children,
      keyPrefix,
    )

    if (node.type === 'strong') {
      return (
        <Text key={keyPrefix} style={styles.bold}>
          {children}
        </Text>
      )
    }

    return children
  }

  return null
}

export function CurriculoDocument() {
  return (
    <Document title={curriculoProfile.documentTitle}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.label}>{curriculoProfile.label}</Text>
            <Text style={styles.name}>
              {curriculoProfile.name} <Text style={styles.nameEm}>{curriculoProfile.nameEm}</Text>
            </Text>
            <Text style={styles.tagline}>{curriculoProfile.tagline}</Text>
          </View>

          <View style={styles.contactList}>
            <Text style={styles.contactItem}>{curriculoProfile.location}</Text>
            <Link style={styles.contactItem} src={`mailto:${curriculoProfile.email}`}>
              {curriculoProfile.email}
            </Link>
            <Link style={styles.contactItem} src={curriculoProfile.linkedin.href}>
              {curriculoProfile.linkedin.label}
            </Link>
            <Link style={styles.contactItem} src={curriculoProfile.github.href}>
              {curriculoProfile.github.label}
            </Link>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.main}>
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Experiência Profissional</Text>
              {experience.map((item) => (
                <View key={item.company} style={styles.expItem} wrap={false}>
                  <View style={styles.expHeader}>
                    <Text style={styles.expRole}>{item.role}</Text>
                    <Text style={styles.expPeriod}>{item.period}</Text>
                  </View>
                  <Text style={styles.expCompany}>{item.company}</Text>
                  <Text style={styles.expDesc}>{item.description}</Text>
                  <View style={styles.bullets}>
                    {item.bullets.map((bullet, bulletIndex) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <View key={bulletIndex} style={styles.bulletRow}>
                        <Text style={styles.bulletMark}>—</Text>
                        <Text style={styles.bulletText}>{richText(bullet)}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Formação</Text>
              {education.map((item) => (
                <View key={item.institution} style={styles.expItem} wrap={false}>
                  <View style={styles.expHeader}>
                    <Text style={styles.expRole}>{item.role}</Text>
                    <Text style={styles.expPeriod}>{item.period}</Text>
                  </View>
                  <Text style={styles.expCompany}>{item.institution}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.sidebar}>
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Stack Técnica</Text>
              {skillCategories.map((category) => (
                <View key={category.label} style={styles.sidebarItem} wrap={false}>
                  <Text style={styles.sidebarItemTitle}>{category.label}</Text>
                  <View style={styles.tags}>
                    {category.tags.map((tag) => (
                      <Text
                        key={tag.name}
                        style={tag.highlight ? [styles.tag, styles.tagHighlight] : styles.tag}
                      >
                        {tag.name}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Diferenciais</Text>
              {differentials.map((item) => (
                <View key={item.title} style={styles.sidebarItem} wrap={false}>
                  <Text style={styles.sidebarItemTitle}>{item.title}</Text>
                  <Text style={styles.sidebarItemSub}>{item.description}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Idiomas</Text>
              {languages.map((item) => (
                <View key={item.name} style={styles.sidebarItem} wrap={false}>
                  <Text style={styles.sidebarItemTitle}>{item.name}</Text>
                  <Text style={styles.sidebarItemSub}>{item.level}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.footerNote}>{curriculoProfile.email}</Text>
          <Text style={styles.footerNote}>{curriculoProfile.footerNote}</Text>
        </View>
      </Page>
    </Document>
  )
}
