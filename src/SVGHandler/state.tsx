import * as React from "react"

function SVGState(props: any) {
  const [data, setData] = React.useState(props.config || [])

  const [dataCount, setDataCount] = React.useState(data.length || 0)
  const [currentIdx, setCurrentIdx] = React.useState(-1)
  const [currentData, setCurrentData] = React.useState({})

  const [chipData, setChipData] = React.useState(props.chipList || [])
  const [chipListActive, setChipListActive] = React.useState(false)

  const [searchKey, setSearchKey] = React.useState("")
  const [searchFilterCount, setSearchFilterCount] = React.useState(0)

  const [showIconInfo, setShowIconInfo] = React.useState(false)
  const [iconEditorText, setIconEditorText] = React.useState("")
  const [shouldBeautifyText, setShouldBeautifyText] = React.useState(true)
  const [shouldEditorUpdate, setShouldEditorUpdate] = React.useState(false)
  const [enableDownloadPanel, setEnableDownloadPanel] = React.useState(false)

  const [iconSize, setIconSize] = React.useState(props.iconDefaultSize || 24)
  const [iconColor, setIconColor] = React.useState(
    props.iconDefaultColor || "red"
  )
  const [iconRotate, setIconRotate] = React.useState(0)
  const [iconFlip, setIconFlip] = React.useState(0)

  return {
    data,
    setData,
    dataCount,
    setDataCount,
    currentIdx,
    setCurrentIdx,
    currentData,
    setCurrentData,

    chipData,
    setChipData,
    chipListActive,
    setChipListActive,

    showIconInfo,
    setShowIconInfo,

    searchKey,
    setSearchKey,
    searchFilterCount,
    setSearchFilterCount,

    shouldBeautifyText,
    setShouldBeautifyText,
    enableDownloadPanel,
    setEnableDownloadPanel,

    iconEditorText,
    setIconEditorText,
    shouldEditorUpdate,
    setShouldEditorUpdate,

    iconSize,
    setIconSize,
    iconColor,
    setIconColor,
    iconRotate,
    setIconRotate,
    iconFlip,
    setIconFlip,
  }
}

export { SVGState }
