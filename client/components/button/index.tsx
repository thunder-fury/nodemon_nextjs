;
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Color } from '../../styles/Variables'
interface Props {
  txt: string
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  fontSize?: number
  borderRadius?: boolean
  backgroundColor?: string
  color?: string
  dataTarget?: string
  border?: boolean
  type?: string
}

export const Button: React.FC<Props> = ({
  txt,
  onClick,
  fontSize,
  borderRadius,
  backgroundColor,
  color,
  dataTarget,
  border,
  type
}) => {
  return (
    <>
      <Btn
        className={[
          border ? 'is-border' : '',
          borderRadius ? 'is-radius' : ''
        ].join(' ')}
        type={type}
        data-target={dataTarget}
        color={color}
        backgroundColor={backgroundColor}
        onClick={onClick}
      >
        <BtnTxt
          fontSize={fontSize}
        >{txt}</BtnTxt>
      </Btn>
    </>
  )
}

const Btn: any = styled.button<Props>`
  position: relative;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;
  text-align: center;
  color: ${(props) => (props.color)};
  background-color: ${(props) => (props.backgroundColor)};
  width: 100%;
  height: 100%;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  &.icon-position {
    flex-direction: row-reverse;
  }
  &.is-radius {
    border-radius:  50px;
  }
  &.is-border {
    border: solid 1px ${(props) => (props.color)};
  }
  &.is-success {
    background-color: ${Color.purple}
  }
`
const BtnTxt: any = styled.span<Props>`
  font-size: ${(props) => (props.fontSize)}px;
  width: calc(100% - (${(props) => (props.fontSize)}px * 4));
  overflow-wrap: break-word;
`

export default Button