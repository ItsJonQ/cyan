;(function() {
  function renderToggleDarkMode() {
    const navLinkNodes = Array.from(document.querySelectorAll('.nav-site a'))
    const toggleNode = navLinkNodes[navLinkNodes.length - 1]

    toggleNode.setAttribute('title', 'Toggle Dark Mode')

    let isDarkMode = localStorage.getItem('mode') === 'dark'

    toggleNode.addEventListener('click', toggleDarkMode)

    toggleNode.innerHTML = isDarkMode ? 'Go Light' : 'Go Dark'

    function toggleDarkMode(event) {
      event.preventDefault()

      localStorage.setItem(
        'mode',
        localStorage.getItem('mode') === 'dark' ? 'light' : 'dark',
      )

      let isDarkMode = localStorage.getItem('mode') === 'dark'

      isDarkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark')

      toggleNode.innerHTML = isDarkMode ? 'Go Light' : 'Go Dark'
    }
  }

  function renderDarkMode() {
    localStorage.getItem('mode') === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  function initialize() {
    renderDarkMode()
    requestAnimationFrame(() => {
      renderToggleDarkMode()
    })
  }

  initialize()
})()
