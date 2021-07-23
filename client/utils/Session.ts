
export const addCookie = (key: string, value: string, maxAge?: number | null) => {
  let cookie = `${key}=${value};path=/;`
  if(maxAge != null) {
    cookie += `max-age=${maxAge}`;
  }
  document.cookie = cookie;
}
export const getCookie = (key: string) => {
  const arr: any = new Object;
  if (document.cookie != '') {
    let tmp: string[] = document.cookie.split(';');
    for (let i = 0; i < tmp.length; i++) {
      let data: string[] = tmp[i].trim().split('=');
      arr[data[0]] = decodeURIComponent(data[1]);
      if (key === data[0]) {
        return decodeURIComponent(data[1]);
      }
    }
  }
  return null;
}
export const removeCookie = (key: string): void => {
  let maxAge: number = 0;
  document.cookie = `${key}=;path=/;max-age=${maxAge}`;
  console.log(key)
}

