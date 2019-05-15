/* global jasmine */
import rimraf from 'rimraf'
import path from 'path'
import { fork, spawn } from 'child_process'
import goGadgetGo from './gadget'

const baseDir = path.join(process.cwd(), '/.cyan')

let cachedProcess

/**
 * Caching the existing Jasmine timeout to be modified
 * and restored before/after every inspect call
 */
let _defaultTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

/**
 * Setting up our inspector.
 *
 * The Jasmine timers have to be cached and reset here.
 * The inspector forces the timer to be super long, in order
 * to accomodate the debugging/inspect experience.
 *
 * We need to restore the timer to the original state to
 * ensure subsequent tests run as expected.
 */
beforeEach(() => {
  _defaultTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL
})
afterEach(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = _defaultTimeoutInterval
})

const cleanUp = () => {
  rimraf.sync(baseDir)
}

const inspector = async process => {
  return new Promise(resolve => {
    process.on('exit', () => {
      cleanUp()
      resolve()
    })
  })
}

export const openBrowser = () => {
  spawn('open', ['http://localhost:3000'], {
    stdio: 'inherit',
  })
}

export const inspect = async () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000000

  if (cachedProcess && cachedProcess.exit) {
    cachedProcess.exit(0)
    cachedProcess = null
  }

  goGadgetGo()

  const scriptpath = path.join(__dirname, 'brain')
  const brainProcess = fork(scriptpath)

  cachedProcess = brainProcess

  openBrowser()

  return await inspector(brainProcess)
}

process.on('SIGINT', () => {
  cleanUp()
})

export default inspect
