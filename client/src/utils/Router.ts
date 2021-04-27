import Router from 'next/router'

// 引数にpathを入れると遷移する
export const render = (path: string) => {
  Router.push(path)
}
