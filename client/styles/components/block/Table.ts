import { css } from '@emotion/react'
import { Color, Media } from '../../Variables'

export const table = {
  continer: css`
    max-width: 1100px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    font-size: 1.3rem;

  `,
  tbody: css`
    margin-top: 20px;
    &:nth-child(2n+1) {
      background-color: #e9faf9;
    }
  `,
  tr: css`
    /* border-top: solid 1px black; */
    border-bottom: solid 1px black;
    background-color: ${Color.white};
    /* font-size: 1rem; */
    &:nth-of-type(odd) {
      background-color: ${Color.gray4};
    }
  `,
  th: css`
    border: solid 1px #ffffff;
    background: #778ca3;
    color: #ffffff;
    ${Media.mq} {
      padding: 10px;
    }
  `,
  td: css`
    border: solid 1px #ffffff;
    ${Media.mq} {
      padding: 20px;
    }
  `,

  sellect: css`
  `
}