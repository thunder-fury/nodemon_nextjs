import { css } from '@emotion/react'

export const pageNation = {
  center: css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  `,
  link: css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 40px;
    width: 40px;
    font-weight: bold;
  `,
  ul :css`
    display: flex;
    list-style: none;
    padding: 0;
    cursor: pointer;
    align-items: center;
    margin: 0;
  `,
  right: css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  `
}