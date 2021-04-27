import React from 'react'
import Tag from '../../tag'
import Select from '../Select'
import Flag from '../flag'
import styled from 'styled-components'
import { FormProps } from '../Interface'
import { Color } from '../../../styles/Color'
import { sp } from '../../../styles/Media'
import { InputContainer, FlagWrap, TagWrap, InputWrap } from '../Style'



export const SelectField: React.FC<FormProps> =({
  tagName,
  fildName,
  name,
  validateType,
  placeholder,
  options,
  value
}) => {
  return(
    <InputContainer>
      <FlagWrap>
        <TagWrap>
          <Tag 
            tagName={tagName}
            backGround={`${Color.blue}`}
            borderRadius={4}
          />
        </TagWrap>
        <Flag flag={fildName}/>
      </FlagWrap>
      <InputWrap>
        <Select
          fildName={fildName}
          name={name}
          validateType={validateType}
          placeholder={placeholder}
          options={options}
          value={value}
        />
      </InputWrap>
    </InputContainer>
  )
}

export default SelectField