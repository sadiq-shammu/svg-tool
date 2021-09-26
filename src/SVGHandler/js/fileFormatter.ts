import { getLocalTime } from "./timeFormatter"

function doFileFormat(fileName: any, fileType?: any) {
  return `${fileName}-${getLocalTime()}`
}

export { doFileFormat }
