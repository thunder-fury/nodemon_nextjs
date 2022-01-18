import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
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
} from '../../../stores/slices/signupSlice'
import Router from 'next/router'
import { FIXME } from '../../../types/Any'
import ModalGrid from '../../../components/Atoms/Modal'
export const SignUpBlock = () => {
  const [userEmeil, setUserEmail] = useState(``)
  const [userPassword, setUserPassword] = useState(``)
  const [userName, setUserName] = useState(``)
  const dispatch = useDispatch()
  const _signupRes = useSelector(signupRes)
  const _signupLoading = useSelector(signupLoading)
  const [open, setOpen] = useState(false)
  const { status }: FIXME = _signupRes
  const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ padding: 3 }}>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            SignUp
          </Typography>
          <Box sx={{ width: 400, display: 'flex', flexDirection: 'column' }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
            <Box sx={{ width: 300 }}>
              <ButtonGroup
                fullWidth
                variant={`contained`}
                aria-label={`outlined primary button group`}
              >
                <Button
                  size={`large`}
                  color={`primary`}
                  fullWidth
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    submit(e)
                  }
                >
                  Signup
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default SignUpBlock
