import { useState } from 'react'
import Axios from 'axios'
import { Box, Button, ButtonGroup, CardHeader, TextField } from '@material-ui/core'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncSignup, signupError, signupMaster } from '../stores/slices/signupSlice'
export const SignUp = () => {
  const [ userEmeil, setUserEmail] = useState(``)
  const [ userPassword, setUserPassword] = useState(``)
  const [ userName, setUserName] = useState(``)
  const dispatch = useDispatch()
  const _signupError = useSelector(signupError)
  console.log(_signupError)
  const submit = async () => {
    const data = {
      email: userEmeil,
      password: userPassword,
      user_name: userName
    }
    dispatch(fetchAsyncSignup(data))
  }
  return (
    <>
      <h1>SignUp</h1>
      <Box
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box
          sx={{ width: 500, display: 'flex', flexDirection: 'column' }}
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
      <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
        <Box sx={{width: 400}} >
        <ButtonGroup fullWidth variant={`contained`} aria-label={`outlined primary button group`}>
          <Button size={`large`} color={`primary`} fullWidth onClick={submit}>Signup</Button>
        </ButtonGroup>
      </Box>
      </Box>
      <Box sx={{ m: 2, textAlign: `center` }}>
        {_signupError && _signupError}
      </Box>
    </>
  )
}

const container = css`
  max-width: 500px;
  margin: 0 auto;
`

export default SignUp
