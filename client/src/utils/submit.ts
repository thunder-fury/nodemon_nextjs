import { getOrigin } from './OriginUrl'
import { render } from './Router'
// import axios from 'axios'
// axios.defaults.withCredentials = true

// const tokenSave = (tokenKey:any, maxAge:number) => {
//   operateCookie.set(`loginToken`, tokenKey, maxAge)
// }

export const submit = async (endpoint: string, formData: any) => {
  const method = `POST`
  const body = JSON.stringify(formData)
  const headers = {
    Accept: 'application/json',
    // 'Content-Type': 'application/json'
    'Content-Type': 'multipart/form-data',
    // Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'multipart/form-data',
  }
  try {
    const req = await fetch(endpoint, { method, body, headers })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
      })
  } catch (error) {
    console.log(error)
  }
}
