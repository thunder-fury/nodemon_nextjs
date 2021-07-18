import React from 'react';
import styled from 'styled-components'
import { Color } from '../../styles/Color';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { sp } from '../../styles/Media'
interface Props {
  txt?: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  fontSize?: number
  borderradius?: number
  backgroundcolor?: string
  color?: string
  width?: number | string
  dataTarget?: string
  arrowColor?: string
  size?: number | string
  border?: boolean
  href?: string
}

const Arrow = styled.span<Props>`
  position: absolute;
  height: 100%;
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
const Btn = styled(AnchorLink)<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  font-size: ${(props) => (props.fontSize)}rem;
  border-radius:  ${(props) => (props.borderradius)}rem;
  color: ${(props) => (props.color)};
  background-color: ${(props) => (props.backgroundcolor)};
  max-width: ${(props) => (props.size)}px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 10;
  font-weight: 700;
  text-decoration: none;
  &.is-border {
    border: solid 2px ${(props) => (props.color)};
  }
  &.is-success {
    background-color: ${Color.blue}
  }
`
export const AnkerButton: React.FC<Props> =({
  txt,
  onClick,
  fontSize,
  borderradius,
  backgroundcolor,
  color,
  dataTarget,
  arrowColor,
  size,
  border,
  href
}) => {
  return(
    <>
    <Btn
      className={border? 'is-border': ''}
      data-target={dataTarget}
      color={color}
      borderradius={borderradius}
      backgroundcolor={backgroundcolor}
      fontSize={fontSize}
      href={href}
    >
      {txt}
    </Btn>
  </>
  )
}
export default AnkerButton