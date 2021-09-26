/**
 * @info reference - https://stackoverflow.com/questions/3913355/how-to-format-tidy-beautify-in-javascript
 */

const getIndent = (level: any, space?: number) => {
  let result = ""
  let i = level * (space || 0)

  if (level < 0) {
    throw "Level is below 0"
  }
  while (i--) {
    result += " "
  }
  return result
}

function codeBeautifier(html: any, indent?: number) {
  html = html.trim()
  let tabIndent = indent
  let result = ""
  let indentLevel = 0
  let tokens = html.split(/</)

  for (let i = 0, l = tokens.length; i < l; i++) {
    let parts = tokens[i].split(/>/)
    if (parts.length === 2) {
      if (tokens[i][0] === "/") indentLevel--

      result += getIndent(indentLevel, tabIndent)
      if (tokens[i][0] !== "/") {
        indentLevel++
      }

      if (i > 0) {
        result += "<"
      }

      result += parts[0].trim() + ">" + (tabIndent === 0 ? "" : "\n")

      if (parts[1].trim() !== "") {
        result +=
          getIndent(indentLevel, tabIndent) +
          parts[1].trim().replace(/\s+/g, " ")
      }

      if (parts[0].match(/^(img|hr|br)/)) indentLevel--
    } else {
      result += getIndent(indentLevel, tabIndent) + parts[0]
    }
  }
  return result
}

export { codeBeautifier }
