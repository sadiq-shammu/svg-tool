import * as React from "react"
import { getTextAreaRowLength, editorTabIndent } from "./editorEvents"
import "./style.css"

function SimpleCodeEditor(props: any) {
  const {
    className = "",
    value = "",
    theme = "dark",
    onChange = () => {},
    beautify = false,
  } = props

  const [lineCount, setLineCount] = React.useState(1)

  React.useEffect(() => {
    const getTextAreaEl: any = document.getElementById("simple-editor-box")

    getTextAreaEl.value = value.replace(/\r?\n/g, "\n")
    setLineCount(getTextAreaRowLength(getTextAreaEl.value))
  }, [value, beautify])

  const onKeyDownEvent = (e: any) => {
    editorTabIndent(e)
  }

  const onTextBarChange = (e: any) => {
    const lineLength = getTextAreaRowLength(e.currentTarget.value)
    setLineCount(lineLength)
    onChange()
  }

  return (
    <section className={`simple-code-editor ${className} ${theme}`}>
      <ul className={`line-number`}>
        {Array.from(Array(lineCount), (item, i) => {
          return <li key={i}>{i + 1}</li>
        })}
      </ul>

      <div className="box">
        <textarea
          id={`simple-editor-box`}
          rows={lineCount}
          className={`text-bar`}
          // defaultValue={value}
          onKeyDown={onKeyDownEvent}
          onChange={onTextBarChange}
          style={{ tabSize: "2" }}
        ></textarea>
      </div>
    </section>
  )
}

export { SimpleCodeEditor }
export default SimpleCodeEditor
