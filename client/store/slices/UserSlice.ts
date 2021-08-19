import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { submit } from '../../utils/submit'
import { formScreen } from '../../utils/FormScreen'
import { render } from '../../utils/Router'
const userInfo = createSlice({
  // 必須
  name:`user`,
  // fromData Object
  initialState: {
    info: {
      firstName: ``,
      lastName: ``,
      mailaddress: ``,
      companyName: ``,
      password: ``,
      tel: ``,
      
      address: ``,
      postcode: ``,
      prefecture: ``,

      sales:``,
      profit:``,
      considerationIndustries: ``,
      negotiationTarget: []
    }
  },
  //global function
  reducers: {
    setVal: (state:any, action) => {
      state.info[action.payload.key] = action.payload.value //←更新する新しい値
    },
    changedInput: (state, action) => {
      // let validateResult:any = Validate.check(action.payload.value, action.payload.type)
      let elm = action.payload.target
      formScreen(action.payload.value, action.payload.type, elm)
      // console.log(action.payload.value, action.payload.type, )
      let items:NodeListOf<HTMLAnchorElement> = document.querySelectorAll('[data-validate-type*="required"]');
      // displayEmptyRequired(items)
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
        //TODO: API連携後200がでた場合cookieを格納修正
        const endpoint =``
        submit( endpoint, state)
      }
    },
    posts:(state:any, action) => {

    }
  }
})
export const { setVal, changedInput, allCheck, posts } = userInfo.actions //関数を呼び出すためのexport
export const userDetails = (state: any) => state.user //stateObj呼び出すためのexport
export default userInfo.reducer //必須

