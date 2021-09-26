import * as React from "react"
import SVGContext from "../../context"
import "./style.css"

function ChipList(props: any) {
  const { className = "", isAccordion = false, ...rest } = props
  const {
    chipData,
    chipListActive,
    setChipListActive,
    searchKey,
    setSearchKey,
  }: any = React.useContext(SVGContext)

  const onChipArrowClick = () => {
    setChipListActive(!chipListActive)
  }

  const onChipItemClick = (e: any) => {
    setSearchKey(e.currentTarget.innerText)
  }

  return (
    <>
      {chipData && (
        <div className={`chip-wrapper ${className}`} {...rest}>
          {isAccordion && (
            <section
              className={`chip-accordion ${chipListActive ? "active" : ""}`}
              onClick={onChipArrowClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <polygon points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128 "></polygon>
              </svg>
            </section>
          )}

          {chipListActive === true && (
            <section className={`chip`}>
              {chipData.map((item: any, index: number) => {
                return (
                  <div
                    key={`chip-item-${index}`}
                    className={`chip-item ${
                      searchKey.toLowerCase() === item.toLowerCase()
                        ? "active"
                        : ""
                    }`}
                    onClick={onChipItemClick}
                  >
                    {item}
                  </div>
                )
              })}
            </section>
          )}
        </div>
      )}
    </>
  )
}

export { ChipList }
export default ChipList
