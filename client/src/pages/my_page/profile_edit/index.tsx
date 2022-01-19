import { Label } from '@mui/icons-material'
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
import Graph from '../../../components/Atoms/Graph'
import { masterRes } from '../../../stores/slices/masterSlice'
import {
  fetchAsyncProfileUpdate,
  signupLoading,
  updateRes,
  setVal,
} from '../../../stores/slices/signupSlice'
import { FIXME } from '../../../types/Any'
import { getSesstion } from '../../../utils/Sesstion'
import EmailIcon from '@mui/icons-material/Email'
import { css } from '@emotion/react'
import Loading from '../../../components/Atoms/loading'
import ModalGrid from '../../../components/Atoms/Modal'
const MyPage = () => {
  const _masterRes = useSelector(masterRes)
  const [image, setImage] = useState<FIXME>(``)
  const [imagePath, serImagePath] = useState(``)
  const [userName, setUSerName] = useState<string>(``)
  const loading = useSelector(signupLoading)
  const _updateRes = useSelector(updateRes)
  const { respons } = _masterRes
  const { status } = _updateRes
  const dispatch = useDispatch()
  const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const formData = new FormData()
    const memberId: FIXME = getSesstion(`member_id`)
    formData.append(`image`, image[0])
    formData.append(`member_id`, memberId)
    !userName
      ? formData.append(`user_name`, respons[0]?.user_name)
      : formData.append(`user_name`, userName)
    dispatch(fetchAsyncProfileUpdate(formData))
  }
  console.log(_updateRes)
  return (
    <>
      {status && <ModalGrid res={_updateRes} setVal={setVal} />}
      {/* <Loading open={loading} /> */}
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
          <Box sx={{ display: `flex`, gap: 1, alignItems: `center` }}>
            <EmailIcon sx={{ width: 20 }} />
            {respons && respons[0]?.email}
          </Box>
          <Box sx={{ display: `flex` }}>
            <Box sx={{ display: `center`, justifyContent: `center` }}>
              <Avatar
                alt="Woo"
                src={respons && respons[0]?.image}
                sx={{ width: 70, height: 70 }}
              />
            </Box>
            <TextField
              type={`file`}
              name={`file`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setImage(e.target.files)
              }
            />
          </Box>
          <Box>
            <Box sx={{ mt: 3 }}>
              {respons && (
                <Box>
                  <TextField
                    label={`user id`}
                    fullWidth
                    defaultValue={respons && respons[0]?.user_name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setUSerName(e.target.value)
                    }
                  />
                </Box>
              )}
            </Box>
          </Box>
          <ButtonGroup
            fullWidth
            variant={`contained`}
            aria-label={`outlined primary button group`}
            sx={{ mt: 2 }}
          >
            <Button
              size={`large`}
              color={`primary`}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                onSubmitHandler(e)
              }
            >
              プロフィール変更
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ width: `100%`, height: 200 }}>
          {/* <Graph daysOfWork={[1]} /> */}
        </Box>
      </Container>
    </>
  )
}

const v = css`
  > input[type='file'] {
    overflow: hidden;
  }
`

export default MyPage
