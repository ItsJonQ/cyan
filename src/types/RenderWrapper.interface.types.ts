import CyanInterface from './Cyan.interface.types'

export interface RenderWrapperInterface extends CyanInterface {
  /**
   * Sets props for the Component and re-renders it into the DOM.
   *
   * @param {Object} props The props to set.
   * @returns {RenderWrapper} The RenderWrapper instance.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.setProps({ title: 'Hello' })
   */
  setProps(props: Object): this

  /**
   * Sets a prop for the Component and re-renders it into the DOM.
   *
   * @param {string} prop The prop (key) to set.
   * @param {any} value The prop (value) to set.
   * @returns {RenderWrapper} The RenderWrapper instance.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.setProp('title', 'Hello')
   */
  setProp(prop: string, value: any): this

  /**
   * Unmounts the Component from the DOM.
   *
   * @returns {RenderWrapper} The RenderWrapper instance.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.cleanUp()
   */
  cleanUp(): this

  /**
   * Unmounts the Component from the DOM.
   *
   * @returns {RenderWrapper} The RenderWrapper instance.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.unmount()
   */
  unmount(): this

  /**
   * Renders and mounts a Component into the DOM.
   *
   * @param {any} component The Component to mount.
   * @returns {RenderWrapper} The RenderWrapper instance.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.unmount()
   * wrapper.mount(<span />)
   */
  mount(component: any): this

  /**
   * Renders and mounts the Component into the DOM.
   *
   * @param {any} props The props to pass into the Component.
   * @returns {RenderWrapper} The RenderWrapper instance.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.unmount()
   * wrapper.render({ title: 'Hello' })
   */
  render(props: any): this

  /**
   * Logs the outerHTML of main DOM element.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.debug()
   */
  debug(selector?: string, options?: any): void

  /**
   * Get the outerHTML of main DOM element.
   *
   * @returns {string} The innerHTML from the DOM.
   *
   * @example
   * const wrapper = cy.render(<div />)
   * wrapper.html()
   */
  html(): string
}

export default RenderWrapperInterface
