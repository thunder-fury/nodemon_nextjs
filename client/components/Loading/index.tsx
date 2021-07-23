import { css } from '@emotion/react'
import { Color } from '../../styles/Variables'
interface Props { }

export const Loading: React.FC = ({ }) => {
  return (
    <div css={LodingBox}>
      <h2>Loading...</h2>
    </div>
  )
}

const LodingBox = css`
  position: relative;
  background-color: ${Color.white};
  height: 100Vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loading