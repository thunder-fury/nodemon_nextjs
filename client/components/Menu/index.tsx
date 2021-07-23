import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import Icon from '../Icon'
import { getOrigin } from '../../utils/OriginUrl'
import { getUserInfo } from '../../utils/GetUserInfo'
import { nav } from '../../styles/components/atoms/Menu'
import { Color } from '../../styles/Variables'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/slices/UserSystem'
import { btnContainer } from '../../styles/common'
import Button from '../button'

const LinkTxt = styled.span`
  margin-left: 10px;
`
interface Props {
  menuDatas: any
}
export const Menu: React.FC<Props> = ({
  menuDatas
}) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const pathName = router.pathname
  const [url, setUrl] = useState('')
  useEffect(() => {
    const setOrigin = async () => {
      let res = await getOrigin()
      setUrl(res)
    }
    setOrigin()
  }, [])
  const getCurrentPage = (link: string): string => {
    const linkStrs = link.split(`/`)
    return linkStrs[1]
  }
  const getPathName = (link: string): string => {
    let path = ''
    const pathsStrs = pathName.split(`/`)
    pathsStrs.forEach(pathsStr => {
      switch (pathsStr) {
        case getCurrentPage(link):
          path = getCurrentPage(link)
          break;
      }
    });
    return path
  }
  return (
    <>
      <nav css={nav.sidebar}>
        <div css={nav.userContainer}>
          <h1 css={nav.title}>M＆A ADMIN</h1>
          <h2>{getUserInfo().userName}様</h2>
        </div>
        <ul css={nav.navList}>
          {(menuDatas.map((menu: any) => {
            // console.log(getCurrentPage(menu.link))
            return (
              <li css={nav.list} key={menu.text}>
                <Link href={`${url}${menu.link}`}>
                  <a
                    css={nav.linkTxt}
                    className={getCurrentPage(menu.link) === getPathName(menu.link) ? 'is-active' : ''}
                  >
                    <Icon h={15} w={15} icon={menu.icon} />
                    <LinkTxt>{menu.text}</LinkTxt>
                  </a>
                </Link>
              </li>
            )
          }))}
        </ul>
        <div css={logOutContainer}>
          <Button
            txt={`LOGOUT`}
            color={Color.white}
            fontSize={1}
            borderRadius={true}
            onClick={(e: any) => { dispatch(logOut(e)) }}
          />
        </div>
      </nav>
    </>
  )
}

const logOutContainer = css`
  height: 40px;
  margin-top: 20px;
`

export default Menu