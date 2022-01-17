import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Graph from '../../components/Atoms/Graph'
import { masterRes } from '../../stores/slices/masterSlice'
import { fetchAsyncProfileUpdate } from '../../stores/slices/signupSlice'
import { FIXME } from '../../types/Any'

const MyPage = () => {
  const _masterRes = useSelector(masterRes)
  const [image, setImage] = useState<FIXME>(``)
  const [val, setVal] = useState<string>(``)
  const { respons } = _masterRes
  const dispatch = useDispatch()
  const data = {
    file: image[0],
  }
  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append(`image`, image[0])
    dispatch(fetchAsyncProfileUpdate(formData))
    // fetch('/api/profile_update', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }
  return (
    <Container
      sx={{
        width: 500,
        display: `flex`,
        justifyContent: `center`,
        textAlign: `left`,
        flexWrap: `wrap`,
      }}
    >
      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: `flex` }}>
          <TextField
            type={`file`}
            name={`file`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.files)
            }
          />
          <Button
            size={`large`}
            color={`primary`}
            onClick={(e) => onSubmitHandler(e)}
          >
            イメージ変更
          </Button>
        </Box>
        <Typography variant={`h3`}>Profile</Typography>
        <Box sx={{ display: `center`, justifyContent: `center` }}>
          <Avatar
            alt="Woo"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 70, height: 70 }}
          />
        </Box>
        user email:{respons && respons[0]?.email}
        <br />
        user name:{respons && respons[0]?.user_name}
      </Box>
      <Box sx={{ width: `100%`, height: 200 }}>
        <Graph daysOfWork={[1]} />
      </Box>
    </Container>
  )
}

export default MyPage
