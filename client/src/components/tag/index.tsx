import React from 'react'
import styled from 'styled-components'
import { Color } from '../../styles/Color'

export interface TagProps {
  tagName?: string
  backGround?: string
  borderRadius?: number
} 

export const TagElment = styled.div<TagProps>`
  width: 100%;
  color: ${Color.white};
  background: ${(props) => (props.backGround)};
  border-radius: ${(props) => (props.borderRadius)}px;
`
export const Tag: React.FC<TagProps> =({
  tagName,
  borderRadius,
  backGround
}) => {
  return(
    <TagElment
    borderRadius={borderRadius}
    backGround={backGround}
    >{tagName}</TagElment>
  )
}

export default Tag