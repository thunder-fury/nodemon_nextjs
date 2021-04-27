import React from 'react'
import styled from 'styled-components'
import Btn from '../button'
import Link from 'next/link'
import { render } from '../../utils/Router'
import { Color } from '../../styles/Color'
import { sp, tab } from '../../styles/Media'
import { getApiUrl } from '../../utils/ApiUrl'
interface Props {
  category?: string
  heading?: string
  description?: any
  path?: any
  color?: string
  isBgImg?: boolean
  thumbnail?: string
  reverse?: boolean
  btnLabel?: string
  forDtail?: boolean
  external?:boolean
}

const CardContainer = styled.section<Props>`
  padding: 60px 0 80px;
  &.is-bgImg {
    background: url(/images/business/card-bg.png) no-repeat;
    background-size: cover;
  }
  
`
const Category = styled.strong<Props>`
  font-size: 2rem;
  color: ${(props) => (props.color)};

`
const Title = styled.h2`
  font-size: 2.8rem;
  ${sp`
    font-size: 1.8rem;
  `}
`
const DtailTitle = styled.h2<Props>`
  font-size: 4rem;
  color: ${(props) => (props.color)};
  ${sp`
    font-size: 2.6rem;
  `}
`

const Txt = styled.p`
  font-size: 1.8rem;
  line-height: 32px;
  margin-top: 34px;
  ${sp`
    font-size: 1.4rem;
    margin-top: 20px;
    line-height: 27px;
  `}
`
const Content = styled.div`
  max-width: 550px;
  width: 100%;
  ${tab`
    margin-top: 30px;
  `}

`
const CardContainerInner = styled.div`
  display: flex;
  align-items: center;
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  &.reverse{
    flex-direction: row-reverse;
    ${tab`
      flex-wrap: wrap;
      flex-direction: column-reverse;
    `}
  }
  ${tab`
    flex-wrap: wrap;
    flex-direction: column-reverse;
    padding: 0 5%;
  `}
`
const ThumbnailBox =styled.div<Props>`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 0 0;
    border-color: ${(props) => (props.color)} transparent transparent transparent;
  }
`
const Thumbnail =styled.img`
  max-width: 550px;
  width: 100%;
`
const BtnContainer = styled.div`
  position: relative;
  max-width: 310px;
  width: 100%;
  height: 60px;
  margin-top: 56px;
  ${tab`
    margin-left: 0;
    margin-top: 50px;
    max-width: initial;
    max-width: 270px;
  `}
  ${sp`
    max-width: 240px;
    height: 45px;
    margin: 30px auto 0;
  `}
  > button {
    font-size: 1.6rem;
  }
`
const TxtLinkContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  &:after {
    content: '';
    background-image: url('/images/link_icon.svg');
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`
const TxtLink = styled.a`
  color: ${Color.black};
`
export const Card: React.FC<Props> = ({
  category,
  heading,
  description,
  path,
  color,
  isBgImg,
  thumbnail,
  reverse,
  btnLabel,
  forDtail,
  external,
}) => {
  console.log(getApiUrl() + '/' +thumbnail)
  return(
    <CardContainer
      className={isBgImg? 'is-bgImg': ''}
    >
      <CardContainerInner
        className={reverse? 'reverse' : ''}
      >
        <Content>
          { category? <Category color={color}>{category}</Category> : '' }
          {!forDtail? <Title>{heading}</Title> : <DtailTitle color={color} >{heading}</DtailTitle>}
          <Txt
            dangerouslySetInnerHTML={{ __html: description }}
          />
            {
              (() =>{
                if(external) {
                  return(
                    <TxtLinkContainer>
                      <TxtLink href={path} target='blank'>サービスサイトはこちら</TxtLink>
                    </TxtLinkContainer>
                    )
                } else {
                  return (
                  <BtnContainer>
                    <Btn
                      border={true}
                      txt={'詳細はこちら'}
                      color={Color.white}
                      backgroundColor={color}
                      borderRadius={3.5}
                      onClick={()=> {render(path)}}
                      arrowColor={Color.white}
                      size={250}
                    />
                  </BtnContainer>
                  )
                }
              })()
            }
        </Content>
        <ThumbnailBox
          color={color}
        >
          <Thumbnail src={getApiUrl() + '/' +thumbnail} alt={category + 'thumbnail'} />
        </ThumbnailBox>
      </CardContainerInner>
    </CardContainer>
  )
}

export default Card