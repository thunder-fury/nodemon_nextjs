import { render } from '../utils/Router'
import { useRouter } from 'next/router'
import { getUserInfo } from './GetUserInfo'
export const redirect = (path: string) => {
  // const router = useRouter()
  // const pathname = router.pathname
  if (!getUserInfo().loginKey && !getUserInfo().userName) {
    render(`/login`)
  } else {
    render(path)
  }
}
