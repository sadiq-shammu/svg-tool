import * as React from "react"
import SVGContext from "./context"
import { SVGState } from "./state"
import { iconsConfig } from "./fixtures/fixture"
import CodeEditor from "./SimpleCodeEditor"
import {
  FilterPanel,
  FilterInfo,
  ChipList,
  GridCard,
  Editor,
  Viewer,
  EditorNav,
  OptionNav,
  DownloadOption,
} from "./preset"
import "./style.css"

function SVGHandler(props: any) {
  const { className = "" } = props
  const {
    data,
    currentIdx,
    setCurrentData,
    enableDownloadPanel,
    ...rest
  }: any = SVGState({
    config: iconsConfig,
    chipList: ["filled", "outlined", "rounded", "stroked", "sharp"],
    iconDefaultColor: "#000000",
    iconDefaultSize: 180,
  })

  React.useEffect(() => {
    setCurrentData(data[currentIdx])
  }, [currentIdx])

  const handlerContextProps = {
    data,
    currentIdx,
    setCurrentData,
    ...rest,
  }

  return (
    <SVGContext.Provider value={handlerContextProps}>
      <div className={`svg-handler ${className}`}>
        <div className="sh-header">
          <div className="logo">S</div>

          <div className="search-filter">
            <FilterPanel />
            <ChipList isAccordion={true} />
          </div>

          <FilterInfo />
        </div>

        <div className="sh-cards">
          <GridCard />
        </div>

        {currentIdx > -1 && (
          <div className="sh-viewer">
            {enableDownloadPanel === true && <DownloadOption />}
            {enableDownloadPanel === false && <OptionNav />}
            {enableDownloadPanel === false && <EditorNav />}
            <Viewer />
            <Editor />
          </div>
        )}

        {/* <CodeEditor /> */}
      </div>
    </SVGContext.Provider>
  )
}

export { SVGHandler }
export default SVGHandler
