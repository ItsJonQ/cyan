const fs = require('fs')
const path = require('path')
const supportedEvents = require('./supportedEvents')

const generateEventTypeDocs = event => {
  return `
  /**
   * Fires a ${event} event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').${event}()
   */
  ${event}(eventProps: any): void`
}
const generateEventTypes = () => {
  let content = `
    export interface CyanEvents {
      ${supportedEvents.map(generateEventTypeDocs).join('\n')}
    }

    export default CyanEvents
  `.trim()

  const eventFile = path.resolve(__dirname, '../src/types/Cyan.event.types.ts')
  fs.writeFileSync(eventFile, content)
  console.log('Generated src/types/Cyan.event.types.ts')
}

generateEventTypes()
