import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Router, { useRouter } from 'next/router'
// style
import GlobalStyle from '../styles/GlobalStyle'
import styled from '@emotion/styled'
import { Media } from '../styles/Variables'
const AppWrap = styled.div`
  ${Media.mq}{
    &.padding{
      padding-left: 265px;
    }
  }
`
// utils
import store from '../store'
import { getUserInfo } from '../utils/GetUserInfo'
//componet
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Loading from '../components/Loading'
import Menu from '../components/Menu'
  
const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const pathName = router.pathname

  Router.events.on(`routeChangeStart`, (url) => {
    console.log(`Route is changing...`)
    setLoading(true)
  })
  Router.events.on(`routeChangeComplete`, (url) => {
    console.log(`Route is changing is complete...`)
    setLoading(false)
  })

  // const [displayNav, setDisplayNav] = useState(false)
  // useEffect(() => {
  //   if (!getUserInfo().loginKey && !getUserInfo().userName) {
  //     Router.push(`/login`)
  //     setDisplayNav(false)
  //   } else {
  //     setDisplayNav(true)
  //   }
  //   if (pathName === `/login`) {
  //     if (getUserInfo().loginKey && getUserInfo().userName) {
  //       Router.push(`/dashboard`)
  //     }
  //   }
  // }, [pathName])

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
      </Provider>
    </>
  )
}
export default App