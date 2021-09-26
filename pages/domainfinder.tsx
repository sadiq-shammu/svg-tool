import * as React from "react"
import Head from "next/head"
import { SBaseProps } from "../src/typings"
import { DomainFinder as DomainFinderView } from "../src/DomainFinder"
import "./style.css"

const DomainFinder: React.FunctionComponent<SBaseProps> = () => {
  return <DomainFinderView />
}

export default DomainFinder
