import * as React from "react"
import SVGContext from "../../../context"
import {
  svgDownload,
  pngDownload,
  imageDirectDownload,
  jpgDownload,
  base64Download,
} from "../../../js"
import "./style.css"

function DownloadOption(props: any) {
  const { className = "" } = props
  const { currentData, setEnableDownloadPanel }: any = React.useContext(
    SVGContext
  )

  const [base64Copied, setBase64Copied] = React.useState(false)

  const node: any = document.getElementById("viewer-icon")
  const { name, type }: any = currentData || {}

  const onSvgDownloadClick = () => {
    svgDownload({
      node: node.innerHTML,
      fileName: name,
      type: type,
    })
    setEnableDownloadPanel(false)
  }
  const onPngDownloadClick = () => {
    pngDownload({
      node: node.innerHTML,
      fileName: name,
      type: type,
    })
    setEnableDownloadPanel(false)
  }

  const onJpgDownloadClick = () => {
    jpgDownload({
      node: node.innerHTML,
      fileName: name,
      type: type,
    })
    setEnableDownloadPanel(false)
  }

  const onDirectDownloadClick = () => {
    imageDirectDownload({
      node: node.innerHTML,
      fileName: name,
      type: type,
    })
    setEnableDownloadPanel(false)
  }

  const onBase64DownloadClick = (e: any) => {
    setBase64Copied(true)

    base64Download({
      node: node.innerHTML,
      fileName: name,
      type: type,
    })

    setTimeout(() => {
      setBase64Copied(false)
      setEnableDownloadPanel(false)
    }, 2000)
  }

  const onCloseSavePanel = () => {
    setEnableDownloadPanel(false)
  }

  return (
    <section className={`download-option ${className}`}>
      {type === "svg" && (
        <>
          <div className="save-item svg" onClick={onSvgDownloadClick}>
            svg
          </div>

          <div className="save-item png" onClick={onPngDownloadClick}>
            png
          </div>

          <div className="save-item jpg" onClick={onJpgDownloadClick}>
            jpg
          </div>

          <div
            className={`save-item base64 ${base64Copied ? "copied" : ""}`}
            onClick={onBase64DownloadClick}
          >
            {base64Copied ? "base 64 copied" : "base 64"}
          </div>
        </>
      )}

      {type === "image" && (
        <div className="save-item jpg" onClick={onDirectDownloadClick}>
          direct download
        </div>
      )}

      <span className="divider"></span>

      <div
        className={`save-item close-editor`}
        title="close save panel"
        onClick={onCloseSavePanel}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.26933 329">
          <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
        </svg>
      </div>
    </section>
  )
}

export { DownloadOption }
export default DownloadOption
