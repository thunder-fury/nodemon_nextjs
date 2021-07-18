import React, { useState } from 'react'
import styled from 'styled-components'
import { render } from '../../../utils/Router'
import { sp, tab } from '../../../styles/Media'
import { Color } from '../../../styles/Color'

const MenuBox = styled.ul`
  display: flex;
  max-width: 448px;
  ${sp`
    max-width: initial;
  `}
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  font-size: 1.4rem;
  ${sp`
    font-size: 1.2rem;
  `}
  &:not(:first-of-type) {
    margin-top: 10px;
    ${sp`
      flex-wrap: initial;
    `}
    > li {
      ${sp`
        width: initial;
        border: initial;
        &:not(:first-of-type) {
          margin-left: 30px;
        }
      `}
    }
  }
`
const MenuList = styled.li`
  margin-right: 40px;
  ${sp`
    width: 100%;
    padding: 20px 0;
    margin-right: 0;
    border-bottom: solid 1px ${Color.gary};
    &:first-of-type {
      border-top: solid 1px ${Color.gary};
    }
  `}
  &:nth-of-type(3n){
    margin-right: 0;
  }
  &.is-bold {
    font-weight: bold;
  }
  &.borderInit {
    border: initial;
  }
  &.is-selected{
    border-bottom: ${Color.black} 2px solid;
  }
`
const MenuLink = styled.p`
  cursor: pointer;
`
interface MenuProps {
  datas: any
  fontBold?: boolean
  borderInit?: boolean
  activeEvent?: any
  selected?: string
}

export const Menu: React.FC<MenuProps> =({
  fontBold,
  datas,
  borderInit,
}) => {
  return(
    <>
      {
        (() => {
          const productItemList = datas && datas.map((menu: any, index:number) => {
            return(
              <MenuList 
                key={menu.id}
                className={[borderInit? 'borderInit': ''].join(' ')}
              >
              <MenuLink
                className={fontBold ? 'is-bold' : ''}
                onClick={()=>render(menu.link)}>
                {menu.txt} </MenuLink>
              </MenuList>
            )
          })
          return <MenuBox>{productItemList}</MenuBox>
        })()
      }
    </>
  )
}

export default Menu