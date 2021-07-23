import React, { useState } from 'react'
import styled from 'styled-components'
import { render } from '../../../utils/Router'
import { sp, tab } from '../../../styles/Media'
import { Color } from '../../../styles/Variables'
import { useRouter } from 'next/router';

const MenuBox = styled.ul`
  display: flex;
  max-width: 448px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  font-size: 1.4rem;
  &.childLink {
    display: none;
    ${sp`
      margin-top: 20px;
      display: block;
      > li {
        padding-left: 20px;
      }
    `}
  }
`
const MenuList = styled.li`
  margin-right: 40px;
  position: relative;
  display: inline-block;
  ${sp`
    width: 100%;
    padding: 30px 0 0;
    margin-right: 0;
    &:first-of-type {
      padding: 0;
    }
  `}
  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: ${Color.black};
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform .3s;
  }
  &.is-lifeSupport {
    &:after {
      background: ${Color.lifeSupport};
    }
  }
  &.is-highMove {
    &:after {
      background: ${Color.highMove};
    }
  }
  &.is-curtainSubscription {
    &:after {
      background: ${Color.curtainSubscription};
    }
  }
  &:nth-of-type(3n){
    margin-right: 0;
  }
  &.is-bold {
    font-weight: bold;
  }
  &.borderInit {
    border: initial;
  }
  
  &:hover {
    &:after {
      transform: scale(1, 1);
    }
  }
`

const MenuLink = styled.p`
  cursor: pointer;
  text-decoration: none;
`
interface Props {
  datas: any
  fontBold?: boolean
  borderInit?: boolean
  selected: string
  activeEvent: any
  menuToggle?: any
}

export const Menu: React.FC<Props> =({
  fontBold,
  datas,
  borderInit,
  selected,
  activeEvent,
  menuToggle
}) => {
  const router = useRouter();
  const pathname = router.pathname
  return(
    <>
      {
        (()=>{
          const txtLinks = datas && datas.map((menu: any)=> {
            if(menu.txt !== '問い合わせ') {
              return(
                <MenuList
                  key={menu.id}
                  className={[
                    borderInit? 'borderInit': '', menu.txt === selected ? 'is-selected': '',
                    pathname === '/business/life-support' ? 'is-lifeSupport': 
                    pathname === '/business/high-move'? 'is-highMove' : 
                    pathname === '/business/curtain-subscription'? 'is-curtainSubscription' : ''
                  ].join(' ')}
                  onClick={() => {activeEvent(menu.txt); menuToggle();}}
                  >
                  <MenuLink
                    className={fontBold ? 'is-bold' : ''}
                    onClick={()=>render(menu.link)}
                  > {menu.txt} </MenuLink>
                  {
                    (() => {
                      if(menu.child) {
                          return(
                            <MenuBox key={menu.id} 
                              className={menu.child? 'childLink': ''}
                            >
                              <MenuList>
                                <MenuLink
                                  className={fontBold ? 'is-bold' : ''}
                                  onClick={()=>render(menu.child.link)}
                                >▶︎{menu.child.txt}</MenuLink>
                              </MenuList>
                            </MenuBox>
                        )
                      }
                    })()
                  }
                </MenuList>
              )
            }
          })
          return <MenuBox>{txtLinks}</MenuBox>
        })()
      }
    </>
  )
}
export default Menu