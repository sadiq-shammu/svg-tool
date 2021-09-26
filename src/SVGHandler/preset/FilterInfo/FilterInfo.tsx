import * as React from "react"
import SVGContext from "../../context"
import "./style.css"

function FilterInfo(props: any) {
  const { className = "", ...rest } = props
  const { dataCount, showIconInfo, setShowIconInfo }: any = React.useContext(
    SVGContext
  )

  const onShowInfoClick = () => {
    setShowIconInfo(!showIconInfo)
  }

  return (
    <section className={`filter-info ${className}`}>
      {dataCount && (
        <div className="fi-container">
          <div
            className={`show-info-icon ${showIconInfo ? "active" : ""}`}
            onClick={onShowInfoClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 426.667 426.667"
            >
              <rect x="192" y="192" width="42.667" height="128" />
              <path d="M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333     S331.2,0,213.333,0z M213.333,384c-94.08,0-170.667-76.587-170.667-170.667S119.253,42.667,213.333,42.667     S384,119.253,384,213.333S307.413,384,213.333,384z" />
              <rect x="192" y="106.667" width="42.667" height="42.667" />
            </svg>
          </div>

          <div className="count-info">
            <h1 className="total-count">{dataCount}</h1>
            <span className="small-info">icons</span>
          </div>
        </div>
      )}
    </section>
  )
}

export { FilterInfo }
export default FilterInfo
