import React from 'react'
import { selectContact, changeTxt, changedInput } from '../../../store/slices/contactSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FormProps } from '../Interface'
import { SelectContainar, SelectElment, ErrorMsg  } from '../Style'

export const Select: React.FC<FormProps> = ({
  fildName,
  name,
  validateType,
  options,
  value,
  selected
}) => {
  // 上書き
  const dispatch = useDispatch()
  // console.log(inputElm.current)

  const peopleList = useSelector(selectContact)
  // console.log(peopleList)
  return(
    <SelectContainar>
      <SelectElment 
        name={name}
        data-fild-name={fildName}
        onChange={ (e: any) => {
          dispatch(changeTxt({
            value:e.target.value, 
            key:name
          }))
          dispatch(changedInput({
            value:e.target.value, 
            type:validateType, 
            key:fildName, 
            target:e.target
          }))
        }}
        value={value}
        data-validate-type={validateType}
      > 
        <option value="">選択してください</option>
        {options && options.map((option, index)=>{
          return(
            <option
              key={index}
              value={option}
            >{option}</option>
          )
        })}
      </SelectElment>
      <ErrorMsg data-target-error ></ErrorMsg>
    </SelectContainar>
  )
}
export default Select