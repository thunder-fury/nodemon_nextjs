import React, { useState } from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/Color'
import { pc } from '../../styles/Media'

interface props {
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  className?:string
  toggle?:string
}

const MenuIconBox = styled.div`
	display: block;
	position: fixed;
	top: 10px;
	right: 20px;
	width: 50px;
	padding: 4px 8px;
	height: 44px;
	box-sizing: border-box;
	cursor: pointer;
	z-index: 13;
  ${pc`
    display: none;
  `}
`
const LineIcon = styled.div`
  > span {
    width: 100%;
    height: 3px;
    display: block;
    background: ${Color.black};
    margin: 8px 0;
    transition: 0.5s;	
  }
  &.is-active {
    background: ${Color.black};
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

export const HamburgerBtn: React.FC<props> = ({
  onClick,
  className,
  toggle
}) => {
  return(
    <MenuIconBox
      className={className}
    >
      <LineIcon
        onClick={onClick}
        className={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </LineIcon>
    </MenuIconBox>
  )
}

export default HamburgerBtn