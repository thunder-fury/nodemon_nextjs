import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import Router from 'next/router'
import SignUpBlock from '../../components/Block/SignUp'

export const SignUp = () => {
  return (
    <>
      <SignUpBlock />
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{ fontSize: 15, mt: 1 }}
          color="text.secondary"
          gutterBottom
        >
          ユーザー登録されている方はログインページへ。
        </Typography>
        <Button onClick={() => Router.push(`/login`)}>Move Login Page</Button>
      </Box>
    </>
  )
}

export default SignUp
