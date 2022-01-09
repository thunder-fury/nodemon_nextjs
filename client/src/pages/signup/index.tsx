import { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  CardHeader,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncSignup,
  signupRes,
  signupLoading,
  setVal,
} from '../../stores/slices/signupSlice'
import Router from 'next/router'
import { FIXME } from '../../types/Any'
import ModalGrid from '../../components/Atoms/Modal'
export const SignUp = () => {
  const [userEmeil, setUserEmail] = useState(``)
  const [userPassword, setUserPassword] = useState(``)
  const [userName, setUserName] = useState(``)
  const dispatch = useDispatch()
  const _signupRes = useSelector(signupRes)
  const _signupLoading = useSelector(signupLoading)
  const [open, setOpen] = useState(false)
  const { status }: FIXME = _signupRes
  const submit = async () => {
    const data = {
      email: userEmeil,
      password: userPassword,
      user_name: userName,
    }
    dispatch(fetchAsyncSignup(data))
  }
  return (
    <>
      {_signupLoading && <CircularProgress />}
      {status && <ModalGrid res={_signupRes} setVal={setVal} />}
      <Typography variant="h4" gutterBottom component="div">
        SignUp
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: 500, display: 'flex', flexDirection: 'column' }}>
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
        <Box sx={{ width: 400 }}>
          <ButtonGroup
            fullWidth
            variant={`contained`}
            aria-label={`outlined primary button group`}
          >
            <Button size={`large`} color={`primary`} fullWidth onClick={submit}>
              Signup
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  )
}

export default SignUp
