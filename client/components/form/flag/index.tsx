import { Color } from '../../../styles/Variables'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
interface flag {
  label?: string
  require?: boolean,
  validateType?: any
}
export const Flag: React.FC<flag> = ({
  label,
  require,
  validateType
}) => {
  return (
    <>
      <label css={flag.label}>{label}</label>
      {validateType && validateType.split(' ').map((item: any) => {
        if (item === `required`) {
          return (<span key={item} css={flag.require}>*</span>)
        }
      })}
    </>
  )
}

const flag = {
  label: css`
    font-size: 1.3rem;
  `,
  require: css`
    color: ${Color.red}; 
    font-size: 1.5rem;
  `
}


export default Flag