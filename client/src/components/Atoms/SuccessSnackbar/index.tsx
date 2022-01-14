import Button from '@mui/material/Button'
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { FIXME } from '../../../types/Any'

interface Props {
  punch: () => void
  respons: FIXME
}

const IntegrationNotistackButton: React.FC<Props> = ({
  punch,
  respons,
}: Props) => {
  const { enqueueSnackbar } = useSnackbar()
  const { status } = respons
  const handleClick = () => enqueueSnackbar('I love snacks.')
  const [res, setRes] = useState(``)
  const handleClickVariant = (variant: VariantType) => async () => {
    punch()
    respons?.status && respons?.status === 200
      ? await enqueueSnackbar(respons?.messge, { variant })
      : await enqueueSnackbar(respons?.error_messge, { variant })
  }
  return (
    <>
      {/* <Button onClick={handleClick}>Show snackbar</Button> */}
      <Button
        fullWidth
        variant={`contained`}
        onClick={handleClickVariant(`error`)}
      >
        出勤
      </Button>
    </>
  )
}

const IntegrationNotistack: React.FC<Props> = ({ punch, respons }: Props) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <IntegrationNotistackButton punch={punch} respons={respons} />
    </SnackbarProvider>
  )
}

export default IntegrationNotistack
