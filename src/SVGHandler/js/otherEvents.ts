import * as React from "react"

const stringToDom = (str: any) => {
  let domParser = new DOMParser()
  return domParser.parseFromString(str, "image/svg+xml")
}

function copyToClipboard(newValue: string) {
  const createTextarea = document.createElement("textarea")
  document.body.appendChild(createTextarea)
  createTextarea.value = newValue
  createTextarea.select()
  document.execCommand("copy")
  createTextarea.remove()
}

function searchEngine(value?: any, key?: any) {
  const isSearchTerm = value.indexOf(key.toLowerCase()) > -1
  /* if (isSearchTerm) {
    count++
    setIconSearchCount(count)
  } */
  return isSearchTerm ? "true" : "false"
}

export { copyToClipboard, stringToDom, searchEngine }
