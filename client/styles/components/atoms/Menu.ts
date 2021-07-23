import { css } from '@emotion/react'
import { Color} from '../../Variables'
import { Media } from '../../Variables'
export const nav = {
  sidebar: css`
    height: 100vh;
    max-width: 265px;
    width: 100%;
    ${Media.mq} {
      position: fixed;
    }
    top: 0;
    background-color: ${Color.purple};
    padding: 0 15px 0 0;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  `,
  userContainer: css`
    margin-bottom: 50px;
    padding-left: 54px;
    color: ${Color.white};
    margin-top: 20px;
  `,
  title: css`
    font-style: italic;
    font-family: Montserrat;
  `,
  navList: css`
    list-style: none;
    font-size: 1rem;
  `,
  list: css`
    max-width: 230px;
    width: 100%;
    
  `,
  linkTxt: css `
    display: block;
    padding: 20px 0 20px  54px;
    color: ${Color.white};
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    &.is-active {
      background-color: ${Color.white};
      color: ${Color.purple};
      font-weight: 700;
      box-shadow: 0px 1px 15px rgba(39, 39, 39, 0.1);
      font-style: italic;
    }
  `
}