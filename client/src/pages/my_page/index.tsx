import { Avatar, Box, Container, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { masterRes } from '../../stores/slices/masterSlice'

const MyPage = () => {
  const _masterRes = useSelector(masterRes)
  console.log(_masterRes)
  const { respons } = _masterRes
  return (
    <Container sx={{ width: 500, display: `flex`, textAlign: `left` }}>
      <Box>
        <Typography variant={`h4`}>MyPage</Typography>
        <Box>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, mt: 2 }}
          />
        </Box>
        user email:{respons && respons[0]?.email}
        <br />
        user name:{respons && respons[0]?.user_name}
      </Box>
    </Container>
  )
}

export default MyPage
