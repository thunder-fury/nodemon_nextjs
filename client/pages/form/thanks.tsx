
import { render } from '../../utils/Router'
import Head from '../../components/common/Head'
import Button from '../../components/button'
import { BtnContainer, ContainerSecondary } from '../../styles/common'
import { posts } from '../../store/slices/contactSlice'
import { selectContact, changeTxt } from '../../store/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../styles/Variables'
import { sp } from '../../styles/Media'
import { Heding, SubHeding } from '../../styles/common'
import styled from 'styled-components'

const PageSection = styled.section`
  padding: 50px 0 70px;
  ${sp`
    padding: 40px 0 50px;
  `}
`
const ThanksMsgContainer = styled.section`
  text-align: center;
  > h3 {
    font-size: 2.5rem;
    ${sp`
      font-size: 2rem;
    `}
  }
  > p {
    margin-top: 10px;
    font-size: 1.4rem;
    line-height: 3rem;
    ${sp`
      font-size: 1.5rem;
      line-height: 2.2rem;
    `}
  }
`

interface props { }
export const Confirm: React.FC<props> = ({
}) => {
  const peopleList = useSelector(selectContact)
  const dispatch = useDispatch()
  const pageInfo: any = {
    heding: 'お問い合わせ',
    txt: 'お問い合わせ内容を送信しました。',
  }

  return (
    <>
      <ContainerSecondary>
        {
          (() => {
            if (!peopleList.info['name']) {
              return (
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
                      onClick={() => { render('/form/contact') }}
                    />
                  </BtnContainer>
                </>
              )
            } else {
              return (
                <>
                  <PageSection>
                    <Heding>{pageInfo.heding}</Heding>
                    <SubHeding>{pageInfo.txt}</SubHeding>
                  </PageSection>
                  <ThanksMsgContainer>
                    <h3>この度はお問い合わせいただきありがとうございます。</h3>
                    <p>
                      ご入力いただいたメールアドレス宛に受付確認メールをお送りしましたのでご確認ください。<br />
                    </p>
                  </ThanksMsgContainer>
                  <BtnContainer>
                    <Button
                      border
                      dataTarget={'btn'}
                      txt={'トップに戻る'}
                      color={Color.black}
                      backgroundColor={Color.white}
                      onClick={(e) => { render('/') }}
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