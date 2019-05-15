/* global ace */
const editor = () => {
  const done = document.querySelector('#done')
  done.addEventListener('click', () => {
    window.open('', '_self').close()
  })

  const iframe = document.querySelector('#iframe')
  const head = iframe.contentWindow.document.getElementsByTagName('head')[0]
  const body = iframe.contentWindow.document.body

  const renderPreview = html => {
    body.innerHTML = html
  }

  const style = document.createElement('style')
  style.innerHTML = window.css

  head.appendChild(style)
  renderPreview(window.markup)

  const editor = ace.edit('editor', {
    mode: 'ace/mode/html',
    fontSize: '14px',
    selectionStyle: 'text',
    theme: 'ace/theme/ayu-mirage',
  })

  editor.setValue(window.markup, -1)
  editor.resize()
  editor.getSession().setTabSize(2)
  editor.getSession().setUseSoftTabs(true)
  editor.getSession().setUseWrapMode(true)

  editor.session.on('change', function(delta) {
    renderPreview(editor.getValue())
  })

  const editorNode = document.querySelector('#editor')
  const iframeNode = document.querySelector('#iframe')
  const dragHandleNode = document.querySelector('#dragHandle')

  let isDragging = false

  const handleDragStart = () => {
    isDragging = true
    document.documentElement.classList.add('is-dragging')
  }

  const handleDragEng = () => {
    isDragging = false
    document.documentElement.classList.remove('is-dragging')
    editor.resize()
  }

  const handleDragMove = event => {
    if (!isDragging) return false
    const { x } = event
    const left = (x / window.innerWidth) * 100

    editorNode.style.width = `${left}%`
    iframeNode.style.width = `${100 - left}%`
    dragHandleNode.style.left = `${left}%`
    editor.resize()
  }

  dragHandleNode.addEventListener('mousedown', handleDragStart)
  window.addEventListener('mouseup', handleDragEng)
  window.addEventListener('mousemove', handleDragMove)
}

export default editor
