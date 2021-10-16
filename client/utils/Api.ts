export const getFetch = (url: string): Promise<any> => {
  const options = {
    method: 'GET',
  }
  return fetch(url, options)
    .then(res => {
      return res.json()
    })
    .catch(error => {
      console.log(error)
    })
}