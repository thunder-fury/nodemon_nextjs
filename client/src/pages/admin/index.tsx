import React, { useState, useEffect } from 'react'
import router from 'next/router'
import Head from '../../components/common/Head'
import Input from '../../components/form/atoms/InputField'

import Button from '../../components/button'
import { Content, ContainerSecondary, BtnContainer } from './../../styles/Global'
import { allChick, posts } from '../../store/slices/articleAddSlice'
import { articleAdd, changeTxt, changedInput } from '../../store/slices/articleAddSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Color } from '../../styles/Color'
import { sp } from '../../styles/Media'
import styled from 'styled-components'

interface props {}
export const Contact: React.FC<props> = ({
}) => {
  const dispatch = useDispatch()
  let peopleList = useSelector(articleAdd)
  const pageInfo = {
    heding: 'お問い合わせ',
    txt: 'お問い合わせ内容をご入力ください。'
  }
  console.log(peopleList)
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
              name='title'
              tagName='必須'
              fildName='title'
              validateType='required'
              placeholder=''
              value={peopleList.info.title}
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
          <FormItemContainar>
            <Input
              name='description'
              tagName='必須'
              fildName='description'
              validateType='required'
              placeholder=''
              value={peopleList.info.description}
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
          <FormItemContainar>
            <Input
              name='created'
              tagName='必須'
              fildName='created'
              validateType='required'
              placeholder=''
              value={peopleList.info.created}
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
          <FormItemContainar>
            <Input
              name='outor'
              tagName='必須'
              fildName='outor'
              validateType='required'
              placeholder=''
              value={peopleList.info.outor}
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
          <FormItemContainar>
            <Input
              name='profile'
              tagName='profile'
              fildName='お名前'
              validateType='required'
              placeholder=''
              value={peopleList.info.profile}
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
export default Contact