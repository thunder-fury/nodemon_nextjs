
import { css } from '@emotion/react'
import { Media } from '../../styles/Variables'

interface Props {
  heading: string
  txt?: string
  color?: string
}

export const Heading: React.FC<Props> = ({
  heading,
  txt,
  color
}) => {
  return (
    <div css={Head.container}>
      <h1 css={Head.title}>{heading}</h1>
      <p css={color && Head.txt(color)}>{txt}</p>
    </div>
  )
}

const Head = {
  container: css `
    font-size: 1.5rem;
  `,
  title: css`
    font-size: 1.2rem;
    ${Media.mq} {
      font-size: 2rem;
    }
  `,
  txt: (color: string) => css`
    color: ${color};
  `
}
export default Heading