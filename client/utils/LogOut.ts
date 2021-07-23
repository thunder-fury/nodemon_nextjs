import { getOrigin } from './OriginUrl'
import { render } from './Router'
import { addCookie, getCookie,removeCookie } from './Session'
import axios from 'axios'
axios.defaults.withCredentials = true

export const sbmitLogOut = async ( endpoint:string, token:any ) => {
  console.log(endpoint)
  const obj ={
    token,
    logout_date: new Date()
  }
  const body = JSON.stringify(obj);
  const method = `POST`
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  try {
    const req = await fetch(endpoint,{ method, body, headers})
      .then((res) => {
        return res.json()
      }).then((data)  => {
        if(getCookie(`token`), getCookie(`Name`)) {
          removeCookie(`token`)
          removeCookie(`Name`)
          render(`/login`)
          alert(data.message)
        } else {
          alert(`メールアドレスもしくはパスワードが間違っています。再度ご確認の上ログインしてください。`)
        }
      })
  } catch (error) {
    console.log(error)
  }
}