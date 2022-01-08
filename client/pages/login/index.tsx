import { useState } from 'react'
import Axios from 'axios'
import { css } from '@emotion/react'
import { Box, Button, ButtonGroup, CardHeader, TextField } from '@material-ui/core'
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
    <div>
    <>
      <h1>Login</h1>
        <Box
          display={`flex`}
          justifyContent={`center`}
        >
          <Box
            width={500}
            display={`flex`}
            flexDirection={`column`}
          >
            <TextField
              fullWidth
              id={`outlined-basic`}
              label={`email`}
              variant={`outlined`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserEmail(e.target.value)
              }}
            />
            <br />
            <TextField
              fullWidth
              id={`outlined-basic`}
              label={`password`}
              type={`password`}
              variant={`outlined`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserPassword(e.target.value)
              }}
            />
            <br />
          </Box>
        </Box>
        <Box display={`flex`} justifyContent={`center`} mt={2}>
          <Box width={400} >
            <ButtonGroup fullWidth variant={`contained`} aria-label={`outlined primary button group`}>
              <Button size={`large`} color={`primary`} fullWidth onClick={login}>Login</Button>
            </ButtonGroup>
          </Box>
        </Box>
    </>
    {loginStatus && (
      <p>{loginStatus}</p>
    )}
    </div>
  )
}

export default Login
