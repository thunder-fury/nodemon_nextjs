import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Menu from './MenuList'
import { menus } from '../MenuItems'
import { Button } from '../../../components/button'
import { Color } from '../../../styles/Color'
import { render } from '../../../utils/Router'
import { tab, sp, pc } from '../../../styles/Media'
import { HamburgerBtn } from '../../../components/button/hamburgerBtn'
import Link from 'next/link'
import { useRouter } from 'next/router';
interface props {}
const HeaderElm = styled.header`
  position: relative;
  padding-top: 80px;
  ${sp`
    padding-top: 65px;
  `}
`
const HeaderInner = styled.div`
  padding: 20px 30px 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${Color.white};
  position: fixed;
  z-index: 21;
  top: 0;
  left: 0;
  ${sp`
    height:65px;
    padding: 0 5%;
  `}
`
const Menus = styled.div`
  ${sp`
    margin: 0 -50px 0 50px;
    width: 100%;
    &:first-of-type {
      margin-bottom: 50px;
      border-bottom: solid 1px ${Color.black};
      padding-bottom: 50px;
    }
  `}
`
const SpMenus = styled(Menus)`
  display: none;
  ${sp`
    display: block;
  `}
`
const Links = styled.div`
  width: 100%;
  ${tab`
    display: none;
    &.is-show {
      animation: fadeup 1s cubic-bezier(0.33, 1, 0.68, 1) 1 forwards;
      position: fixed;
      height: 100%;
      left: 0;
      top: 0;
      display: block;
      z-index: 11;
    }
  `}
  @keyframes fadeup {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const LinksInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tab`
    flex-wrap: wrap;
    background-color: ${Color.gray3};
    justify-content: center;
    flex-direction: column;
    height: 100%;
  `}
`
const HeaderLogo = styled.img`
  max-width: 290px;
  width: 100%;
  ${sp`
    max-width: 175px;
    z-index: 20;
  `}
`
const BtnContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 40px;
  margin-left: 50px;
  ${tab`
    margin-left: 0;
    margin-top: 50px;
    max-width: initial;
    max-width: 270px;
  `}
  > button {
    font-size: 1.6rem;
  }
`
export const Header: React.FC<props> = ({
}) => {
  const router = useRouter();
  const [isShow, setIsShowState] = useState(false)
  const [selected, isSelectedState] = useState('');
  const pathname = router.pathname
  
  const path ='/business'
  useEffect(() => {
    if( pathname !== path+'/life-support' && 
        pathname !== path+'/curtain-subscription' && 
        pathname !== path+'/high-move') {
      isSelectedState('')
    }
  }, [pathname])
  const showToggleAction = (e: any) => {
    setIsShowState(!isShow ? true : false )
  }
  const activeEvent = (str:string) => {
    isSelectedState(str)
  }
  return(
    <HeaderElm>
      <HeaderInner>
        <Link href='/'>
          <a><HeaderLogo src="" alt=""/></a>
        </Link>
        <HamburgerBtn
          onClick={showToggleAction}
          toggle={isShow? 'is-active' : ''}
        />
        <Links
          className={isShow? 'is-show': ''}
        >
          <LinksInner>
            <SpMenus>
              <Menu
                fontBold
                borderInit
                datas={menus.lowerLayerPage}
                selected={selected}
                activeEvent={activeEvent}
                menuToggle={showToggleAction}
              />
            </SpMenus>
            <BtnContainer>
              <Button
                border={true}
                txt={'お問い合わせはこちら'}
                color={Color.black}
                backgroundColor={Color.white}
                borderRadius={3.5}
                arrowColor={Color.black}
                onClick={() => { render('/form/contact')}}
                size={250}
              />
            </BtnContainer>
          </LinksInner>
        </Links>
      </HeaderInner>
    </HeaderElm>
  )
}

