const _pad = (num, n = 2) => {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
}

export const formatTime = (interval) => {
  interval = interval | 0
  const minute = _pad((interval / 60) | 0)
  const second = _pad(interval % 60)
  return `${minute}:${second}`
}
