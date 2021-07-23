import { render } from './Router'
export const statusDiscriminant = (status:number, path: string) =>{
  switch (status) {
    case 400:
      throw Error('400 INVALID_TOKEN')
    case 401:
      throw Error('401 UNAUTHORIZED')
    case 500:
      console.log('500')
      throw Error('500 INTERNAL_SERVER_ERROR')
    case 502:
      throw Error('502 BAD_GATEWAY')
    case 403:
      throw Error('403 FORDIDDEN')
    case 404:
      throw Error('404 NOT_FOUND')
      case 200:
        console.log('200')
        render(path)
    default:
      break;
  }
}