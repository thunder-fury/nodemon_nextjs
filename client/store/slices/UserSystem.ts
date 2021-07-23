import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { formScreen } from '../../utils/FormScreen'
import { render } from '../../utils/Router'
import { displayEmptyRequired } from '../../utils/fomCount'
import { addCookie, getCookie,removeCookie } from '../../utils/Session'
import { sbmitLogin } from '../../utils/Login'
import { sbmitLogOut } from '../../utils/LogOut'
const userSystem = createSlice({
  // 必須
  name:`login`,
  // fromData Object
  initialState: {
    info: {
      id: ``,
      password: ``,
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
      // console.log(action.payload.value, action.payload.type, )
      let items:NodeListOf<HTMLAnchorElement> = document.querySelectorAll('[data-validate-type*="required"]');
      displayEmptyRequired(items)
    },
    login(state, action): any {
      //ボタンクリック後バリデーションチェックしてtureの場合次のページrender
      let e = action.payload.target
      e.preventDefault()
      let inputItems:NodeListOf<HTMLAnchorElement> =  document.querySelectorAll('[data-validate-type]')
      Array.prototype.slice.call(inputItems).forEach((elm:HTMLInputElement) => {
        let type:any = elm.getAttribute('data-validate-type')
        formScreen(elm.value, type, elm)
      });
      let errorMsg:any = ''
      let errorInputs = document.querySelectorAll('.is-error[data-validate-type]');
      if(errorInputs.length == 0) {
        // const endpoint =`/api/login`
        const endpoint = `https://stoplight.io/mocks/woo/m-a-admin:main/1755950/api/login`
        sbmitLogin(endpoint, state)
      }
    },
    logOut(state, action) {
      // const endpoint =`/api/logout`
      const endpoint = `https://stoplight.io/mocks/woo/m-a-admin:main/1755950/api/logout`
      sbmitLogOut(endpoint, getCookie(`token`))
      state.info.id = ''
      state.info.password = ''
    },
    posts:(state:any, action) => {
      
    }
  }
})
export const { changeTxt, changedInput, login, posts, logOut } = userSystem.actions //関数を呼び出すためのexport
export const userSistem = (state: any) => state.login //stateObj呼び出すためのexport
export default userSystem.reducer //必須

