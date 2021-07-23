import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { formScreen } from '../../utils/FormScreen'
import { render } from '../../utils/Router'
import { displayEmptyRequired } from '../../utils/fomCount'
import { submit } from '../../utils/submit'
const articleSlice = createSlice({
  // 必須
  name:`article`,
  // fromData Object
  initialState: {
    info: {
      title: ``,
      description: ``,
      created: ``,
      outor: ``,
      profile: ``
    }
  },
  //global function
  reducers: {
    changeTxt: (state:any, action) => {
      state.info[action.payload.key] = action.payload.value //←更新する新しい値
      console.log(state.info[action.payload.key])
    },
    changedInput: (state, action) => {
      // let validateResult:any = Validate.check(action.payload.value, action.payload.type)
      let elm = action.payload.target
      formScreen(action.payload.value, action.payload.type, elm)
      let items:NodeListOf<HTMLAnchorElement> = document.querySelectorAll('[data-validate-type*="required"]');
      displayEmptyRequired(items)
    },
    allCheck(state, action) {
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
        console.log(`サーバー通信`)
        const endpoint =`http://localhost:3030/api/articles`
        submit( endpoint, state)
      }
    },
    posts:(state:any, action) => {
      //TODO: lp-fromの場合
      // const endpoint =`/form/api/contacts/send`
      //TODO: sendGridの場合
      const endpoint =`/api/send`
    }
  }
})
export const { changeTxt, changedInput, allCheck, posts } = articleSlice.actions //関数を呼び出すためのexport
export const article = (state: any) => state.article //stateObj呼び出すためのexport
export default articleSlice.reducer //必須

