import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DigitalClock from '../../components/Atoms/Clock'
import { fetchAsyncPunch, punchRes } from '../../stores/slices/punchSlice'

const Punch = () => {
  const dispatch = useDispatch()
  const _punchRes = useSelector(punchRes)
  const { data } = _punchRes
  return (
    <>
      <DigitalClock />
    </>
  )
}

export default Punch
