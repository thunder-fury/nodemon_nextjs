import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Color } from '../../styles/Variables'

export interface TagProps {
  tagName?: string
  backgroundColor?: string
  borderRadius?: number
}

export const Tag: React.FC<TagProps> = ({
  tagName,
  borderRadius,
  backgroundColor
}) => {
  return (
    <TagElment
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >{tagName}</TagElment>
  )
}


const TagElment: any = styled.div<TagProps>`
  width: 100%;
  color: ${Color.white};
  background: ${(props) => (props.backgroundColor)};
  border-radius: ${(props) => (props.borderRadius)}px;
  padding: 10px 0;
`


export default Tag