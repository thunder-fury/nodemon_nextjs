import Tag from '../../tag'
import TxtArea from '../Txtarea'
import Flag from '../flag'
import { Color } from '../../../styles/Variables'
import { inputContainer, flagWrap, tagWrap, inputWrap } from '../Style'
import { useDispatch, useSelector } from 'react-redux'
import { selectContact, changeTxt, changedInput } from '../../../store/slices/contactSlice'

interface Props {
  tagName: string
  fildName: string
  name: string
  validateType: string
  placeholder: string
  value: string
}

export const InputField: React.FC<Props> = ({
  tagName,
  fildName,
  name,
  validateType,
  placeholder,
  value
}) => {
  const dispatch = useDispatch()
  return (
    <div css={inputContainer}>
      <div css={flagWrap}>
        {(tagName) && (
          <div css={tagWrap}>
            <Tag
              tagName={tagName}
              backgroundColor={Color.blue}
              borderRadius={4}
            />
          </div>
        )}
        <Flag label={fildName} />
      </div>
      <div css={inputWrap}>
        <TxtArea
          fildName={fildName}
          name={name}
          validateType={validateType}
          placeholder={placeholder}
          value={value}
          onChange={(e: any) => {
            dispatch(changeTxt({
              value: e.target.value,
              key: name
            }))
            dispatch(changedInput({
              value: e.target.value, type: validateType, key: fildName,
              target: e.target
            }))
          }}
        />
      </div>
    </div>
  )
}

export default InputField