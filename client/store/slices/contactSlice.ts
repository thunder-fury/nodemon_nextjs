import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { submit } from '../../utils/Login'
import { formScreen } from '../../utils/FormScreen'
import { render } from '../../utils/Router'
import { displayEmptyRequired } from '../../utils/fomCount'

const contactSlice = createSlice({
  // 必須
  name:`contact`,
  // fromData Object
  initialState: {
    info: {
      name: ``,
      mail: ``,
      text: ``
    }
  },
  //global function
  reducers: {
    changeTxt: (state:any, action) => {
      state.info[action.payload.key] = action.payload.value //←更新する新しい値
    },
    changedInput: (state, action) => {
      // let validateResult:any = Validate.check(action.payload.value, action.payload.type)
      let elm = action.payload.target
      formScreen(action.payload.value, action.payload.type, elm)
      let items:NodeListOf<HTMLAnchorElement> = document.querySelectorAll('[data-validate-type*="required"]');
      displayEmptyRequired(items)
    },
    allChick(state, action) {
      //ボタンクリック後バリデーションチェックしてtureの場合次のページrender
      let e = action.payload.target
      e.preventDefault()
      let inputItems:NodeListOf<HTMLAnchorElement> =  document.querySelectorAll('[data-validate-type]')
      Array.prototype.slice.call(inputItems).forEach((elm:HTMLInputElement) => {
        let type:any = elm.getAttribute('data-validate-type')
        formScreen(elm.value, type, elm)
      });
      let errorInputs = document.querySelectorAll('.is-error[data-validate-type]');
      if(errorInputs.length == 0) {
        // const endpoint =`/form/api/contact/validate`
        // submit( endpoint, state)
        render(`/form/confirm`);
      }
    },
    posts:(state:any, action) => {
      //TODO: lp-fromの場合
      // const endpoint =`/form/api/contacts/send`
      //TODO: sendGridの場合
      const endpoint =`/api/send`
      submit( endpoint, state)
    }
  }
})
export const { changeTxt, changedInput, allChick, posts } = contactSlice.actions //関数を呼び出すためのexport
export const selectContact = (state: any) => state.contact //stateObj呼び出すためのexport
export default contactSlice.reducer //必須

