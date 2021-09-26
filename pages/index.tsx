import * as React from "react"
import Head from "next/head"
import { SBaseProps } from "../src/typings"
import { SVGHandler } from "../src/SVGHandler"
import "./style.css"

const Index: React.FunctionComponent<SBaseProps> = () => {
  return <SVGHandler />
}

export default Index
