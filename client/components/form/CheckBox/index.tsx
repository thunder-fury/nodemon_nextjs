import { useEffect, useMemo, useState } from 'react'
import { css } from '@emotion/react';
import  { check } from '../../../styles/components/atoms/from/CheckBox'
import Input from '../../../components/form/Input'
import Icon from '../../Icon';
import { Color } from '../../../styles/Variables'
import { useSelector } from 'react-redux'
import { ErrorMsg } from '../ErrorMsg';

interface Props {
  name: string
  value?: string
  label?: string
  id?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  attribute?: string
  validateType?: string
  checkd?:boolean
}

const Checkbox: React.FC<Props> = ({
  name,
  label,
  id,
  value,
  validateType,
  checkd,
  onChange,
  attribute }) => {
  const [isCheck, setIsCheck] = useState(false)
  const setChecking = useMemo(() => {
    return (e: any) => {
      setIsCheck(e.target.checked);
    };
  }, []);
  // console.log(checkd)
  return (
    <label 
      css={check.label} 
      htmlFor={id}
      className={checkd || isCheck ? 'is-checked' : ''}
    >
      <div css={check.inner}>
        {checkd || isCheck ? <div css={check.icon}> <Icon w={10} h={10} icon={`check`} color={Color.white} /> </div> : '' }
        <input
          data-checkebox
          id={id}
          data-validate-type={validateType}
          css={check.box}
          type={`checkbox`}
          name={name}
          value={value}
          onChange={setChecking}
          className={checkd || isCheck ? 'is-checked' : ''}
        />
      </div>
      {label}
    </label>
  )
}

export default Checkbox