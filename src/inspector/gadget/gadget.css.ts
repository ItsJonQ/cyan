export default `
:root {
  --backgroundColor: #1c1f21;
  --topBarHeight: 30px;
  --editorSize: 55%;
}
* {
  box-sizing: border-box;
}
html {
  -webkit-font-smoothing: antialiased;
}
body {
  background: var(--backgroundColor);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
}
#done {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 6px;
}
#bar {
  align-items: center;
  background: var(--backgroundColor);
  border-bottom: 1px solid black;
  display: flex;
  font-size: 12px;
  height: var(--topBarHeight);
  justify-content: flex-start;
  left: 0;
  padding: 0 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
#iframe {
  background: white;
  border: none;
  border-left: 2px solid black;
  height: calc(100% - var(--topBarHeight));
  position: fixed;
  right: 0;
  top: var(--topBarHeight);
  width: calc(100% - var(--editorSize));
}
#editor {
  height: calc(100% - var(--topBarHeight));
  left: 0;
  position: fixed;
  top: var(--topBarHeight);
  width: var(--editorSize);
}
#dragHandle {
  cursor: col-resize;
  height: calc(100% - var(--topBarHeight));
  left: var(--editorSize);
  position: fixed;
  top: var(--topBarHeight);
  width: 16px;
  z-index: 2000;
  margin-left: -8px;
  user-select: none;
}
#dragHandleLine {
  background: cyan;
  bottom: 0;
  height: 100%;
  left: 9px;
  position: absolute;
  top: 0;
  width: 2px;
  display: none;
}
#dragOverlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1999;
  background: rgba(0, 0, 0, 0.2);
  user-select: none;
}
html.is-dragging {
  cursor: col-resize;
}
html.is-dragging #dragHandleLine {
  display: block;
}
html.is-dragging #dragOverlay {
  display: block;
}
`
