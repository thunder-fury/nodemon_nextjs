import React from 'react'
import Tag from '../../tag'
import Input from '../Input'
import Flag from '../flag'
import styled from 'styled-components'
import { FormProps } from '../Interface'
import { Color } from '../../../styles/Color'
import { sp } from '../../../styles/Media'
import { InputContainer, FlagWrap, TagWrap, InputWrap } from '../Style'

export const InputField: React.FC<FormProps> =({
  tagName,
  fildName,
  name,
  validateType,
  placeholder,
  value,
  onChange
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
      <InputWrap
      >
        <Input
          fildName={fildName}
          name={name}
          validateType={validateType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputWrap>
    </InputContainer>
  )
}

export default InputField