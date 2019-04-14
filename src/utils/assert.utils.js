export const assert = callback => {
  try {
    return callback()
  } catch (err) {
    console.warn(err)
    return false
  }
}
