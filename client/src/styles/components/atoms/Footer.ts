import { css } from '@emotion/react'
import { Media } from '../../Variables'
import { Color } from '../../Variables'
export const footer = {
  container: css`
    box-shadow: 0px -7px 44px ${Color.shadow};
    display: block;
    height: initial;
    padding: 30px 0;
    ${Media.mq} {
      text-align: center;
      margin-top: 60px;
    }
  `,
  inner: css`
    width: 100%;
    text-align: center;
    ${Media.mq} {
      width: initial;
    }
  `,
  logo: css`
    width: 226px;
    margin: 0 auto;
  `,
  company: css``,
}
