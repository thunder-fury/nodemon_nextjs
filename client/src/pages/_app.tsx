import { AppProps } from 'next/app'
import store from '../store'
import Head from '../components/common/Head'
import { Provider } from 'react-redux'
import { Reset } from '../styles/Reset'
import { Footer } from '../components/common/footer'
import { Header } from '../components/common/header'
import Breadcrumb from '../components/Breadcrumb'
import { useRouter } from 'next/router'
import styled from 'styled-components'


const App: React.FC<AppProps> = ({
  Component, 
  pageProps
}) => {
  const router = useRouter()
  const pathname = router.pathname
  const stringSlice = ():string => {
    let result:string = ''
    const stringArray = pathname.split ('/');
    const prams = stringArray [stringArray.length -1]
    return prams
  }
  return(
    <Provider store={store}>
      <Head 
        title={''}
        description={''}
      />
      <Header />
      <Reset />
      <Component {...pageProps} />
      {(() => {
        if(pathname != '/') {
          return(
            <Breadcrumb 
              page={stringSlice()}
            />
          )
        }
      })()}
      <Footer />
    </Provider>
  )
}
export default App