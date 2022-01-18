import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'
import {
  fetchAsyncLogin,
  loginRes,
  setVal,
  loginLoading,
} from '../../../stores/slices/loginSlice'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useDispatch, useSelector } from 'react-redux'
import ModalGrid from '../../../components/Atoms/Modal'
import { FIXME } from '../../../types/Any'
import { getSesstion } from '../../../utils/Sesstion'
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { Visibility, VisibilityOff } from '@mui/icons-material'
const Loading = dynamic(() => import('../../../components/Atoms/loading'), {
  ssr: false,
})
interface State {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}
export const LoginBlock = () => {
  const [userEmeil, setUserEmail] = useState(``)
  const [userPassword, setUserPassword] = useState(``)
  const dispatch = useDispatch()
  const _loginRes = useSelector(loginRes)
  const _loginLoading = useSelector(loginLoading)
  const { status }: FIXME = _loginRes
  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const data = {
      email: userEmeil,
      password: userPassword,
    }
    dispatch(fetchAsyncLogin(data))
  }
  useEffect(() => {
    getSesstion(`role`) && Router.push(`/my_page`)
  }, [])

  return (
    <>
      {status && <ModalGrid res={_loginRes} setVal={setVal} />}
      <Loading open={_loginLoading} />
      <Box display={`flex`} justifyContent={`center`}>
        <Card sx={{ padding: 3 }}>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Log in to your account
          </Typography>
          <Box width={400} display={`flex`} flexDirection={`column`}>
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
            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl> */}
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
          <Box display={`flex`} justifyContent={`center`} mt={2}>
            <Box width={400}>
              <ButtonGroup
                fullWidth
                variant={`contained`}
                aria-label={`outlined primary button group`}
              >
                <Button
                  size={`large`}
                  color={`primary`}
                  fullWidth
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => login(e)}
                >
                  Login
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  )
}

export default LoginBlock
