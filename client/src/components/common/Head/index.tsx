import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  description: string
}

export const CommonHead: React.FC<Props> =({
  title,
  description
}) => {
  let ORIGIN = ''
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={`${ORIGIN}/ogp.png`} />
      <meta property='og:site_name' content={''} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={`${ORIGIN}/ogp.png`} />
    </Head>
  )
}

export default CommonHead