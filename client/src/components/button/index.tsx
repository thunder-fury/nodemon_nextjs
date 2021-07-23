import React from 'react';
import styled from 'styled-components'
import { Color } from '../../styles/Color';
import { sp } from '../../styles/Media'
interface ButtonProps {
  txt?: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  fontSize?: number | string
  borderRadius?: number | string
  backgroundColor?: number | string
  color?: string
  width?: number | string
  dataTarget?: string
  arrowColor?: string
  size?: number | string
  border?: boolean
}

const Arrow = styled.span<ButtonProps>`
  position: relative;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    border: 0px;
    border-top: solid 2px ${props => props.arrowColor};
    border-right: solid 2px ${props => props.arrowColor};
    transform: rotate(45deg);
    position: absolute;
    top: calc(50% - ( 10px / 2) /2);
    left: calc(((${(props) => (props.size)}px / 10 )));
    margin-top: -4px;
    z-index: 20;
  }
  &:after {
    content: '';
    width: calc(((${(props) => (props.size)}px / 10 + 14px)));
    border: 0px;
    border-top: solid 2px ${props => props.arrowColor};
    position: absolute;
    top: calc(50% - (-5px / 2));
    left: 0;
    margin-top: -4px;
    z-index: 20;
  }
`
const Btn = styled.button<ButtonProps>`
  position: relative;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  text-align: center;
  font-size: ${(props) => (props.fontSize)}rem;
  border-radius:  ${(props) => (props.borderRadius)}rem;
  color: ${(props) => (props.color)};
  background-color: ${(props) => (props.backgroundColor)};
  max-width: ${(props) => (props.size)}px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 10;
  font-weight: 700;
  &.is-border {
    border: solid 2px ${(props) => (props.color)};
  }
  &.is-success {
    background-color: ${Color.blue}
  }
`
export const Button: React.FC<ButtonProps> =({
  txt,
  onClick,
  fontSize,
  borderRadius,
  backgroundColor,
  color,
  dataTarget,
  arrowColor,
  size,
  border
}) => {
  return(
    <>
    {/* <Arrow
      size={size}
      arrowColor={arrowColor}
    /> */}
    <Btn
      className={border? 'is-border': ''}
      data-target={dataTarget}
      color={color}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      onClick={onClick}
    >
      {txt}
    </Btn>
  </>
  )
}
export default Button