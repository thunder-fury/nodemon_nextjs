import React from 'react'
import styled from 'styled-components'
import { sp } from '../../styles/Media'
const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`
const Title = styled.h2`
  font-size: 5rem;
  ${sp`
    font-size: 3rem;
  `}
`

const Txt = styled.p`
  color: ${(props) => (props.color)};
`

interface Props {
  heading: string
  txt?: string
  color?: string
}
export const Heading: React.FC<Props> =({
  heading,
  txt,
  color
}) => {
  return(
    <HeadingContainer>
      <Title>{heading}</Title>
      <Txt
        color={color}
      >{txt}</Txt>
    </HeadingContainer>
  )
}
export default Heading