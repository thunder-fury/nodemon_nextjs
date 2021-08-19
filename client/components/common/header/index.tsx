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
        {/* <div css={btnContainer}>
          {headerBtn}
        </div> */}
      </header>
      {pathName != '/login' && (
        <div css={Title.box}>
          {/* <Breadcrumb page={stringSlice().toUpperCase()} /> */}
        </div>
      )}
    </>
  )
}

export default Header