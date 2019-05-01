import prettyFn from 'pretty'

const defaultOptions = {
  wrap_line_length: 80,
  wrap_attributes: 'force-expand-multiline',
}

export const pretty = (html, options = defaultOptions) =>
  prettyFn(html, {
    ...defaultOptions,
    ...options,
  })

export default pretty
