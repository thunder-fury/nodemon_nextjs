import React, { useRef, forwardRef} from 'react'
import { selectContact, changeTxt, changedInput } from '../../../store/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FormProps } from '../Interface'
import { InputElment, ErrorMsg  } from '../Style'

export const Input: React.FC<FormProps> = ({
  fildName,
  name,
  validateType,
  placeholder,
  setData,
  value,
  onChange
}) => {
  // 上書き
  const dispatch = useDispatch()
  // 
  // console.log(inputElm.current)

  const peopleList = useSelector(selectContact)
  // console.log(peopleList)
  return(
    <>
      <InputElment
        placeholder={placeholder}
        name={name}
        data-fild-name={fildName}
        onChange={onChange}
        // onChange={ (e: any) => { 
        //   dispatch(changeTxt({ value:e.target.value,  key:name }));
        //   dispatch(changedInput({ value:e.target.value,  type:validateType,  key:fildName, target:e.target }));
        // }}
        value={value}
        data-validate-type={validateType}
        //dispatch関数の中グローバル関数
      />
      <ErrorMsg data-target-error >error</ErrorMsg>
    </>
  )
}
export default Input