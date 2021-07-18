import React from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/Color'
import { sp } from '../../utils/../styles/Media'
interface Props {
  title?: string
  txt?: string
  imgSrc?: any
  color?:string
  items?: any
  id?: string
  count?: number | string
}

const ThumbnailBox =　styled.div<Props>`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 80px 80px 0 0;
    ${sp`
      border-width: 50px 50px 0 0;
    `}
    border-color: ${(props) => (props.color)} transparent transparent transparent;
  }
`
const Count = styled.span`
  position: absolute;
  font-weight: bold;
  color: ${Color.white};
  font-family: Trebuchet MS;
  font-style: italic;
  font-size: 3rem;
  top: 5px;
  left: 5px;
  ${sp`
    font-size: 2rem;
    top: 2px;
    left: 2px;
  `}
`
const Hedeing = styled.h2`
  color: ${Color.lifeSupport};
  font-size: 4rem;
`
const Title = styled.h3`
  color: ${Color.black};
  font-size: 2.8rem;
  ${sp`
    font-size: 2rem;
  `}
  margin: 20px 0 10px;
`
const Txt = styled.p``
const Img = styled.img`
  width: 100%;
`

export const TertiaryCard: React.FC<Props> = ({
  title,
  txt,
  imgSrc,
  color,
  count
}) => {
  return (
    <>
      <ThumbnailBox
        color={color}
      >
        <Count>0{count}</Count>
        <Img src={imgSrc} alt={title + '説明イメージ'}/>
      </ThumbnailBox>
      <Title>{title}</Title>
      <Txt>{txt}</Txt>
    </>
  )
}

export default TertiaryCard