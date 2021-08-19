import { createSlice, PayloadAction, createAsyncThunk, compose } from '@reduxjs/toolkit'
import { formScreen } from '../../utils/FormScreen'
import { render } from '../../utils/Router'
import { displayEmptyRequired } from '../../utils/fomCount'
import { submit } from '../../utils/submit'

const newsSlice = createSlice({
  // 必須
  name:`news`,
  // fromData Object
  initialState: {
    info: {
      description: ``,
      title: ``,
      date: ``,
      // thumbnail: ``,
      file_img: ``,
      fileName:``
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
        const endpoint =`http://localhost:3030/api/news`
        const formData = new FormData()
        formData.append(`title`, state.info.title)
        formData.append(`date`, state.info.date)
        formData.append(`description`, state.info.description)
        formData.append(`file_img`, state.info.file_img)
        // formData.append(`file_img`, state.info.file_img)
        const obj =　{
          title: formData.get(`title`),
          date: formData.get(`date`) ,
          description: formData.get(`description`),
          file_img: formData.get(`file_img`),
          fileName: formData.get(`fileName`)
        }
        console.log(obj.file_img)
        console.log(obj)
        // fromBody.submit()
        // window.location.reload
        
        submit( endpoint, obj )
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
export const { changeTxt, changedInput, allCheck, posts } = newsSlice.actions //関数を呼び出すためのexport
export const news = (state: any) => state.news //stateObj呼び出すためのexport
export default newsSlice.reducer //必須

