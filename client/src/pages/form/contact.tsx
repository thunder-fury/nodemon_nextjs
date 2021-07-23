import React, { useState, useEffect } from 'react'
import router from 'next/router'
import Head from '../../components/common/Head'
import Input from '../../components/form/atoms/InputField'
import Select from '../../components/form/atoms/SelectField'
import TextArea from '../../components/form/atoms/TextAreaField'
import Button from '../../components/button'
import { Content, ContainerSecondary, BtnContainer } from './../../styles/Global'
import { allChick, posts } from '../../store/slices/contactSlice'
import { selectContact, changeTxt,changedInput } from '../../store/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../styles/Color'
import { sp } from '../../styles/Media'
import styled from 'styled-components'

const FormItemContainar = styled.div`
  border-bottom: 1px solid ${Color.gary};
  padding: 40px 0;
  &:last-of-type{
    margin-bottom: 30px;
  }
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
export const Contact: React.FC<props> = ({
}) => {
  const dispatch = useDispatch()
  let peopleList = useSelector(selectContact)
  const pageInfo = {
    heding: 'お問い合わせ',
    txt: 'お問い合わせ内容をご入力ください。'
  }
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
              onChange={(e: any) => {
                dispatch(changedInput({
                  value: e.target.value,
                  type: e.target.getAttribute('data-validate-type'),
                  key: e.target.getAttribute('data-fild-name'),
                  target: e.target
                }));
              }}
              value={peopleList.info.name}
            />
          </FormItemContainar>
          <FormItemContainar>
            <Input
              name='mail'
              tagName='必須'
              fildName='メールアドレス' 
              validateType='required email'
              placeholder='sample@xxx.co.jp'
              value={peopleList.info.mail}
              onChange={(e: any) => {
                dispatch(changedInput({
                  value: e.target.value,
                  type: e.target.getAttribute('data-validate-type'),
                  key: e.target.getAttribute('data-fild-name'),
                  target: e.target
                }));
              }}
            />
          </FormItemContainar>
          <BtnContainer>
            <Button
              dataTarget={'btn'}
              txt={'入力内容を確認する'}
              color={Color.white}
              backgroundColor={Color.gary}
              borderRadius={3.5}
              arrowColor={Color.white}
              onClick={(e)=> {
                dispatch(allChick({target:e})); 
              }}
              size={440}
            />
          </BtnContainer>
        </ContainerSecondary>
      </Content>
    </>
  )
}
export default Contact