import React from 'react'
import {render} from '../../utils/Router'
import Head from '../../components/common/Head'
import Button from '../../components/button'
import { Content, ContainerSecondary, BtnContainer } from './../../styles/Global'
import { posts } from '../../store/slices/contactSlice'
import { selectContact, changeTxt } from '../../store/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../styles/Color'
import { sp } from '../../styles/Media'
import styled from 'styled-components'

const TxtLink = styled.p`
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
`
const ConfimRow = styled.dl`
  padding: 40px 0;
  border-bottom: 1px solid ${Color.gray6};
  ${sp`
    padding: 20px 0;
  `}
`
const ComfimHead = styled.dt`
  width: 30%;
  text-align: left;
  font-weight: bold;
  ${sp`
    width: 100%;
  `}
`
const ComfimData = styled.dd`
  width: 70%;
  text-align: left;
  ${sp`
    margin-top: 10px;
    width: 100%;
  `}
`
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

interface props {}
export const Confirm: React.FC<props> = ({
}) => {
  const peopleList = useSelector(selectContact)
  const dispatch = useDispatch()
  const pageInfo: any = {
    heding: 'お問い合わせ',
    txt: 'お問い合わせ内容を確認してください。',
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
                  <h2>何も入力されていません</h2>
                  <BtnContainer>
                    <Button
                      dataTarget={'btn'}
                      txt={'入力画面へ'}
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
                {
                  Object.entries(peopleList.info).map(([key, value]:any, index: number) => {
                    key == 'inquiryType' ? key ='お問い合わせ種別' : 
                      key == 'name' ? key = 'お名前':
                      key == 'kana' ? key = 'お名前(カナ)':
                      key == 'mail' ? key = 'メールアドレス':
                      key == 'tel' ? key = 'お電話番号':
                      key == 'note' ? key = 'お問い合わせ詳細':　 ''
                      return(
                        <ConfimRow>
                          <ComfimHead>{key}</ComfimHead>
                          <ComfimData>{value}</ComfimData>
                        </ConfimRow>
                      )
                  })
                }
                <BtnContainer>
                <Button
                    dataTarget={'btn'}
                    txt={'送信する'}
                    color={Color.white}
                    backgroundColor={Color.lifeSupport}
                    borderRadius={3.5}
                    arrowColor={Color.white}
                    onClick={(e)=> {
                      dispatch(posts({target:e.target}))}}
                    size={440}
                  />
                <TxtLink
                  onClick={() => {render('/form/contact')}}
                > 入力した内容を修正する </TxtLink>
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