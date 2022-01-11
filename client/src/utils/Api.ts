import { FIXME } from '../types/Any'

/* eslint-disable prettier/prettier */
export const getFetch = (url: string): Promise<FIXME> => {
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
  fetchInfo: {
    endPoint: string,
    basicAuth?: { id: string, password: string },
    token?: string
  },
): Promise<FIXME> | undefined => {
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
  fetchInfo: {
    endPoint: string,
    data?: { [key: string]: string | number },
    token?: FIXME
  }
): Promise<FIXME> => {
  const { endPoint, token, data } = fetchInfo
  const method = `POST`
  const headers: FIXME = token ? {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  } : {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  const body = data ? JSON.stringify(data) : ``
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
): Promise<FIXME> => {
  const method = `PUT`
  const headers: FIXME = token ? {
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
