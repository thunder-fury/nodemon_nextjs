export function getOrigin(): string {
  const host = location.origin
  // const endpoint = host + '/api/items'
  const proApi = ``
  if (host == 'http://localhost:3000') {
    return host
  } else {
    return proApi
  }
}
