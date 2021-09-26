import * as React from "react"
import "./style.css"

function Image(props: any) {
  const { className = "", src = "", styles, ...rest } = props
  return (
    <div className={`image ${className}`} {...rest}>
      <img src={src} alt="" style={styles} />
    </div>
  )
}

export { Image }
export default Image
