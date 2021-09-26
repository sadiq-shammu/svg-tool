import { doFileFormat } from "./fileFormatter"
import { copyToClipboard, stringToDom } from "./otherEvents"

/* dom to svg download */
function svgDownload(props: any) {
  const { node, fileName = "" } = props
  const svgBlobNode = new Blob([node], { type: "image/svg+xml;charset=utf-8" })
  const svgBlobEl = URL.createObjectURL(svgBlobNode)
  let downloadEl = document.createElement("a")

  downloadEl.href = svgBlobEl
  downloadEl.download = doFileFormat(fileName)
  document.body.appendChild(downloadEl)
  downloadEl.click()

  if (downloadEl) {
    document.body.removeChild(downloadEl)
  }
}

/* dom to png download */
function pngDownload(props: any) {
  const { node, fileName = "", urlType = "image/png" } = props

  const image = new Image()
  image.src = "data:image/svg+xml;base64," + window.btoa(node)

  if (image) {
    image.onload = function () {
      let downloadEl = document.createElement("a")
      let canvas = document.createElement("canvas")
      canvas.width = image.width
      canvas.height = image.height
      let context: any = canvas.getContext("2d")
      context.drawImage(image, 0, 0)

      downloadEl.download = doFileFormat(fileName)
      downloadEl.href = canvas.toDataURL(urlType)
      document.body.appendChild(downloadEl)
      downloadEl.click()

      if (downloadEl) {
        document.body.removeChild(downloadEl)
      }
    }
  }
}

/* dom to jpeg download */
function jpegDownload(props: any) {
  const { node, fileName = "", urlType = "image/jpeg" } = props
  const isWhiteIcon = node.indexOf('fill="#ffffff"')

  const image = new Image()
  image.src = "data:image/svg+xml;base64," + window.btoa(node)

  if (image) {
    image.onload = function () {
      let downloadEl = document.createElement("a")
      let canvas = document.createElement("canvas")
      canvas.width = image.width
      canvas.height = image.height
      let context: any = canvas.getContext("2d")
      context.fillStyle = `${isWhiteIcon > -1 ? "black" : "white"}`
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.drawImage(image, 0, 0)

      downloadEl.download = doFileFormat(fileName)
      downloadEl.href = canvas.toDataURL(urlType)
      document.body.appendChild(downloadEl)
      downloadEl.click()

      if (downloadEl) {
        document.body.removeChild(downloadEl)
      }
    }
  }
}

function jpgDownload(props: any) {
  jpegDownload(props)
}

/* dom to base64 download */
function base64Download(props: any) {
  const { node, fileName = "" } = props
  var image = new Image()
  image.src = "data:image/svg+xml;base64," + window.btoa(node)
  copyToClipboard(image.src)
}

/* image URL download */
function imageDirectDownload(props: any) {
  const { node, fileName = "" } = props

  const imageSrc: any = stringToDom(node).children[0].getAttribute("src")
  let downloadEl = document.createElement("a")

  downloadEl.download = doFileFormat(fileName)
  downloadEl.target = "_blank"
  downloadEl.href = imageSrc
  document.body.appendChild(downloadEl)
  downloadEl.click()

  if (downloadEl) {
    document.body.removeChild(downloadEl)
  }
}

export {
  svgDownload,
  pngDownload,
  jpegDownload,
  jpgDownload,
  base64Download,
  imageDirectDownload,
}
