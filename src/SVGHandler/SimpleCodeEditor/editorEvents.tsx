function editorTabIndent(event: any) {
  const el: any = event.currentTarget

  if (event.keyCode === 9) {
    let selectionStartPos = el.selectionStart
    let selectionEndPos = el.selectionEnd
    let oldContent = el.value

    el.value =
      oldContent.substring(0, selectionStartPos) +
      "\t" +
      oldContent.substring(selectionEndPos)

    el.selectionStart = el.selectionEnd = selectionStartPos + 1
    event.preventDefault()
  }
}

function getTextAreaRowLength(value: any) {
  return value.split("\n").length
}

export { getTextAreaRowLength, editorTabIndent }
