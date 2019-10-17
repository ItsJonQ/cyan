const jestConfig = require('@itsjonq/zero/jest')

module.exports = Object.assign(jestConfig, {
  collectCoverageFrom: [
    ...jestConfig.collectCoverageFrom,
    '!src/polyfills/**/*.{js,jsx,ts,tsx}',
    '!src/promises/mocks/**/*.{js,jsx,ts,tsx}',
    '!src/mocks/**/*.{js,jsx,ts,tsx}',
    '!src/inspector/**/*.{js,ts}',
    '!src/utils/css.utils.{js,ts}',
  ],
})
