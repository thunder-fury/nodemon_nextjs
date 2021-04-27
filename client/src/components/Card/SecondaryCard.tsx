import React from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/Color'
import { sp } from '../../styles/Media'
import { getApiUrl } from '../../utils/ApiUrl'
interface Props {
  title?: string
  txt?: string
  imgSrc?: any
  color?:string
  items?: any
  id?: string
}

const ThumbnailBox =　styled.div<Props>`
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
const UsageBox = styled.article`
  padding: 50px 0;
  ${sp`
    padding: 30px 5%;
  `}
  &:nth-of-type(odd){
    background-color: ${Color.gray5};
  }
`
const ProductBoxInner = styled.section`
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
`
const ProductInfo = styled.ul`
  margin-top: 40px;
  display: flex;
  list-style: none;
`
const List = styled.li`
  width: calc((100% - (40px * 3)) / 4);
  ${sp`
    width: calc(100% / 2);
  `}
  margin-right: 40px;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  ${sp`
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  `}
`

const Hedeing = styled.h2`
  color: ${Color.lifeSupport};
  font-size: 4rem;
  ${sp`
    font-size: 2.6rem;
  `}
`
const Title = styled.h3`
  color: ${Color.black};
  font-size: 2rem;
  margin: 20px 0 10px;
`
const Txt = styled.p`
`
const Img = styled.img`
  width: 100%;
`

export const SecondaryCard: React.FC<Props> = ({
  title,
  id,
  txt,
  imgSrc,
  color,
  items
}) => {
  return (
    <UsageBox>
      <ProductBoxInner>
        <Hedeing
          id={title}
        > {title} </Hedeing>
        <ProductInfo>
          {
            items && items.map((item:any, index:number) => {
              return(
                <List
                key={item.title}
                >
                  <Img src={getApiUrl() + '/' + item.image} alt={item.title + 'イメージ'}/>
                  <Title>{item.title}</Title>
                  <Txt>{item.description}</Txt>
                </List>
              )
            })
          }
        </ProductInfo>
      </ProductBoxInner>
    </UsageBox>
  )
}

export default SecondaryCard