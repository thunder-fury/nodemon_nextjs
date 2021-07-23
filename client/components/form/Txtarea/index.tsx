import { Form } from '../../../styles/components/atoms/Form'
import ErrorMsg from '../ErrorMsg'

export interface Props {
  fildName: string
  name: string
  validateType: string
  placeholder: string
  value: string
  onChange?: any
}

export const TextArea: React.FC<Props> = ({
  fildName,
  name,
  validateType,
  placeholder,
  value,
  onChange
}) => {
  return (
    <>
      <textarea
        css={Form.textArea}
        placeholder={placeholder}
        name={name}
        data-fild-name={fildName}

        value={value}
        data-validate-type={validateType}
        //dispatch関数の中グローバル関数
        onChange={onChange}
      />
      <ErrorMsg />
    </>
  )
}
export default TextArea