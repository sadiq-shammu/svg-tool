import * as React from "react"
import SVGContext from "../../context"
import "./style.css"

function FilterPanel(props: any) {
  const { className = "", ...rest } = props
  const { searchKey, setSearchKey, setChipListActive }: any = React.useContext(
    SVGContext
  )

  const onFilterDataUndo = () => {
    setSearchKey(searchKey.slice(0, -1))
  }

  const onClearFilterData = () => {
    setChipListActive(false)
    setSearchKey("")
  }

  const onInputChange = (e: any) => {
    setSearchKey(e.target.value)
    if (e.target.value.length > 0) {
      setChipListActive(true)
    }
  }

  return (
    <section className={`filter-panel ${className}`}>
      <input
        type="text"
        name="search-filter"
        placeholder="find you icon"
        className={`${searchKey !== "" ? "active" : ""}`}
        onChange={onInputChange}
        value={searchKey}
      />

      {searchKey.length > 0 && (
        <>
          <div className="fp-icon back" onClick={onFilterDataUndo}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"></path>
            </svg>
          </div>

          <div className="fp-icon clear" onClick={onClearFilterData}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.26933 329">
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path>
            </svg>
          </div>
        </>
      )}
    </section>
  )
}

export { FilterPanel }
export default FilterPanel
