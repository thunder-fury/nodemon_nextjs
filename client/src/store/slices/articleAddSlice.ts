import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { submit } from '../../utils/Submit'
import { formScreen } from '../../utils/FormScreen'
import { render } from '../../utils/Router'
import { displayEmptyRequired } from '../../utils/fomCount'

const articleAddSlice = createSlice({
  // 必須
  name:`articleAdd`,
  // fromData Object
  initialState: {
    info: {
      title: '',
      description: '',
      created: '',
      outor: '',
      profile: '',
    }
  },
  //global function
  reducers: {
    changeTxt: (state:any, action) => {
      console.log(`DFASDF`)
      state.info[action.payload.key] = action.payload.value //←更新する新しい値
    },
    changedInput: (state, action) => {
      // let validateResult:any = Validate.check(action.payload.value, action.payload.type)
      let elm = action.payload.target
      console.log(elm)
      formScreen(action.payload.value, action.payload.type, elm)
      let items:NodeListOf<HTMLAnchorElement> = document.querySelectorAll('[data-validate-type*="required"]');
      console.log(items)
      displayEmptyRequired(items)
    },
    allChick(state, action) {
      //ボタンクリック後バリデーションチェックしてtureの場合次のページrender
      let e = action.payload.target
      console.log(e)
      e.preventDefault()
      let inputItems:NodeListOf<HTMLAnchorElement> =  document.querySelectorAll('[data-validate-type]')
      Array.prototype.slice.call(inputItems).forEach((elm:HTMLInputElement) => {
        let type:any = elm.getAttribute('data-validate-type')
        formScreen(elm.value, type, elm)
      });
      let errorInputs = document.querySelectorAll('.is-error[data-validate-type]');
      if(errorInputs.length == 0) {
        render('/form/confirm');
        const endpoint ='/api/articles'
        submit( endpoint, state, 'thanks')
      }
    },
    posts:(state:any, action) => {
      const endpoint ='/api/send'
      submit( endpoint, state, 'thanks')
    }
  }
})

export const { changeTxt, changedInput, allChick, posts } = articleAddSlice.actions //関数を呼び出すためのexport
export const articleAdd = (state: any) => state.articleAdd //stateObj呼び出すためのexport
export default articleAddSlice.reducer //必須

