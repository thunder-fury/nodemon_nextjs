import Router, { useRouter } from 'next/router'
// style
import { Title } from '../../../styles/common'
// Store
import { useDispatch, useSelector } from 'react-redux'
import { userDetails } from '../../../store/slices/UserSlice'
//utils

// component
interface Props {
  userName?: string
}
export const Header: React.FC<Props> = ({
  userName
}) => {
  const dispatch = useDispatch()
  let peopleList = useSelector(userDetails)
  const router = useRouter();
  const pathName = router.pathname
  
  return (
    <>
      <header>
        <div css={Title.box}>
        </div>
      </header>
    </>
  )
}

export default Header