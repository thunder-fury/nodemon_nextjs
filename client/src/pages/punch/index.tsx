import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DigitalClock from '../../components/Atoms/Clock'
import { fetchAsyncPunch, punchRes } from '../../stores/slices/punchSlice'

const Punch = () => {
  const dispatch = useDispatch()
  const _punchRes = useSelector(punchRes)
  // useEffect(() => {
  //   dispatch(fetchAsyncPunch(1))
  // }, [])
  const { data } = _punchRes
  console.log(_punchRes)
  return (
    <>
      <DigitalClock />
    </>
  )
}

export default Punch
