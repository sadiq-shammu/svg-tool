import * as React from "react"
import SVGContext from "../../context"
import { Svg, Image } from "../../interface"
import "./style.css"

function Card(props: any) {
  const { className = "", type = "", path, name, viewBox, ...rest } = props
  const { showIconInfo }: any = React.useContext(SVGContext)

  return (
    <section className={`card ${className}`}>
      {type === "svg" && <Svg viewBox={viewBox}>{path}</Svg>}
      {type === "image" && <Image src={path} />}
      {name && (
        <div className={`card-name ${showIconInfo ? "active" : ""}`}>
          {name}
        </div>
      )}
    </section>
  )
}

export { Card }
export default Card
