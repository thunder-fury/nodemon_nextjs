export function getApiUrl(): string {
  const devOrigin = 'http://localhost'
  const host = location.origin
  // const endpoint = host + '/api/items'
  if(host == 'http://localhost:3000') {
    console.log(host)
    return devOrigin
  } else {
    return host
  }
}