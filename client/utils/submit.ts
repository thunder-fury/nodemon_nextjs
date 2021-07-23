import { getOrigin } from './OriginUrl'
import { render } from './Router'
import axios from 'axios'
axios.defaults.withCredentials = true

// const tokenSave = (tokenKey:any, maxAge:number) => {
//   operateCookie.set(`loginToken`, tokenKey, maxAge)
// }

export const submit = async ( endpoint:string, state:any ) => {
  const body ={
    title: state.info.title,
    description: state.info.description,
    created: state.info ,
    outor: state.info,
    profile: state.info
  }
  const res = fetch(endpoint, {
    method: `POST`,
    body: JSON.stringify(body)
  })
  console.log(res)
}