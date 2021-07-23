import { Color } from '../../../styles/Variables'
import { form } from '../../../styles/components/atoms/Form'
import ErrorMsg from '../ErrorMsg'
export interface Props {
  fildName?: string
  name: string
  validateType?: string
  placeholder?: string
  value?: string
  onChange?: any
  defaultValue?: string
  type: string
  attribute?: string
  isBorder?: boolean
}

export const Input: React.FC<Props> = ({
  fildName,
  name,
  validateType,
  placeholder,
  value,
  onChange,
  defaultValue,
  type,
  attribute,
  isBorder
}) => {
  return (
    <>
      <input
        css={form.input}
        placeholder={placeholder}
        name={name}
        data-fild-name={fildName}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        data-validate-type={validateType}
        type={type}
        data-attribute={attribute}
        className={isBorder ? `is-border` : ''}
      />
      <ErrorMsg />
    </>
  )
}
export default Input
