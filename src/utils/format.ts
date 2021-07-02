import moment from 'moment'

export const formatLongStr = (val: string, mid = '...', start = 4, end = 4) => {
  if (val.length <= start + end) {
    return val
  }
  return `${val.substr(0, start)}${mid}${val.substr(val.length - end, end)}`
}

export const formatUTC = (time: string | number) => {
  if (!time) {
    return time
  }
  return moment(time).utc().format('YYYY.MM.DD HH:mm:ss')
}
