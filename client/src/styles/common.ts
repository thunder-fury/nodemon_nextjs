import { Color } from './Variables'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const btnContainer = css`
  max-width: 200px;
  width: 100%;
  height: 30px;
  box-shadow: 0 4px 8px ${Color.shadow};
`

export const Title = {
  box: css`
    border-top: 1px solid #f9f9f9;
    padding: 25px 35px;
    background-color: ${Color.white};
    margin-bottom: 25px;
    box-shadow: 0 4px 8px ${Color.shadow};
    font-size: 1.5rem;
    font-style: italic;
  `,
  txt: css``,
}
