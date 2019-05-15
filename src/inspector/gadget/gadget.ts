/* global jasmine */

import fs from 'fs'
import path from 'path'

import { getDocumentHTML } from '../../utils/render.utils'
import { getDocumentCSS } from '../../utils/css.utils'
import pretty from '../../utils/pretty.utils'
import inspectorCSS from './gadget.css'
import editorTheme from './gadget.editor.theme.ayu'
import editor from './gadget.editor'

let currentTest

// @ts-ignore
jasmine.getEnv().addReporter({
  specStarted: function(result) {
    currentTest = result
  },
})

const getFilePath = (filename = 'index') => {
  const base = path.join(process.cwd(), '/node_modules/.cyan/')
  if (!fs.existsSync(base)) {
    fs.mkdirSync(base)
  }

  return path.join(base, `${filename}.html`)
}

const generateHTML = (filename, lineNumber) => {
  const css = getDocumentCSS()
  const html = pretty(getDocumentHTML())
  const { fullName } = currentTest

  const template = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${fullName} | Cyan Inspector</title>
        <style>${inspectorCSS}</style>
      </head>
      <body>
        <div id="bar">
          <div>
            <strong>${fullName}</strong>
            <span style="opacity: 0.5">${lineNumber}</span>
            <button id="done">Done</button>
          </div>
        </div>
        <iframe id="iframe"></iframe>
        <div id="editor"></div>
        <div id="dragHandle"><div id="dragHandleLine"></div></div>
        <div id="dragOverlay"></div>
        <script>window.markup = \`${html}\`</script>
        <script>window.css = \`${css}\`</script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.4/ace.js"></script>
        ${editorTheme}
        <script>
          const initializeEditor = ${editor.toString()}
          initializeEditor()
        </script>
      </body>
    </html>
  `
  fs.writeFileSync(getFilePath(filename), template)
}

export const gadget = (filename?) => {
  // @ts-ignore
  const lineNumber = new Error().stack.match(/\(.*\)/g)[2]

  jest.runAllTimers()
  generateHTML(filename, lineNumber)
}

export default gadget
