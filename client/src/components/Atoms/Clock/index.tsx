import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncPunchPost,
  fetchAsyncPunchGet,
  punchRes,
  setVal,
  punchList,
} from '../../../stores/slices/punchSlice'
import { dateFormat } from '../../../utils/format'
import IntegrationNotistack from '../SuccessSnackbar'
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack'
import ModalGrid from '../Modal'
import { FIXME } from '../../../types/Any'
import { PunchType } from '../../../types/Punch.Type'
const DigitalClock = () => {
  const [date, setDate] = useState(new Date())
  const [note, setNote] = useState(``)
  const dispatch = useDispatch()
  const _punchRes = useSelector(punchRes)
  const _punchList = useSelector(punchList)
  const { status, respons, error_messge, success_messge }: FIXME = _punchRes
  const getCurrDayPunchRes = _punchList?.respons?.find(
    (v: PunchType) => v.date === dateFormat(new Date())
  )
  const yobi = ['日', '月', '火', '水', '木', '金', '土']
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date())
    }, 10000)
  }, [date])
  const currentTime = `${date.getHours()}:${date.getMinutes()}`
  const punch = {
    attendance: () => {
      const attendance = {
        attendance: currentTime,
        leaving: null,
        date: dateFormat(new Date()),
        active: `am`,
        member_id: 41,
        note,
      }
      dispatch(fetchAsyncPunchPost(attendance))
    },
    leaving: () => {
      const attendance = {
        attendance: currentTime,
        leaving: currentTime,
        date: dateFormat(new Date()),
        active: `am`,
        member_id: 41,
        note,
      }
      dispatch(fetchAsyncPunchPost(attendance))
    },
  }
  useEffect(() => {
    dispatch(fetchAsyncPunchGet())
  }, [])
  return (
    <Container sx={{ display: `flex`, justifyContent: `center` }}>
      {/* {error_messge && <ModalGrid res={_punchRes} setVal={setVal} />}
      {success_messge && <ModalGrid res={_punchRes} setVal={setVal} />} */}
      <Box>
        <Box sx={{ textAlign: `center`, mt: 4 }}>
          <Typography variant={`h3`} sx={{ fontSize: `20px` }}>
            {date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}
            <strong>({yobi[date.getDay()]})</strong>
          </Typography>
          <Typography variant={`h2`}>
            <time suppressHydrationWarning>
              {`${date.getHours()}`}:
              {date.getMinutes() < 10
                ? `0${date.getMinutes()}`
                : `${date.getMinutes()}`}
              {/* {date.getSeconds() < 10
                ? `0${date.getSeconds()}`
                : `${date.getSeconds()}`} */}
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
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNote(e.target.value)
              }
            />
          </Box>
          <Box sx={{ width: 400, mt: 2, display: `flex`, gap: 2 }}>
            {/* <IntegrationNotistack respons={_punchRes} punch={punch} /> */}
            <Button
              color={`info`}
              onClick={punch.attendance}
              fullWidth
              variant={`contained`}
            >
              出勤
            </Button>
            <Button onClick={punch.leaving} fullWidth variant={`contained`}>
              退勤
            </Button>
          </Box>
          <Box sx={{ width: `100%`, mt: 2 }}>
            {error_messge && <Alert severity="error">{error_messge}</Alert>}
            {success_messge && (
              <Alert severity="success">{success_messge}</Alert>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default DigitalClock
