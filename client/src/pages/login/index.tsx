import { Box, Button, Card, Modal, Typography } from '@mui/material'
import Router from 'next/router'
import LoginBlock from '../../components/Block/Login'

export const Login = () => {
  return (
    <>
      <LoginBlock />
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{ fontSize: 15, mt: 1 }}
          color="text.secondary"
          gutterBottom
        >
          ユーザー登録されてない方は登録が必要です。
        </Typography>
        <Button onClick={() => Router.push(`/signup`)}>Move Signup Page</Button>
      </Box>
    </>
  )
}

export default Login
