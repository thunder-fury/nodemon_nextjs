import { css } from '@emotion/react'
import { Color} from '../../Variables'

export const form = {
  input: css`
    width: 100%;
    height: 44px;
    &.is-border {
      border: 1px solid ${Color.gray2};
    }
    font-weight: normal;
    padding-left: 20px;
    box-sizing: border-box;
    &.is-error {
      border: 1px solid ${Color.red};
    }
    ::placeholder {
      color: ${Color.gray2};
      font-weight: normal;
    }
  `,
  iconWrap: css`
    position: absolute;
    right: 10px;
    top: 15px
  `,
  selectWrap: css`
    position: relative;
  `,
  select: css`
    width: 100%;
    height: 44px;
    font-weight: normal;
    padding-left: 20px;
    box-sizing: border-box;
    border: none;
    &.is-border {
      border: 1px solid ${Color.gray2};
    }
    &.is-error {
      border: 1px solid ${Color.red};
    }
  `,
  textArea: css`
    font-weight: normal;
    width: 100%;
    height: 200px;
    border-radius: 6px;
    border: 1px solid ${Color.gray2};
    font-weight: normal;
    padding-left: 20px;
    padding-top: 10px;
    box-sizing: border-box;
    background: ${Color.white};
    &.is-border {
      border: 1px solid ${Color.gray2};
    }
    ::placeholder {
      color: ${Color.gray2};
      font-weight: normal;
    }
    &.is-error {
      border: 1px solid ${Color.red};
    }
  `
}