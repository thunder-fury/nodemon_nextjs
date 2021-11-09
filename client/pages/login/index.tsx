import { useState } from 'react'
import Axios from 'axios'
import { css } from '@emotion/react'
export const Login = () => {
  const [ userEmeil, setUserEmail] = useState(``)
  const [ userPassword, setUserPassword] = useState(``)
  const [ loginStatus, setLoginStatus] = useState(``)
  const login = async () => {
    await Axios.post(`/api/login`, {
      email: userEmeil,
      password: userPassword,
    }).then(res => {
      if(res.data.message) {
        setLoginStatus(res.data.message)
      } else {
        setLoginStatus(`${res.data[0].user_name}님 로그인 되었습니다`)
      }
    })
      // .catch(err =>{
      //   console.log(err)
      // })
  }
  return (
    <div css={css`
      max-width: 300px;
      width: 100%;
      margin: 0 auto;
    `}>
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor={`user_email`}>메일 : </label>
        <input
          id={`user_email`}
          type={`email`}
          name={`user_email`}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
          setUserEmail(e.target.value)
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor={`password`}>패스워드 : </label>
        <input
          id={`password`}
          name={`password`}
          type={`password`}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setUserPassword(e.target.value)
          }}
        />
      </div>
      <button
        css={css`
          text-align: center;
          background: black;
          color: white;
          padding: 5px;
          margin-top: 10px;
        `}
        onClick={login}
      >
        회원가입
      </button>
    </>
    {loginStatus && (
      <p>{loginStatus}</p>
    )}
    </div>
  )
}

export default Login
