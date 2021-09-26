function getLocalTime() {
  let date = new Date()
  let stamp = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  return stamp
}

export { getLocalTime }
