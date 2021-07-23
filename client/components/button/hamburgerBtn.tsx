import React, { useState } from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/Variables'
import { pc } from '../../styles/Media'

interface Props {
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  color?: string
  isActive?: boolean
}

const MenuIconBox = styled.div`
	display: block;
	position: fixed;
	top: 10px;
	/* right: 20px; */
	width: 50px;
	padding: 4px 8px;
	height: 44px;
	box-sizing: border-box;
	cursor: pointer;
	z-index: 13;
`
const LineIcon: any = styled.div<Props>`
  > span {
    width: 100%;
    height: 3px;
    display: block;
    background: ${(props) => (props.color)};
    margin: 8px 0;
    transition: 0.5s;	
  }
  &.is-active {
    color: #fff;
	  > span {
      position: absolute;
      width: calc(100% - 16px);
      top: calc(50% - 8px);
      :nth-child(1){
        transform: rotate(45deg);
      }
      :nth-child(3){
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        display: none;
      }
    }
  }
`

export const HamburgerBtn: React.FC<Props> = ({
  onClick,
  color,
  isActive
}) => {
  return(
    <MenuIconBox
      // className={className}
    >
      <LineIcon
        onClick={onClick}
        className={[isActive?'is-active': ''].join(' ')}
        color={color}
      >
        <span></span>
        <span></span>
        <span></span>
      </LineIcon>
    </MenuIconBox>
  )
}

export default HamburgerBtn