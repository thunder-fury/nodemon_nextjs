import {
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'

const DigitalClock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date())
    }, 1000)
  }, [date])
  return (
    <Container sx={{ display: `flex`, justifyContent: `center` }}>
      <Box>
        <Box sx={{ textAlign: `center`, mt: 4 }}>
          <Typography variant={`h2`}>
            <time suppressHydrationWarning>
              {`${date.getHours()}`}:{`${date.getMinutes()}`}:
              {date.getSeconds() < 10
                ? `0${date.getSeconds()}`
                : `${date.getSeconds()}`}
            </time>
          </Typography>
          <Box sx={{ width: 300, mt: 2 }}>
            <Button fullWidth variant={`contained`}>
              出勤
            </Button>
          </Box>
          <Box sx={{ mt: 3 }}>
            <TextField
              id="outlined-multiline-static"
              label="note"
              fullWidth
              multiline
              rows={4}
              placeholder={`note`}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default DigitalClock
