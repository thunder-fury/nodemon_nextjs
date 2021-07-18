import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {render} from '../../../utils/Router'
import { Menu } from './MenuList'
import { sp } from '../../../styles/Media'
import { menus } from '../MenuItems'
import { useRouter } from 'next/router';

interface FooterProps {
}
const FooterContainar = styled.footer`
  box-shadow: 0px -7px 44px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 320px;
  display: flex;
  margin-top: 60px;
  ${sp`
    display: block;
    height: initial;
    padding: 50px 0 40px;

  `}
  justify-content: center;
  align-items: center;
`
const FooterInner = styled.div`
  ${sp`
    width: 100%;
  `}
`
const FooterLogo = styled.img`
  width: 226px;
  margin: 0 auto;
`
const FooterMenus = styled.div`
  margin-top: 30px;
`
const Copyright = styled.small`
  display: block;
  margin-top: 20px;
`
export const Footer: React.FC<FooterProps> =({

}) => {
  const router = useRouter();
  const pathname = router.pathname
  const [selected, isSelectedState] = useState('');
  const path ='/business'
  useEffect(() => {
    if( pathname !== path+'/' && 
        pathname !== path+'/' && 
        pathname !== path+'/') {
      isSelectedState("")
    }
  }, [pathname])
  const activeEvent = (str:string) => {
    isSelectedState(str)
  }
  return(
    <FooterContainar>
      <FooterInner>
        <FooterLogo src="" alt=""/>
          <FooterMenus>
            <Menu
              datas={menus.lowerLayerPage}
            />
          </FooterMenus>
          <Copyright>©2020　</Copyright>
      </FooterInner>
    </FooterContainar>
  )
}
