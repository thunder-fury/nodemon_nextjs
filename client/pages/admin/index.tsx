import { useState, useEffect } from 'react'
import Input from '../../components/form/atoms/InputField'
import SelectField from '../../components/form/atoms/SelectField'
import { Color } from '../../styles/Variables'
import { container } from '../../styles/components/block/Container'
import { allCheck, changedInput, article, changeTxt } from '../../store/slices/ArticleSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Button from '../../components/button'
import CheckField from '../../components/form/atoms/CheckField'
import Loading from '../../components/Loading'
import axios from 'axios'
export const User: React.FC = ({
}) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [userInfo, setUserInof] = useState('')
  const [loading, setLoading] = useState(false)
  // const [id, setId] = useState<number>()
  let peopleList = useSelector(article)
   
  // console.log(setCheckd())
  if (loading) {
    return (
      <Loading />
    )
  }
   console.log(peopleList)
  return (
    <>
      <Input
        name={`key`}
        fildName={`title`}
        validateType={``}
        placeholder={`title`}
        value={peopleList.info.title}
        type={`text`}
        onChange={(e: any) => {
          dispatch(changeTxt({ value: e.target.value,  key: `title`}))
          dispatch(changedInput({
            value: e.target.value,
            type: e.target.getAttribute('data-validate-type'),
            key: e.target.getAttribute('data-fild-name'),
            target: e.target
          }));
        }}
      />
      <Input
        name={`key`}
        fildName={`description`}
        validateType={``}
        placeholder={`description`}
        value={peopleList.info.description}
        type={`text`}
        onChange={(e: any) => {
          dispatch(changeTxt({ value: e.target.value,  key: `description`}))
          dispatch(changedInput({
            value: e.target.value,
            type: e.target.getAttribute('data-validate-type'),
            key: e.target.getAttribute('data-fild-name'),
            target: e.target
          }));
        }}
      />
      <Input
        name={`key`}
        fildName={`created`}
        validateType={``}
        placeholder={`created`}
        value={peopleList.info.created}
        type={`text`}
        onChange={(e: any) => {
          dispatch(changeTxt({ value: e.target.value,  key: `created`}))
          dispatch(changedInput({
            value: e.target.value,
            type: e.target.getAttribute('data-validate-type'),
            key: e.target.getAttribute('data-fild-name'),
            target: e.target
          }));
        }}
      />
      <Input
        name={`key`}
        fildName={`outor`}
        validateType={``}
        placeholder={`outor`}
        value={peopleList.info.outor}
        type={`text`}
        onChange={(e: any) => {
          dispatch(changeTxt({ value: e.target.value,  key: `outor`}))
          dispatch(changedInput({
            value: e.target.value,
            type: e.target.getAttribute('data-validate-type'),
            key: e.target.getAttribute('data-fild-name'),
            target: e.target
          }));
        }}
      />
      <Input
        name={`key`}
        fildName={`profile`}
        validateType={``}
        placeholder={`profile`}
        value={peopleList.info.profile}
        type={`text`}
        onChange={(e: any) => {
          dispatch(changeTxt({ value: e.target.value,  key: `profile`}))
          dispatch(changedInput({
            value: e.target.value,
            type: e.target.getAttribute('data-validate-type'),
            key: e.target.getAttribute('data-fild-name'),
            target: e.target
          }));
        }}
      />
      <div css={container.btn}>
        <Button
          dataTarget={`btn`}
          txt={`送信`}
          color={Color.white}
          backgroundColor={Color.gray}
          fontSize={2}
          onClick={(e) => {
            dispatch(allCheck({ target: e }));
          }}
        />
      </div>
    </>
  )
}

export default User