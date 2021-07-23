import { Color } from '../../../styles/Variables'
import { css } from '@emotion/react'

interface Props {
}

export const ErrorMsg: React.FC<Props> = ({
}) => {
  return (
    <span css={errorMsg} data-target-error >error</span>
  )
}
const errorMsg = css`
  display: none;
  font-size: 1.4rem;
  &.is-show {
    display: block;
    margin-top: 5px;
    color: ${Color.red}
  }
`
export default ErrorMsg