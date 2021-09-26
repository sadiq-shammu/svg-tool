import * as React from "react"
import SVGContext from "../../context"
import { searchEngine } from "../../js"
import { Card } from "../Card"
import "./style.css"

function GridCard(props: any) {
  const { className = "", ...rest } = props
  const {
    data,
    currentIdx,
    setCurrentIdx,
    searchKey,
    setIconEditorText,
    setShouldBeautifyText,
    setIconSize,
    iconSize,
    setCurrentData,
  }: any = React.useContext(SVGContext)

  const onCardItemClick = (e: any) => {
    let idx = e.currentTarget.getAttribute("item-idx")

    setCurrentIdx(Number(idx))
    setCurrentData(data[Number(idx)])
    setIconSize(iconSize)
    setIconEditorText("")
    setShouldBeautifyText(false)
  }

  return (
    <>
      {data && (
        <div className={`grid-card ${className}`}>
          {data.map((item: any, index: number) => {
            return (
              <div
                key={`gc-item-${index}`}
                className={`gc-item ${currentIdx === index ? "active" : ""}`}
                onClick={onCardItemClick}
                item-idx={index}
                search-key={searchEngine(item.tags, searchKey)}
              >
                <Card {...item} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export { GridCard }
export default GridCard
