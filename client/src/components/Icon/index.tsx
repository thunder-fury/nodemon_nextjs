import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Icons } from '../../styles/Icons'
import { FIXME } from '../../types/Any'

export interface Props {
  icon: FIXME
  color?: string
  width?: number | string
  height?: number | string
}

const Path: any = styled.path<Props>`
  fill: currentColor;
  color: ${(props: any) => props.color};
`
const Svg: any = styled.svg<Props>`
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`

export const Icon: React.FC<Props> = ({
  icon,
  color,
  width,
  height,
}: Props) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={width + 'px'} height={height + 'px'}>
      <Path color={color} d={Icons[icon]} />
    </Svg>
  )
}

export default Icon
