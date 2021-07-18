import { Validate } from '@thunder_fury/form-validate'
export function formScreen(value:string, validateMethod:string, elm:any) : boolean {
  let validateResult:any = Validate.check(value, validateMethod);
  let errorElm:HTMLElement = elm.parentNode.querySelector('[data-target-error]')
  if(validateResult.isError) {
    let errorMsg = Validate.errorMsg(validateResult.key, elm.getAttribute('data-fild-name'), validateResult.params);
    elm.classList.add('is-error')
    errorElm.classList.add('is-show')
    errorElm.innerText = errorMsg
    return false
  } else {
    elm.classList.remove('is-error')
    errorElm.classList.remove('is-show')
    errorElm.innerText = ''
    return true
  }
}

Validate.msg = {
  required: '{name}は必須項目です。',
  email:'{name}の形式が正しくありません。',
  number: '{name}は数字のみでご入力してください。',
  maxLength:'{name}は{maxLength}文字数以下で入力してください',
  minLength:'{name}は{minLength}文字数以上で入力してください',
}

