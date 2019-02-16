const _pad = (num, n = 2) => {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
}

// eslint-disable-next-line import/prefer-default-export
export const formatTime = (interval) => {
  interval = interval | 0
  const minute = _pad((interval / 60) | 0)
  const second = _pad(interval % 60)
  return `${minute}:${second}`
}

const randomScore = () => {
  const n = 8
  const m = 10
  let result = Math.random() * (m - n) + n
  while (result === n) {
    result = Math.random() * (m - n) + n
  }
  return result
}

export const randomPk = () => {
  let score = randomScore()
  let percentStr = score.toFixed(1)

  let percent = `${parseFloat(percentStr) * 10}.9%`
  // console.log(score.toFixed(2), percent)
  return {
    score: score.toFixed(2),
    percent
  }
}
