import React, { useState, useEffect } from 'react'
import router from 'next/router'
import Head from '../../components/common/Head'
import Input from '../../components/form/atoms/InputField'
import Select from '../../components/form/atoms/SelectField'
import TextArea from '../../components/form/atoms/TextAreaField'
import Button from '../../components/button'
import { Content, ContainerSecondary, BtnContainer } from '../../styles/common'
import { allChick, posts } from '../../store/slices/contactSlice'
import { selectContact, changeTxt } from '../../store/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../styles/Variables'
import { sp } from '../../styles/Media'
import { Heding, SubHeding} from '../../styles/common'
import styled from 'styled-components'

const FormItemContainar = styled.div`
  border-bottom: 1px solid ${Color.gary};
  padding: 40px 0;
  &:last-of-type{
    margin-bottom: 30px;
  }
`
interface props {}
export const Contact: React.FC<props> = ({
}) => {
  const dispatch = useDispatch()
  let peopleList = useSelector(selectContact)
  const [userData, setUserData] = useState([])
  const pageInfo = {
    heding: 'お問い合わせ',
    txt: 'お問い合わせ内容をご入力ください。'
  }
  const saveData = () => {
    window.sessionStorage.setItem("contactData", JSON.stringify(peopleList));
  }
  useEffect(() => {
    const getFormSession = async () => {
      let contactDatas:any = sessionStorage.getItem('contactData')
        if(contactDatas) {
          setUserData(JSON.parse(contactDatas))
        }
      }
    getFormSession()
  },[])
  // console.log(peopleList.info.inquiryType)
  const onChange = (e:any) => {
    setUserData(e.target.value);
  };
  return(
    <>
      <Head
        title={''}
        description={``}
      />
      <Content>
        <ContainerSecondary>
          <Heding>{pageInfo.heding}</Heding>
          <SubHeding>{pageInfo.txt}</SubHeding>
          <FormItemContainar>
            <Input
              name='name'
              tagName='必須'
              fildName='お名前'
              validateType='required'
              placeholder=''
              value={peopleList.info.name}
            />
          </FormItemContainar>
          <FormItemContainar>
            <Input
              name='mail'
              tagName='必須'
              fildName='メールアドレス' 
              validateType='required email'
              placeholder='shinseikatsu@xxx.co.jp'
              value={peopleList.info.mail}
            />
          </FormItemContainar>
          <FormItemContainar>
            <TextArea
              name='text'
              tagName='必須'
              fildName='内容' 
              validateType='required'
              placeholder=''
              value={peopleList.info.text}
            />
          </FormItemContainar>
          <BtnContainer>
            <Button
              dataTarget={'btn'}
              txt={'入力内容を確認する'}
              color={Color.white}
              backgroundColor={Color.gary}
              fontSize={1.5}
              onClick={(e)=> {
                dispatch(allChick({target:e})); 
              }}
            />
          </BtnContainer>
        </ContainerSecondary>
      </Content>
    </>
  )
}
export default Contact