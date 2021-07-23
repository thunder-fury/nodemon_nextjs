import { css } from '@emotion/react'
import { Color } from '../../../Variables'
export const check = {
  container: css`
    display: flex;
  `,
  label: css`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    width: 100%;
    justify-content: center;
    border: solid 1px ${Color.gray};
    padding: 10px;
    margin-right: 10px;
    &:last-of-type {
      margin-right: 0;
    }
    &.is-checked {
      background-color: ${Color.purple};
      color: ${Color.white};
    }
    cursor: pointer;
  `,
  inner: css`
    position: relative;
    display: flex;
    justify-content: center;
  `,
  icon: css`
    position: absolute;
  `,
  box: css`
    width: 15px;
    height: 15px;
    border: solid 1px ${Color.gray6};
    &.is-checked {
      background-color: ${Color.purple};
      border: solid 1px ${Color.white};
    }
  `
}