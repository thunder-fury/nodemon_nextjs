import axios from 'axios'
import { getApiUrl } from './ApiUrl'
import { render } from './Router'
export const submit = async (endpoint:string, state:any , renderPage:string) => {
  const res = await axios.post(getApiUrl() + endpoint, {
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    title: state.info['title'],
    description: state.info['madescriptionil'],
    created: state.info['created'],
    outor: state.info['outor'],
    profile: state.info['profile'],
  })
  .then(res => {
    const STATUS = res.status;
    console.log(STATUS)
    switch (STATUS) {
      case 400:
        throw Error('400 INVALID_TOKEN');
      case 401:
        throw Error('401 UNAUTHORIZED');
      case 500:
        throw Error('500 INTERNAL_SERVER_ERROR');
      case 502:
        throw Error('502 BAD_GATEWAY');
      case 403:
        throw Error('403 FORDIDDEN');
      case 404:
        throw Error('404 NOT_FOUND');
      case 200:
        console.log(`成功`)
      default:
        break;
    }
  })
  .catch(err => {
    console.log(err)
    alert('エラー')
    return err.response
  })
}