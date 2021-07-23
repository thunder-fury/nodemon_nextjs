import Tag from '../../tag'
import Input from '../Input'
import Flag from '../flag'
import { Color } from '../../../styles/Variables'
import { container } from '../../../styles/components/block/Container'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  tagName?: string
  fildName?: string
  name: string
  validateType?: string
  placeholder: string
  value?: string
  defaultValue?: any
  type: string
  onChange?: any
  require?: boolean
  attribute?: string
}

export const InputField: React.FC<Props> = ({
  tagName,
  fildName,
  name,
  validateType,
  placeholder,
  value,
  defaultValue,
  type,
  onChange,
  attribute
}) => {
  // Data上書き
  const dispatch = useDispatch()
  return (
    <div css={container.input}>
      {(tagName) && (
        <Tag
          tagName={tagName}
          backgroundColor={Color.purple}
          borderRadius={4}
        />
      )}
      <Flag validateType={validateType} label={fildName} />
      <Input
        fildName={fildName}
        name={name}
        value={value}
        validateType={validateType}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={type}
        //dispatch関数の中グローバル関数
        onChange={onChange}
        attribute={attribute}
      />
    </div>
  )
}

export default InputField


