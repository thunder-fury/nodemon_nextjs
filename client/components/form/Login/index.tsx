import { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { container } from '../../../styles/components/block/Container'
import LoginInputField from '../atoms/InputField'
import Button from '../../button'
import { userSistem, login, changeTxt, changedInput } from '../../../store/slices/UserSystem'
import { useDispatch, useSelector } from 'react-redux'
import { Color, Media } from '../../../styles/Variables'

interface props { }
export const Login: React.FC<props> = ({
}) => {
  const dispatch = useDispatch()
  let peopleList = useSelector(userSistem)
  // console.log(peopleList)
  return (
    <>
      <main css={content}>
        <div css={containerSecondary}>
          <div css={container.fromItem}>
            <LoginInputField
              name='id'
              fildName='ID'
              validateType='required'
              placeholder='ID'
              value={peopleList.info.id}
              type={'text'}
              onChange={(e: any) => {
                dispatch(changeTxt({
                  value: e.target.value,
                  key: e.target.getAttribute('name')
                }));
                dispatch(changedInput({
                  value: e.target.value,
                  type: e.target.getAttribute('data-validate-type'),
                  key: e.target.getAttribute('data-fild-name'),
                  target: e.target
                }));
              }}
            />
          </div>
          <div css={container.fromItem}>
            <LoginInputField
              name='password'
              fildName='PASSWORD'
              validateType='required'
              placeholder='PASSWORD'
              type={'password'}
              value={peopleList.info.password}
              onChange={(e: any) => {
                dispatch(changeTxt({
                  value: e.target.value,
                  key: e.target.getAttribute('name')
                }));
                dispatch(changedInput({
                  value: e.target.value,
                  type: e.target.getAttribute('data-validate-type'),
                  key: e.target.getAttribute('data-fild-name'),
                  target: e.target
                }));
              }}
            />
          </div>
          <div css={container.btn}>
            <Button
              dataTarget={'btn'}
              txt={'LOGIN'}
              color={Color.white}
              backgroundColor={Color.gray}
              borderRadius={true}
              fontSize={20}
              onClick={(e) => {
                dispatch(login({ target: e }));
              }}
            />
          </div>
        </div>
      </main>
    </>
  )
}

const content = css`
  max-width: 300px;
  width: 100%;
  margin: 40px auto 0;
  background-color: ${Color.white};
`

const containerSecondary = css`
  width: 100%;
  padding: 30px;
  box-shadow: 0 3px 30px #0000000A;
  ${Media.mq} {
    max-width: 800px;
    margin: 0 auto;
  }
`

export default Login