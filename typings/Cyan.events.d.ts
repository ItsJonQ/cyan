export interface CyanEvents {
  /**
   * Fires a copy event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').copy()
   */
  copy(eventProps: any): void

  /**
   * Fires a cut event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').cut()
   */
  cut(eventProps: any): void

  /**
   * Fires a paste event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').paste()
   */
  paste(eventProps: any): void

  /**
   * Fires a compositionEnd event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').compositionEnd()
   */
  compositionEnd(eventProps: any): void

  /**
   * Fires a compositionStart event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').compositionStart()
   */
  compositionStart(eventProps: any): void

  /**
   * Fires a compositionUpdate event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').compositionUpdate()
   */
  compositionUpdate(eventProps: any): void

  /**
   * Fires a keyDown event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').keyDown()
   */
  keyDown(eventProps: any): void

  /**
   * Fires a keyPress event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').keyPress()
   */
  keyPress(eventProps: any): void

  /**
   * Fires a keyUp event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').keyUp()
   */
  keyUp(eventProps: any): void

  /**
   * Fires a focus event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').focus()
   */
  focus(eventProps: any): void

  /**
   * Fires a blur event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').blur()
   */
  blur(eventProps: any): void

  /**
   * Fires a focusIn event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').focusIn()
   */
  focusIn(eventProps: any): void

  /**
   * Fires a focusOut event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').focusOut()
   */
  focusOut(eventProps: any): void

  /**
   * Fires a change event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').change()
   */
  change(eventProps: any): void

  /**
   * Fires a hover event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').hover()
   */
  hover(eventProps: any): void

  /**
   * Fires a input event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').input()
   */
  input(eventProps: any): void

  /**
   * Fires a invalid event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').invalid()
   */
  invalid(eventProps: any): void

  /**
   * Fires a submit event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').submit()
   */
  submit(eventProps: any): void

  /**
   * Fires a click event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').click()
   */
  click(eventProps: any): void

  /**
   * Fires a contextMenu event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').contextMenu()
   */
  contextMenu(eventProps: any): void

  /**
   * Fires a dblClick event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').dblClick()
   */
  dblClick(eventProps: any): void

  /**
   * Fires a drag event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').drag()
   */
  drag(eventProps: any): void

  /**
   * Fires a dragEnd event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').dragEnd()
   */
  dragEnd(eventProps: any): void

  /**
   * Fires a dragEnter event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').dragEnter()
   */
  dragEnter(eventProps: any): void

  /**
   * Fires a dragExit event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').dragExit()
   */
  dragExit(eventProps: any): void

  /**
   * Fires a dragLeave event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').dragLeave()
   */
  dragLeave(eventProps: any): void

  /**
   * Fires a dragOver event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').dragOver()
   */
  dragOver(eventProps: any): void

  /**
   * Fires a dragStart event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').dragStart()
   */
  dragStart(eventProps: any): void

  /**
   * Fires a drop event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').drop()
   */
  drop(eventProps: any): void

  /**
   * Fires a mouseDown event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').mouseDown()
   */
  mouseDown(eventProps: any): void

  /**
   * Fires a mouseEnter event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').mouseEnter()
   */
  mouseEnter(eventProps: any): void

  /**
   * Fires a mouseLeave event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').mouseLeave()
   */
  mouseLeave(eventProps: any): void

  /**
   * Fires a mouseMove event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').mouseMove()
   */
  mouseMove(eventProps: any): void

  /**
   * Fires a mouseOut event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').mouseOut()
   */
  mouseOut(eventProps: any): void

  /**
   * Fires a mouseOver event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').mouseOver()
   */
  mouseOver(eventProps: any): void

  /**
   * Fires a mouseUp event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').mouseUp()
   */
  mouseUp(eventProps: any): void

  /**
   * Fires a select event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').select()
   */
  select(eventProps: any): void

  /**
   * Fires a touchCancel event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').touchCancel()
   */
  touchCancel(eventProps: any): void

  /**
   * Fires a touchEnd event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').touchEnd()
   */
  touchEnd(eventProps: any): void

  /**
   * Fires a touchMove event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').touchMove()
   */
  touchMove(eventProps: any): void

  /**
   * Fires a touchStart event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').touchStart()
   */
  touchStart(eventProps: any): void

  /**
   * Fires a scroll event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').scroll()
   */
  scroll(eventProps: any): void

  /**
   * Fires a wheel event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').wheel()
   */
  wheel(eventProps: any): void

  /**
   * Fires a abort event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').abort()
   */
  abort(eventProps: any): void

  /**
   * Fires a canPlay event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').canPlay()
   */
  canPlay(eventProps: any): void

  /**
   * Fires a canPlayThrough event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').canPlayThrough()
   */
  canPlayThrough(eventProps: any): void

  /**
   * Fires a durationChange event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').durationChange()
   */
  durationChange(eventProps: any): void

  /**
   * Fires a emptied event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').emptied()
   */
  emptied(eventProps: any): void

  /**
   * Fires a encrypted event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').encrypted()
   */
  encrypted(eventProps: any): void

  /**
   * Fires a ended event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').ended()
   */
  ended(eventProps: any): void

  /**
   * Fires a loadedData event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').loadedData()
   */
  loadedData(eventProps: any): void

  /**
   * Fires a loadedMetadata event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').loadedMetadata()
   */
  loadedMetadata(eventProps: any): void

  /**
   * Fires a loadStart event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').loadStart()
   */
  loadStart(eventProps: any): void

  /**
   * Fires a pause event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').pause()
   */
  pause(eventProps: any): void

  /**
   * Fires a play event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').play()
   */
  play(eventProps: any): void

  /**
   * Fires a playing event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').playing()
   */
  playing(eventProps: any): void

  /**
   * Fires a progress event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').progress()
   */
  progress(eventProps: any): void

  /**
   * Fires a rateChange event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').rateChange()
   */
  rateChange(eventProps: any): void

  /**
   * Fires a seeked event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').seeked()
   */
  seeked(eventProps: any): void

  /**
   * Fires a seeking event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').seeking()
   */
  seeking(eventProps: any): void

  /**
   * Fires a stalled event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').stalled()
   */
  stalled(eventProps: any): void

  /**
   * Fires a suspend event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').suspend()
   */
  suspend(eventProps: any): void

  /**
   * Fires a timeUpdate event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').timeUpdate()
   */
  timeUpdate(eventProps: any): void

  /**
   * Fires a volumeChange event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').volumeChange()
   */
  volumeChange(eventProps: any): void

  /**
   * Fires a waiting event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').waiting()
   */
  waiting(eventProps: any): void

  /**
   * Fires a load event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').load()
   */
  load(eventProps: any): void

  /**
   * Fires a error event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').error()
   */
  error(eventProps: any): void

  /**
   * Fires a animationStart event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').animationStart()
   */
  animationStart(eventProps: any): void

  /**
   * Fires a animationEnd event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').animationEnd()
   */
  animationEnd(eventProps: any): void

  /**
   * Fires a animationIteration event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').animationIteration()
   */
  animationIteration(eventProps: any): void

  /**
   * Fires a transitionEnd event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').transitionEnd()
   */
  transitionEnd(eventProps: any): void

  /**
   * Fires a doubleClick event on the main DOM element.
   *
   * @param {Object} eventProps Properties for the event.
   *
   * @example
   * cy.get('input').doubleClick()
   */
  doubleClick(eventProps: any): void
}

export default CyanEvents
