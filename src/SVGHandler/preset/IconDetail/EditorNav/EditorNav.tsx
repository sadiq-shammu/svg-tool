import * as React from "react"
import SVGContext from "../../../context"
import { copyToClipboard, codeBeautifier } from "../../../js"
import "./style.css"

function EditorNav(props: any) {
  const { className = "" } = props
  const {
    data,
    currentIdx,
    dataCount,
    setCurrentIdx,
    shouldBeautifyText,
    setShouldBeautifyText,
    setIconEditorText,
    shouldEditorUpdate,
    currentData,
    setCurrentData,
    enableDownloadPanel,
    setEnableDownloadPanel,
  }: any = React.useContext(SVGContext)

  const { name = "", fontName = "" }: any = currentData || {}

  const [copiedHint, setCopiedHint] = React.useState(false)

  const onBeatifyEditor = () => {
    /* const editorEl: any = document.getElementById("viewer-icon") || ""
    setShouldBeautifyText(!shouldBeautifyText)

    const minifyText = !shouldBeautifyText
      ? codeBeautifier(editorEl.innerHTML, 3)
      : codeBeautifier(editorEl.innerHTML, 0)

    editorEl.value = minifyText
    setIconEditorText(minifyText) */

    setShouldBeautifyText(!shouldBeautifyText)
  }

  const onPreviousItem = () => {
    const lengthLimit = -1 === currentIdx - 1 ? dataCount - 1 : currentIdx - 1
    setIconEditorText("")
    setCurrentIdx(lengthLimit)
    setCurrentData(data[lengthLimit])
  }

  const onNextItem = () => {
    const lengthLimit = dataCount === currentIdx + 1 ? 0 : currentIdx + 1
    setIconEditorText("")
    setCurrentIdx(lengthLimit)
    setCurrentData(data[lengthLimit])
  }

  const onCopyEditorText = () => {
    const editorEl: any = document.getElementById("simple-editor-box")
    copyToClipboard(editorEl.value)
    setCopiedHint(true)

    setTimeout(() => {
      setCopiedHint(false)
    }, 3000)
  }

  const onCloseEditor = () => {
    setCurrentIdx(-1)
    setShouldBeautifyText(false)
  }

  const onDownloadClick = () => {
    setEnableDownloadPanel(!enableDownloadPanel)
  }

  return (
    <div className={`editor-nav`}>
      {/* (name || fontName) && (
        <section className={`editor-name-info`}>
          {name && <h1 className="name">{name}</h1>}
          {fontName && <h4 className="font-name">{fontName}</h4>}
        </section>
      ) */}

      <section className="editor-events">
        <div className={`en-item download`} onClick={onDownloadClick}>
          download
        </div>

        <div
          className={`en-item beautify ${shouldBeautifyText ? "active" : ""}`}
          onClick={onBeatifyEditor}
        >
          beautify
        </div>

        <div
          className={`en-item copy ${copiedHint ? "copied" : ""} ${
            shouldEditorUpdate === false ? "ac-copy" : ""
          }`}
          onClick={onCopyEditorText}
        >
          {copiedHint ? "copied" : "copy"}
        </div>

        <span className="divider"></span>

        <div
          className={`en-item prev`}
          title="previous icon"
          onClick={onPreviousItem}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z" />
          </svg>
        </div>

        <div className={`en-item next`} title="next icon" onClick={onNextItem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z" />
          </svg>
        </div>

        <div
          className={`en-item close-editor`}
          title="close editor"
          onClick={onCloseEditor}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.26933 329">
            <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
          </svg>
        </div>
      </section>
    </div>
  )
}

export { EditorNav }
export default EditorNav
