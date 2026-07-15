import { Font } from '@react-pdf/renderer'

import dmSansLight from '../assets/fonts/DMSans-Light.ttf'
import dmSansLightItalic from '../assets/fonts/DMSans-LightItalic.ttf'
import dmSansRegular from '../assets/fonts/DMSans-Regular.ttf'
import dmSansMedium from '../assets/fonts/DMSans-Medium.ttf'
import dmSansSemiBold from '../assets/fonts/DMSans-SemiBold.ttf'
import dmSerifDisplayRegular from '../assets/fonts/DMSerifDisplay-Regular.ttf'
import dmSerifDisplayItalic from '../assets/fonts/DMSerifDisplay-Italic.ttf'

let registered = false

export function registerPdfFonts() {
  if (registered) return
  registered = true

  Font.register({
    family: 'DM Sans',
    fonts: [
      { src: dmSansLight, fontWeight: 300 },
      { src: dmSansLightItalic, fontWeight: 300, fontStyle: 'italic' },
      { src: dmSansRegular, fontWeight: 400 },
      { src: dmSansMedium, fontWeight: 500 },
      { src: dmSansSemiBold, fontWeight: 600 },
    ],
  })

  Font.register({
    family: 'DM Serif Display',
    fonts: [
      { src: dmSerifDisplayRegular, fontWeight: 400, fontStyle: 'normal' },
      { src: dmSerifDisplayItalic, fontWeight: 400, fontStyle: 'italic' },
    ],
  })

  Font.registerHyphenationCallback((word) => [word])
}
