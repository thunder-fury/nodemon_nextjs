import { getOrigin } from './OriginUrl'
import { render } from './Router'
import { addCookie, getCookie,removeCookie } from './Session'
import axios from 'axios'
axios.defaults.withCredentials = true

export const sbmitLogin = async ( endpoint:string, state:any ) => {
  let loginErrorMsg = ''
  const obj ={
    id: state.info['id'],
    password: state.info['password'],
    login_date: new Date()
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
        console.log(data);
        if(data.token && data.name) {
          addCookie(`token`, data.token, 6000)
          addCookie(`Name`, data.name, 6000)
          if(getCookie(`token`), getCookie(`Name`)) {
            alert(data.success)
            render(`/dashboard`)
          }
        } else {
          alert(`メールアドレスもしくはパスワードが間違っています。再度ご確認の上ログインしてください。`)
        }
      })
  } catch (error) {
    console.log(error)
  }
  return loginErrorMsg
}