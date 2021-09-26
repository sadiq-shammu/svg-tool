import * as React from "react"
import "./style.css"

function Svg(props: any) {
  const {
    className = "",
    children,
    viewBox = "0 0 24 24",
    width = "24px",
    height,
    fill,
    styles,
    ...rest
  } = props

  return (
    children && (
      <i className={`svg ${className}`} {...rest}>
        <svg
          xmlns={"http://www.w3.org/2000/svg"}
          // xmlnsXlink={"http://www.w3.org/1999/xlink"}
          // version="1.1"
          viewBox={viewBox}
          width={width}
          height={height}
          fill={fill}
          style={styles}
        >
          {/* <g dangerouslySetInnerHTML={{ __html: children }}></g> */}
          {children}
        </svg>
      </i>
    )
  )
}

export { Svg }
export default Svg
