import { css } from '@emotion/react'
import { Color, Media } from '../../styles/Variables'
// export const InputElment = styled.input`
//   width: 100%;
//   height: 44px;
//   border-radius: 6px;
//   border: 1px solid ${Color.gray2};
//   font-weight: normal;
//   padding-left: 20px;
//   box-sizing: border-box;
//   &.is-error {
//     border: 1px solid ${Color.red};
//   }
//   ::placeholder {
//     color: ${Color.gray2};
//     font-weight: normal;
//   }
// `

export const TextAreaElm = css`
  font-weight: normal;
  width: 100%;
  height: 200px;
  border-radius: 6px;
  border: 1px solid ${Color.gray2};
  font-weight: normal;
  padding-left: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  background: ${Color.white};
  ::placeholder {
    color: ${Color.gray2};
    font-weight: normal;
  }
  &.is-error {
    border: 1px solid ${Color.red};
  }
`

export const SelectContainar = css`
  position: relative;
  &:-ms-expand {
    display: none;
  }
  appearance: none;
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    border: 0px;
    border-bottom: solid 2px ${Color.gary};
    border-right: solid 2px ${Color.gary};
    transform: rotate(45deg);
    position: absolute;
    top: 22px;
    right: 15px;
    margin-top: -4px;
  }
`
export const SelectElment = css`
  appearance: none;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid ${Color.gray2};
  font-weight: normal;
  padding-left: 20px;
  background: ${Color.white};
  &.is-error {
    border: 1px solid ${Color.red};
  }
`

export const ErrorMsg = css`
  display: none;
  font-size: 1.4rem;
  &.is-show {
    display: block;
    margin-top: 5px;
    color: ${Color.red}
  }
`

export const inputContainer = css`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  /* @media (min-width: 767px){

  } */
`

export const flagWrap = css`
  display: flex;
  flex: 0 0 280px;
`
export const tagWrap = css`
  max-width: 52px;
  width: 100%;
  margin-right: 10px; 
  font-size: 1.4rem;
  text-align: center;
  ${Media.mq} {
    margin-right: 30px;
  }
`
export const inputWrap = css`
  text-align: left;
  margin-top: 10px;
  
`