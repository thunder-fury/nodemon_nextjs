import {
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncPunchPost,
  fetchAsyncPunchGet,
  punchRes,
} from '../../../stores/slices/punchSlice'

const DigitalClock = () => {
  const [date, setDate] = useState(new Date())
  const dispatch = useDispatch()
  const _punchRes = useSelector(punchRes)
  const yobi = ['日', '月', '火', '水', '木', '金', '土']
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date())
    }, 1000)
  }, [date])
  useEffect(() => {
    dispatch(fetchAsyncPunchGet())
  }, [])
  const punch = () => {
    const attendance = `${date.getHours()}:${date.getMinutes()}`
    const data = {
      attendance,
      leaving: '20:00:00',
      date: `2022-01-12`,
      active: `am`,
      member_id: 41,
      note: `備考`,
    }
    dispatch(fetchAsyncPunchPost(data))
  }
  return (
    <Container sx={{ display: `flex`, justifyContent: `center` }}>
      <Box>
        <Box sx={{ textAlign: `center`, mt: 4 }}>
          <Typography variant={`h3`} sx={{ fontSize: `20px` }}>
            {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
            <strong>({yobi[date.getDay()]})</strong>
          </Typography>
          <Typography variant={`h2`}>
            <time suppressHydrationWarning>
              {`${date.getHours()}`}:{`${date.getMinutes()}`}:
              {date.getSeconds() < 10
                ? `0${date.getSeconds()}`
                : `${date.getSeconds()}`}
            </time>
          </Typography>
          <Box sx={{ mt: 3 }}>
            <TextField
              id="outlined-multiline-static"
              label={`note`}
              fullWidth
              multiline
              rows={4}
              placeholder={`備考`}
            />
          </Box>
          <Box sx={{ width: 300, mt: 2 }}>
            <Button onClick={punch} fullWidth variant={`contained`}>
              出勤
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default DigitalClock
