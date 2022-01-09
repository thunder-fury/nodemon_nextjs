import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import Router, { useRouter } from 'next/router'
// style
import GlobalStyle from '../styles/GlobalStyle'
import { Media } from '../styles/Variables'
// utils
//componet
import store from '../stores/store'
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Layout from '../components/Layout'
import { FIXME } from '../types/Any'

const App: React.FC<AppProps> = ({ Component, pageProps }: FIXME) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const pathName = router.pathname
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <Provider store={store}>
        {/* <GlobalStyle /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </Provider>
    </>
  )
}
export default App
