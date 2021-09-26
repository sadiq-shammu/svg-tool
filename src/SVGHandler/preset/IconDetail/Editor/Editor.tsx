import * as React from "react"
import SVGContext from "../../../context"
import { codeBeautifier } from "../../../js"
import { SimpleCodeEditor } from "../../../SimpleCodeEditor"
import "./style.css"

function Editor(props: any) {
  const { className = "", ...rest } = props
  const [editorDefaultValue, setEditorDefaultValue] = React.useState("")
  const {
    iconRotate,
    iconFlip,
    iconEditorText,
    setIconEditorText,
    currentIdx,
    currentData,
    shouldBeautifyText,
    shouldEditorUpdate,
    setShouldEditorUpdate,
  }: any = React.useContext(SVGContext)

  React.useEffect(() => {
    const viewerIconEl: any = document.getElementById("viewer-icon") || ""

    const minifyText = !shouldBeautifyText
      ? codeBeautifier(viewerIconEl.innerHTML, 0)
      : codeBeautifier(viewerIconEl.innerHTML, 3)

    setIconEditorText(minifyText)
    setEditorDefaultValue(minifyText)
  }, [iconRotate, iconFlip, iconEditorText, currentData, shouldBeautifyText])

  const onEditorChange = (e: any) => {
    setShouldEditorUpdate(true)
  }

  const onApplyChanges = () => {
    const editorEl: any = document.getElementById("simple-editor-box") || ""
    setIconEditorText(editorEl.value)
    setShouldEditorUpdate(false)
  }

  return (
    <section className={`code-editor`}>
      {iconEditorText !== "" && (
        <SimpleCodeEditor
          theme="dark"
          value={iconEditorText}
          beautify={shouldBeautifyText}
          onChange={onEditorChange}
        />
      )}

      {iconEditorText === "" && (
        <SimpleCodeEditor
          theme="dark"
          value={editorDefaultValue}
          beautify={shouldBeautifyText}
          onChange={onEditorChange}
        />
      )}

      {shouldEditorUpdate && (
        <div className="apply-changes" onClick={onApplyChanges}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="m.828 13.336c-.261.304-.388.691-.357 1.091s.215.764.52 1.024l7.403 6.346c.275.235.616.361.974.361.044 0 .089-.002.134-.006.405-.036.77-.229 1.028-.542l12.662-15.411c.254-.31.373-.7.334-1.099-.04-.399-.231-.759-.541-1.014l-2.318-1.904c-.639-.524-1.585-.432-2.111.207l-9.745 11.861-3.916-3.355c-.628-.536-1.576-.465-2.115.163z" />
          </svg>
        </div>
      )}
    </section>
  )
}

export { Editor }
export default Editor
