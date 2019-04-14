export const get = selector => document.querySelectorAll(selector)
export const getByCy = selector => get(`[data-cy=${selector}]`)
