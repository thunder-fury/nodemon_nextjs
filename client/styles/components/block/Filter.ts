import { css } from '@emotion/react'
import { Color, Media } from '../../Variables'

export const filter = {
  container: css`
    max-width: 1100px;
    margin: 0 auto;
    ${Media.mq}{
      padding: 30px;
    }
    border: 1px solid ${Color.white};
    margin-bottom: 20px;
  `,
  filds: css`
    display: flex;
    width: 100%;
    margin-top: 20px;
    &:first-of-type {
      margin-top: 0;
  }
  `,
  group: css`
    position: relative;
    display: flex;
    width: calc(100% /2);
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0;
  }
  `,
  waveDash: css`
    position: absolute;
    left: calc(50% - (10px /2));
    top: calc(50% - ((30px /2) - 5px));
    font-size: 2rem;
  `,
  btns: css`
    margin-top: 20px;
    display: flex;
  `
}