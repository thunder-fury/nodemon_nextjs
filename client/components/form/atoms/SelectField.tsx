import Tag from '../../tag'
import Select from '../Select'
import Flag from '../flag'
import { Color } from '../../../styles/Variables'
import { container } from '../../../styles/components/block/Container'
import { useDispatch, useSelector } from 'react-redux'
import { selectContact, changeTxt, changedInput } from '../../../store/slices/contactSlice'

interface Props {
  onChange?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  tagName?: string
  fildName?: string
  name: string
  validateType?: string
  value?: string
  defaultValue?: string
  options: any
  attribute?: string
}

export const SelectField: React.FC<Props> = ({
  tagName,
  fildName,
  name,
  validateType,
  options,
  value,
  defaultValue,
  onChange,
  attribute
}) => {
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
      <Select
        fildName={fildName}
        name={name}
        validateType={validateType}
        options={options && options}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        attribute={attribute}
      />
    </div>
  )
}

export default SelectField