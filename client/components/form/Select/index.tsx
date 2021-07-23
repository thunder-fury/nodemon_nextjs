import { form } from '../../../styles/components/atoms/Form'
import Icon from '../../Icon'
import ErrorMsg from '../ErrorMsg'
export interface Props {
  fildName?: string
  name: string
  options: any
  validateType?: string
  value?: string
  onChange?: any
  defaultValue?: any
  attribute?: string
  isBorder?: boolean
}

export const Select: React.FC<Props> = ({
  fildName,
  name,
  validateType,
  options,
  defaultValue,
  value,
  onChange,
  attribute,
  isBorder
}) => {
  return (
    <div css={form.selectWrap}>
      <div css={form.iconWrap}>
        <Icon h={10} w={10} icon={`arrowdown`} />
      </div>
      <select
        css={form.select}
        name={name}
        data-fild-name={fildName}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        data-validate-type={validateType}
        data-attribute={attribute}
        className={isBorder ? `is-border` : ''}
      >
        <option value="">----</option>
        {options.map((option: any, index: number) => {
          return (
            <option
              key={index}
              value={option.value}
            >{option.value}</option>
          )
        })}
      </select>
      <ErrorMsg />
    </div>
  )
}


export default Select