import { Global, css } from '@emotion/react'
import { ReactChildren, ReactChild } from 'react'
import { FIXME } from '../types/Any'
import { Reset } from './Reset'
import { Color } from './Variables'
// grobal-css
const globalStyle = css`
  ${Reset}
  body {
    font-family: sans-serif;
    background-color: ${Color.gray5};
  }
  input {
    font-family: sans-serif;
  }
  select {
    font-family: sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }

  button {
    outline: none;
    font-family: sans-serif;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    appearance: none;
  }
  a {
    text-decoration: none;
  }
`

const GlobalStyle: React.FC = ({ children }: FIXME) => {
  return (
    <div>
      <Global styles={globalStyle} />
      {children}
    </div>
  )
}

export default GlobalStyle
