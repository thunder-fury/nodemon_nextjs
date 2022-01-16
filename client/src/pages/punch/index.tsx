import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DigitalClock from '../../components/Atoms/Clock'
import DataTable from '../../components/Atoms/Table'
import { fetchAsyncPunchGet, punchRes } from '../../stores/slices/punchSlice'
import { FIXME } from '../../types/Any'
import { PunchType } from '../../types/Punch.Type'

const Punch = () => {
  const dispatch = useDispatch()
  const _punchRes = useSelector(punchRes)

  const { respons } = _punchRes
  return <DigitalClock />
}

export default Punch
