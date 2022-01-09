import { FIXME } from '../types/Any'

/* eslint-disable no-new-object */
export const addSesstion = (
  key: string,
  value: string,
  maxAge?: number | null
): void => {
  let cookie = `${key}=${value};path=/;`
  if (maxAge != null) {
    cookie += `max-age=${maxAge}`
  }
  document.cookie = cookie
}
export const getSesstion = (key: string): string | null => {
  const arr: FIXME = new Object()
  if (document.cookie !== '') {
    const tmp: string[] = document.cookie.split(';')
    for (let i = 0; i < tmp.length; i++) {
      const data: string[] = tmp[i].trim().split('=')
      arr[data[0]] = decodeURIComponent(data[1])
      if (key === data[0]) {
        return decodeURIComponent(data[1])
      }
    }
  }
  return null
}

export const removeSesstion = (key: string): void => {
  const maxAge = 0
  document.cookie = `${key}=;path=/;max-age=${maxAge}`
}
