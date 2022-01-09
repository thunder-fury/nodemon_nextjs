import {
  Box,
  Button,
  ButtonGroup,
  CardHeader,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from '@mui/material'
import router from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FIXME } from '../../../types/Any'
interface Props {
  res: FIXME
  setVal: FIXME
}
const ModalGrid: React.FC<Props> = ({ res, setVal }: Props) => {
  const dispatch = useDispatch()
  const { error_messge, success_messge, status }: FIXME = res
  const rootRef = useRef(null)
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  useEffect(() => {
    error_messge && toggle()
  }, [setOpen])
  return (
    <>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: 'relative',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          <Typography id="server-modal-description" sx={{ pt: 2 }}>
            {success_messge ? success_messge : error_messge}
          </Typography>
          <ButtonGroup
            sx={{ mt: 2 }}
            fullWidth
            variant={`contained`}
            aria-label={`outlined primary button group`}
          >
            {error_messge && (
              <Button
                color={`error`}
                onClick={() => {
                  dispatch(setVal({ key: `res`, value: `` }))
                }}
              >
                Close
              </Button>
            )}
            {success_messge && (
              <Button
                color={`success`}
                onClick={() => {
                  dispatch(setVal({ key: `res`, value: `` }))
                  status === 200 && router.push(`/login`)
                }}
              >
                Login
              </Button>
            )}
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}
export default ModalGrid
