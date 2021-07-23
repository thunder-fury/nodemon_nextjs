import { css } from '@emotion/react'
import { Color, Media } from '../../Variables'
export const container:any = {
  from: css`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  `,
  btn: css`
    width: 100%;
    margin: 30px auto 0;
    height: 50px;
  `,
  input: css`
    width: 100%;
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
    }
  `, 
  fromItem: css`
    border-bottom: 1px solid ${Color.gray};
    padding: 0 0 10px;
    display: flex;
    margin-top: 10px;
    &:last-of-type{
      margin-bottom: 30px;
    }
  `,
  user: css`
    display: flex;
    font-size: 1.5rem;
  `
  
}

