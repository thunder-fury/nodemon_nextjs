import Tag from '../../tag'
import CheckBox from '../CheckBox'
import Flag from '../flag'
import ErrorMsg from '../ErrorMsg'
import { allCheck, userDetails, setVal, changedInput } from '../../../store/slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { check } from '../../../styles/components/atoms/from/CheckBox'
import { Color } from '../../../styles/Variables'
import { container } from '../../../styles/components/block/Container'
interface Props {
  tagName?: string
  fildName?: string
  name: string
  label: string
  id: string
  validateType?: string
  onChange?: any
  options: string[],
  checkd?: boolean
}


export const CheckField: React.FC<Props> = ({
  tagName,
  fildName,
  label,
  validateType,
  onChange,
  id,
  name,
  options,
  checkd
}) => {
  let peopleList = useSelector(userDetails)
  // Data上書き
  const setCheckd = (): string => {
    let checkdVal: string = ''
    peopleList.info.negotiationTarget.forEach((v: string) => {
      checkdVal = v
    });
    return checkdVal
  }
  console.log(peopleList.info.negotiationTarget.includes(`事業の購入`))
  return (
    <div
      css={container.input}
    >
      {(tagName) && (
        <Tag
          tagName={tagName}
          backgroundColor={Color.purple}
          borderRadius={4}
        />
      )}
      <Flag validateType={validateType} label={fildName} />
      <div css={check.container}>
        {options.map((option: any, index: number) => {
          return (
            <CheckBox
              validateType={validateType}
              key={option.id}
              name={name}
              id={id + option.id}
              label={option.value}
              value={option.value}
              onChange={onChange}
              checkd={peopleList.info.negotiationTarget.includes(option.value)}
            />
          )
        })
        }
      </div>
      <ErrorMsg />
    </div>
  )
}


export default CheckField
