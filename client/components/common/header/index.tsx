import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
// style
import { Title } from '../../../styles/common'
import { btnContainer } from '../../../styles/common'
import { Color, Media } from '../../../styles/Variables'
// Store
import { useDispatch, useSelector } from 'react-redux'
import { login, changeTxt, logOut } from '../../../store/slices/UserSystem'
import { userDetails } from '../../../store/slices/UserSlice'
//utils
import { getUserInfo } from '../../../utils/GetUserInfo'

// component
import Button from '../../button'
import Breadcrumb from '../../Breadcrumb'
interface Props {
  userName?: string
}
import Heading from '../../Heading'
export const Header: React.FC<Props> = ({
  userName
}) => {
  const dispatch = useDispatch()
  let peopleList = useSelector(userDetails)
  // let peopleList = useSelector(login)
  console.log(peopleList)
  const router = useRouter();
  const pathName = router.pathname
  const stringSlice = (): string => {
    let result: any
    const stringArray = pathName.split('/');
    const prams = stringArray[stringArray.length - 2]
    const page = stringArray[stringArray.length - 1]
    // if(prams) Router.push(`${page}/${prams}/${router.query.id}`)
    if (prams == 'page') {
      result = stringArray[1]
    } else {
      result = userName
    }
    // switch (stringArray[1]) {
    //   case `user_list`:
    //     if (prams == `user`) {
    //       result = prams
    //     } else {
    //       result = `ユーザー`
    //     }
    //     console.log(prams)
    //     break;
    //   case `dashboard`:
    //     result = `ダッシュボード`
    //     break;
    //   case `disposal_project`:
    //     result = `売却案件一覧`
    //     break;
    //   case `mail_magazine`:
    //     result = `メルマガ登録者一覧　`
    //     break;
    //   case `master`:
    //     result = `マスター管理`
    //     break;
    //   case `article`:
    //     result = `記事一覧`
    //     break;
    //   case `article_category`:
    //     result = `記事カテゴリ一覧　`
    //     break;
    //   case `tag`:
    //     result = `タグ一覧`
    //     break;
    //   case `[id]`:
    //     result = router.query.id
    //     break;
    //   default:
    //     result = stringArray[1]
    //     break;
    // }
    return result
  }
  const [loginFlag, setLoginFlag] = useState(false)
  useEffect(() => {
    if (getUserInfo().loginKey && getUserInfo().userName) {
      setLoginFlag(true)
    } else {
      setLoginFlag(false)
    }
  }, [pathName])
  let headerBtn
  if (loginFlag) {
    headerBtn = (
      <Button
        txt={`LOGOUT`}
        color={Color.white}
        fontSize={1}
        borderRadius={true}
        backgroundColor={Color.purple}
        onClick={(e: any) => { dispatch(logOut(e)) }}
      />
    )
  } else {
    if (pathName !== `/login`) {
      headerBtn = (
        <Button
          txt={`LOGIN`}
          color={Color.white}
          fontSize={1}
          borderRadius={true}
          backgroundColor={Color.purple}
          onClick={(e: any) => { dispatch(logOut(e)) }}
        />
      )
    }
  }
  return (
    <>
      <header>
        {/* <div css={btnContainer}>
          {headerBtn}
        </div> */}
      </header>
      {pathName != '/login' && (
        <div css={Title.box}>
          <Heading heading={stringSlice() && stringSlice().toUpperCase().replace(`_`, ' ')} />
          {/* <Breadcrumb page={stringSlice().toUpperCase()} /> */}
        </div>
      )}
    </>
  )
}

export default Header