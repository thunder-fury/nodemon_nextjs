import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  CardHeader,
  TextField,
  Typography,
} from '@mui/material'
import {
  fetchAsyncLogin,
  loginRes,
  setVal,
  loginLoading,
} from '../../stores/slices/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import ModalGrid from '../../components/Atoms/Modal'
import { FIXME } from '../../types/Any'
import { getSesstion } from '../../utils/Sesstion'
import Router from 'next/router'
import dynamic from 'next/dynamic'
const Loading = dynamic(() => import('../../components/Atoms/loading'), {
  ssr: false,
})
export const Login = () => {
  const [userEmeil, setUserEmail] = useState(``)
  const [userPassword, setUserPassword] = useState(``)
  const dispatch = useDispatch()
  const _loginRes = useSelector(loginRes)
  const _loginLoading = useSelector(loginLoading)
  const { status }: FIXME = _loginRes
  const login = async () => {
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
      <Typography variant="h4" gutterBottom component="div">
        Login
      </Typography>
      <Box display={`flex`} justifyContent={`center`}>
        <Box width={500} display={`flex`} flexDirection={`column`}>
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
        <Box width={400}>
          <ButtonGroup
            fullWidth
            variant={`contained`}
            aria-label={`outlined primary button group`}
          >
            <Button size={`large`} color={`primary`} fullWidth onClick={login}>
              Login
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  )
}

export default Login
