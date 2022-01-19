import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Graph from '../../components/Atoms/Graph'
import { masterRes } from '../../stores/slices/masterSlice'
import {
  fetchAsyncCurrentUserAllPunch,
  punchList,
  allPanch,
} from '../../stores/slices/punchSlice'
import { fetchAsyncProfileUpdate } from '../../stores/slices/signupSlice'
import { FIXME } from '../../types/Any'
import { getSesstion } from '../../utils/Sesstion'

const MyPage = () => {
  const _masterRes = useSelector(masterRes)
  const [image, setImage] = useState<FIXME>(``)
  const [val, setVal] = useState<string>(``)
  const { respons } = _masterRes
  const dispatch = useDispatch()
  const _punchList = useSelector(punchList)
  const _allPanch = useSelector(allPanch)
  const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const formData = new FormData()
    const memberId: FIXME = getSesstion(`member_id`)
    formData.append(`image`, image[0])
    formData.append(`member_id`, memberId)
    dispatch(fetchAsyncProfileUpdate(formData))
  }
  useEffect(() => {
    const memberId: FIXME = getSesstion(`member_id`)
    dispatch(fetchAsyncCurrentUserAllPunch(memberId))
  }, [])
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
        {/* <Typography variant={`h3`}>Profile</Typography> */}
        <Box sx={{ display: `center`, justifyContent: `center` }}>
          <Avatar
            alt="Woo"
            src={respons && respons[0]?.image}
            sx={{ width: 70, height: 70 }}
          />
          {respons && respons[0]?.user_name}
        </Box>
        {/* user email:{respons && respons[0]?.email}
        <br />
        user name:{respons && respons[0]?.user_name} */}
      </Box>
      <Box sx={{ width: `100%`, mt: 3 }}>
        <Graph respons={_allPanch && _allPanch} daysOfWork={[1]} />
      </Box>
    </Container>
  )
}

export default MyPage
