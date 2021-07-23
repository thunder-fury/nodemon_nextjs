import { getCookie } from './Session'
export const  getUserInfo:any = () => {
  let result:Object = {}
  if (typeof window !== "undefined") {
    const loginKey = getCookie(`Login`)
    const userName = getCookie(`Name`)
    result = {
      loginKey,
      userName
    }
  }
  return result
}