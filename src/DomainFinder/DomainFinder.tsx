import * as React from "react"
import "./style.css"

function DomainFinder() {
  const [newList, setNewList] = React.useState([])
  let list: any = []

  const urlSplitter = (text: any) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return text.replace(urlRegex, (url: any) => list.push(url))
  }

  const onTxtBoxChange = (e: any) => {
    const val = e.currentTarget.value
    urlSplitter(val)
    setNewList(list)
  }

  return (
    <section className="finder">
      <div className="editor">
        <textarea id="edit-box" onChange={onTxtBoxChange}></textarea>
      </div>

      <div className="view">
        {newList &&
          newList.map((item: any, index: number) => {
            const removeCloser = item
              .replace(/"/g, "")
              .replace("</a>", "")
              .replace(/>/g, "")
            return (
              <a href={removeCloser} key={`item-${index}`}>
                {removeCloser}
              </a>
            )
          })}
      </div>
    </section>
  )
}

export { DomainFinder }
export default DomainFinder
