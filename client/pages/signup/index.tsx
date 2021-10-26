import { useState } from 'react'
import Axios from 'axios'
import { css } from '@emotion/react'
export const SignUp = () => {
  const [ userEmeil, setUserEmail] = useState(``)
  const [ userPassword, setUserPassword] = useState(``)
  const [ userName, setUserName] = useState(``)
  
  const submit = async () => {
    console.log(userPassword,userEmeil )
    await Axios.post(`/api/sign_up`, { 
      email: userEmeil,
      password: userPassword,
      user_name: userName
    })
      .then(res => {
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
  }
  return (
    <div css={css`
      max-width: 300px;
      width: 100%;
      margin: 0 auto;
    `}>
    <>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor={`user_email`}>Mail Address : </label>
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
        <label htmlFor={`user_name`}>User Name : </label>
        <input 
          id={`user_name`} 
          type={`text`} 
          name={`user_name`}
          placeholder={``}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value)
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor={`password`}>password : </label>
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
        onClick={submit}
      >
      Sign Up
      </button>
    </>
      
    </div>
  )
}

export default SignUp