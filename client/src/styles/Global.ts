import styled from 'styled-components'
import { sp } from '../styles/Media'
import { Color } from '../styles/Color'
export const Content = styled.section`
  margin-top: 100px;
`
export const ContainerSecondary = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  ${sp`
    padding: 0 5%;
  `}
`

export const BtnContainer = styled.div`
  max-width: 440px;
  width: 100%;
  margin: 30px auto 0;
  height: 70px;
  > button {
    font-size: 2.6rem;
    ${sp`
      font-size: 1.8rem;
    `}
  }
`