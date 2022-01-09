/* eslint-disable prettier/prettier */
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


export const FetchGet = (
  fetchInfo: { endPoint: string, basicAuth?: { id: string, password: string }, token?: string },
): Promise<any> | undefined => {
  const method = `GET`
  const { endPoint, basicAuth, token } = fetchInfo
  const headers: { [key: string]: string } = basicAuth ? {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic ${Buffer.from(`${basicAuth.id}:${basicAuth.password}`, 'binary').toString('base64')}`
  } : token ? {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  } : {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  return fetch(endPoint, { method, headers })
    .then(res => {
      return res.json()
    })
    .then(json => {
      return json
    })
    .catch(error => {
      console.log(error)
    })
}

export const FetchPost = (
  endPoint: string,
  posts: { [key: string]: string | number },
  token?: string
): Promise<any> => {
  const method = `POST`
  const headers: any = token ? {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  } : {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  const body = JSON.stringify(posts)
  return fetch(endPoint, { method, headers, body })
    .then(res => {
      return res.json()
    })
    .then(json => {
      return json
    })
    .catch(error => {
      console.log(error)
    })
}

export const FetchPut = (
  endPoint: string,
  posts: { [key: string]: string | number },
  token?: string
): Promise<any> => {
  const method = `PUT`
  const headers: any = token ? {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  } : {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  const body = JSON.stringify(posts)
  return fetch(endPoint, { method, headers, body })
    .then(res => {
      return res.json()
    })
    .then(json => {
      return json
    })
    .catch(error => {
      console.log(error)
    })
}
