;(function() {
  function renderToggleDarkMode() {
    const navLinkNodes = Array.from(document.querySelectorAll('.nav-site a'))
    const toggleNodes = navLinkNodes[navLinkNodes.length - 1]
    let isDarkMode = localStorage.getItem('mode') === 'dark'

    toggleNodes.addEventListener('click', toggleDarkMode)

    toggleNodes.innerHTML = isDarkMode ? 'Light' : 'Dark'

    function toggleDarkMode(event) {
      event.preventDefault()

      localStorage.setItem(
        'mode',
        (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark',
      )
      let isDarkMode = localStorage.getItem('mode') === 'dark'

      isDarkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')

      toggleNodes.innerHTML = isDarkMode ? 'Light' : 'Dark'
    }
  }

  function renderDarkMode() {
    document.addEventListener('DOMContentLoaded', event => {
      ;(localStorage.getItem('mode') || 'dark') === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')
    })
  }

  function initialize() {
    renderDarkMode()
    requestAnimationFrame(() => {
      renderToggleDarkMode()
    })
  }

  initialize()
})()
