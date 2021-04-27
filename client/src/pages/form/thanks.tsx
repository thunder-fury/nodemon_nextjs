import React from 'react'
import {render} from '../../utils/Router'
import Head from '../../components/common/Head'
import Button from '../../components/button'
import { BtnContainer, ContainerSecondary } from './../../styles/Global'
import { posts } from '../../store/slices/contactSlice'
import { selectContact, changeTxt } from '../../store/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../styles/Color'
import { sp } from '../../styles/Media'
import styled from 'styled-components'

const PageSection = styled.section`
  padding: 50px 0 70px;
  ${sp`
    padding: 40px 0 50px;
  `}
`
const Heding = styled.div`
  font-size: 5rem;
  ${sp`
    font-size: 3rem;
  `}
  font-weight: 700;
`
const SubHeding = styled.p`
  font-size: 2.2rem;
  ${sp`
    font-size: 1.6rem;
  `}
`
const ThanksMsgContainer = styled.section`
  text-align: center;
  > h3 {
    font-size: 4rem;
    ${ sp `
      font-size: 2.2rem;
    `}
  }
  > p {
    margin-top: 10px;
    font-size: 1.8rem;
    line-height: 3.24rem;
    ${sp`
      font-size: 1.5rem;
      line-height: 2.2rem;
    `}
  }
`

interface props {}
export const Confirm: React.FC<props> = ({
}) => {
  const peopleList = useSelector(selectContact)
  const dispatch = useDispatch()
  const pageInfo: any = {
    heding: 'お問い合わせ',
    txt: 'お問い合わせ内容を送信しました。',
  }
  
  return(
    <>
      <ContainerSecondary>
        {
          (() => {
            if(!peopleList.info['name']) {
              return(
                <>
                  <Head
                    title={pageInfo.heding}
                    description={'お問い合わせ | 入力内容確認'}
                  />
                  <h2>お問い合わせの入力がされていません。</h2>
                  <BtnContainer>
                    <Button
                      dataTarget={'btn'}
                      txt={'お問い合わせをする'}
                      color={Color.white}
                      backgroundColor={Color.gary}
                      borderRadius={3.5}
                      arrowColor={Color.white}
                      onClick={()=> {render('/form/contact')}}
                      size={440}
                    />
                  </BtnContainer>
                </>
              )
            } else {
              return(
                <>
                <PageSection>
                  <Heding>{pageInfo.heding}</Heding>
                  <SubHeding>{pageInfo.txt}</SubHeding>
                </PageSection>
                <ThanksMsgContainer>
                  <h3>この度はお問い合わせいただき<br />ありがとうございます。</h3>
                  <p>
                      ご入力いただいたメールアドレス宛に受付確認メールをお送りしましたのでご確認ください。<br />
                      なお、お問い合わせ内容につきましては、<br />
                      通常3営業日程度を目処に、弊社担当者よりメールまたはお電話にてご回答させていただきます。<br />
                      いましばらくお待ちくださいませ。<br />
                  </p>
                </ThanksMsgContainer>
                <BtnContainer>
                  <Button
                    border
                    dataTarget={'btn'}
                    txt={'トップに戻る'}
                    color={Color.black}
                    backgroundColor={Color.white}
                    borderRadius={3.5}
                    arrowColor={Color.black}
                    onClick={(e)=> {render('/')}}
                    size={440}
                  />
                </BtnContainer>
                </>
              )
            }
          })()
        }
      </ContainerSecondary>
    </>
  )
}
export default Confirm