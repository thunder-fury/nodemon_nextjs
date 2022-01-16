import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import { useState } from 'react'

interface Props {
  open: boolean
}

const Loading: React.FC<Props> = ({ open }: Props) => {
  const app = document.getElementById('__next')
  if (!app) {
    return <div />
  }
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Loading
