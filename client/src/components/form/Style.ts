import styled from 'styled-components'
import { Color } from '../../styles/Color'
import { sp } from '../../styles/Media'
export const InputElment = styled.input`
  width: 100%;
  height: 44px;
  font-size: 1.6rem;
  border-radius: 6px;
  border: 1px solid ${Color.gray2};
  font-weight: normal;
  padding-left: 20px;
  &.is-error {
    border: 1px solid ${Color.red};
  }
  ::placeholder {
    color: ${Color.gray2};
    font-weight: normal;
    font-size: 1.6rem;
  }
`

export const TextAreaElm = styled.textarea`
  font-family: "游ゴシック体", YuGothic;
  font-weight: normal;
  width: 100%;
  height: 200px;
  font-size: 1.6rem;
  border-radius: 6px;
  border: 1px solid ${Color.gray2};
  font-weight: normal;
  padding-left: 20px;
  padding-top: 10px;
  background: ${Color.white};
  ::placeholder {
    color: ${Color.gray2};
    font-weight: normal;
    font-size: 1.6rem;
  }
  &.is-error {
    border: 1px solid ${Color.red};
  }
`

export const SelectContainar = styled.div`
  position: relative;
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
export const SelectElment = styled.select`
  width: 100%;
  height: 44px;
  font-size: 1.6rem;
  border-radius: 6px;
  border: 1px solid ${Color.gray2};
  font-weight: normal;
  padding-left: 20px;
  background: ${Color.white};
  &.is-error {
    border: 1px solid ${Color.red};
  }
  
`

export const ErrorMsg = styled.span`
  display: none;
  font-size: 1.4rem;
  &.is-show {
    display: block;
    margin-top: 5px;
    color: ${Color.red}
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${sp`
    flex-wrap: wrap;
  `}
`

export const FlagWrap = styled.div`
  display: flex;
  flex: 0 0 280px;
`
export const TagWrap = styled.div`
  max-width: 52px;
  width: 100%;
  margin-right: 30px;
  font-size: 1.8rem;
  text-align: center;
  ${sp`
    margin-right: 10px; 
  `}
`
export const InputWrap = styled.div`
  max-width: 534px;
  width: 100%;
  text-align: left;
  ${sp`
    margin-top: 20px;
  `}
`