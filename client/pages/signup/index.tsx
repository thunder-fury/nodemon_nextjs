import { useState } from 'react'
import Axios from 'axios'
import { Box, Button, ButtonGroup, CardHeader, TextField } from '@material-ui/core'
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
    <>
      <h1>SignUp</h1>
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
            label={`name`}
            variant={`outlined`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value)
            }}
          />
          <br />
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
        </Box>
      </Box>
      <Box  display={`flex`} justifyContent={`center`} mt={2}>
      <Box width={400} >
        <ButtonGroup fullWidth variant={`contained`} aria-label={`outlined primary button group`}>
          <Button size={`large`} color={`primary`} fullWidth onClick={submit}>Signup</Button>
        </ButtonGroup>
      </Box>
      </Box>
    </>
  )
}

const container = css`
  max-width: 500px;
  margin: 0 auto;
`

export default SignUp
