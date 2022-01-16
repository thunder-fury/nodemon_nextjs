// import { ReactChildren, ReactChild } from "react";
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../common/header'
import { getSesstion } from '../../utils/Sesstion'
import { setVal } from '../../stores/slices/loginSlice'
import { fetchAsyncPunchGet } from '../../stores/slices/punchSlice'
import {
  fetchAsyncCurrentUserGet,
  masterRes,
} from '../../stores/slices/masterSlice'

// const Loading = dynamic(() => import("../../../components/Modules/Loading"), {
//   ssr: false,
// });
const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const pathName = router.pathname
  const [sesstion, setSesstion] = useState<string | null>(``)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const memberId = getSesstion(`member_id`)
    if (memberId) {
      dispatch(fetchAsyncCurrentUserGet(memberId))
      dispatch(fetchAsyncPunchGet(memberId))
    }
  }, [pathName])
  Router.events.on(`routeChangeStart`, (url) => {
    console.log(`Route is changing...`)
    setLoading(true)
  })
  Router.events.on(`routeChangeComplete`, (url) => {
    console.log(`Route is changing is complete...`)
    setLoading(false)
  })
  useEffect(() => {
    const role = getSesstion(`role`)
    !role && Router.push(`/login`)
  }, [pathName])
  return (
    <>
      {pathName !== `/login` && pathName !== `/signup` && <Header />}
      <div css={content.container}>{children}</div>
    </>
  )
}

const content = {
  container: css`
    grid-gap: 20px;
    height: 100vh;
  `,
}

export default Layout
