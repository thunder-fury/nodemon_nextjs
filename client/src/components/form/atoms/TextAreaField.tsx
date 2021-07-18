import React from 'react'
import Tag from '../../tag'
import TxtArea from '../Txtarea'
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
  height,
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
      <InputWrap
      >
        <TxtArea
          fildName={fildName}
          name={name}
          validateType={validateType}
          placeholder={placeholder}
          value={value}
        />
      </InputWrap>
    </InputContainer>
  )
}

export default InputField