import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import moment from 'moment'
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
  const date = new Date()
  const [image, setImage] = useState<FIXME>(``)
  const [val, setVal] = useState<string>(``)
  const { respons } = _masterRes
  const dispatch = useDispatch()
  const _punchList = useSelector(punchList)
  const _allPanch = useSelector(allPanch)

  useEffect(() => {
    const memberId: FIXME = getSesstion(`member_id`)
    dispatch(fetchAsyncCurrentUserAllPunch(memberId))
  }, [])

  // const dur1 = moment.duration('11:11:10')
  // const dur2 = moment.duration({ hours: 11, minutes: 11, seconds: 10 })
  // console.log(dur1.seconds()) //10
  // console.log(date.getTime())
  // console.log(dur1.asSeconds()) //40270
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
