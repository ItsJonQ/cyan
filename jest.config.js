const jestConfig = require('@helpscout/zero/jest')

module.exports = Object.assign(jestConfig, {
  collectCoverageFrom: [
    ...jestConfig.collectCoverageFrom,
    '!src/polyfills/**/*.{js,jsx,ts,tsx}',
    '!src/promises/mocks/**/*.{js,jsx,ts,tsx}',
  ],
})
