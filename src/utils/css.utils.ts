export const getCSSTextFromRule = rule => {
  const { style, selectorText } = rule
  if (!style) return ''

  const { _importants } = style
  const styleKeys = Object.keys(style).filter(prop => !isNaN(Number(prop)))
  const ruleKeys = styleKeys.map(key => style[key])
  const cssText = ruleKeys.reduce((cssText, key) => {
    let baseRule = `${key}: ${style[key]}`
    if (_importants[key]) {
      baseRule += ' !important'
    }
    return `${cssText} ${baseRule};`
  }, '')

  return `${selectorText} { ${cssText.trim()} }`
}

export const getCSSRulesFromStyleSheet = styleSheet => {
  const rules = styleSheet.cssRules || []
  return rules.reduce((styles, rule) => {
    return `${styles} ${getCSSTextFromRule(rule)}`
  }, '')
}

export const getDocumentCSS = () => {
  const styleSheets = Object.values(document.styleSheets)
  const css = styleSheets.reduce((styles, styleSheet) => {
    return `${styles} ${getCSSRulesFromStyleSheet(styleSheet)}`
  }, '')

  return css
}
