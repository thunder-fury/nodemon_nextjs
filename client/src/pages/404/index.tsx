import React from 'react'
import { Content } from './../../styles/Global'
import Heading from './../../components/Heading'
import { Color } from './../../styles/Color'
import { sp } from './../../styles/Media'
import styled from 'styled-components'
const ErrorTxtContainer = styled.div`
  font-size: 2.2rem;
  text-align: center;
  ${sp`
    padding: 0 5%;
  `}
`
const ErrorMsg = styled.p`
  margin-top: 10px;
  font-size: 1.6rem;
`
interface props {
}

export const Error: React.FC = ({
}) => {
  return(
    <Content>
      <Heading 
        heading={'404file not found.'}
      />
      <ErrorTxtContainer>
        <strong>お探しのページは見つかりませんでした。</strong>
        <ErrorMsg>こちらのページは一時的にアクセスできない状況にあるか、<br />
        ページの削除またはURLが変更された可能性があります。</ErrorMsg>
      </ErrorTxtContainer>
    </Content>
  )
}

export default Error