import * as React from "react"
import SVGContext from "../../../context"
import { Svg, Image } from "../../../interface"
import "./style.css"

function Viewer(props: any) {
  const { className = "", ...rest } = props
  const {
    currentData,
    iconSize,
    iconColor,
    iconRotate,
    iconFlip,
    iconEditorText,
  }: any = React.useContext(SVGContext)
  const { type, viewBox, path, ...restSvg } = currentData || {}

  return (
    <section className={`viewer`}>
      {type === "svg" && path && iconEditorText === "" && (
        <Svg
          viewBox={viewBox}
          width={`${iconSize}px`}
          fill={`${iconColor}`}
          id={"viewer-icon"}
          styles={
            iconRotate !== 0 || iconFlip === -1
              ? {
                  transform: `rotate(-${iconRotate}deg) ${
                    iconFlip === -1 ? `scaleX(${iconFlip})` : ""
                  }`,
                }
              : {}
          }
        >
          {path}
        </Svg>
      )}

      {type === "image" && path && iconEditorText === "" && (
        <Image
          src={path}
          id={"viewer-icon"}
          styles={{
            width: `${iconSize}px`,
            transform: `${
              iconRotate !== 0 || iconFlip === -1
                ? `rotate(-${iconRotate}deg) ${
                    iconFlip === -1 ? `scaleX(${iconFlip})` : ""
                  }`
                : ""
            }`,
          }}
        />
      )}

      {(type === "svg" || type === "image") &&
        path &&
        iconEditorText !== "" && (
          <div
            style={{ display: "contents" }}
            id="viewer-icon"
            dangerouslySetInnerHTML={{ __html: iconEditorText }}
          ></div>
        )}
    </section>
  )
}

export { Viewer }
export default Viewer
