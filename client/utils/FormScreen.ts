export function formScreen(value:string, validateMethod:string, elm:any) : boolean {
  let validateResult:any = Validate.check(value, validateMethod)
  let errorElm:HTMLElement = elm.parentNode.querySelector('[data-target-error]')
  if(elm.type !== 'checkbox' && elm.type !== 'radio'  ) {
    validateResult = Validate.check(value, validateMethod)
  } else {
    let checkVal = ''
    const parentElm = elm.parentElement.parentElement.parentElement.parentElement
    const checkingElm = parentElm.querySelectorAll(`[data-checkebox]:checked`)
    errorElm = parentElm.querySelector('[data-target-error]')
    elm.checked? checkVal = elm.value: ''
    if(checkingElm.length >= 1) {
      validateResult = Validate.check(value, validateMethod)
      elm.setAttribute(`data-validate-type`,``)
    } else {
      validateResult = Validate.check(checkVal, validateMethod)
      elm.setAttribute(`data-validate-type`,`required`)
    }
  }
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

Validate.message = {
  required: '須項目です。',
  email:'{name}の形式が正しくありません。',
  number: '{name}は数字のみでご入力してください。',
  maxLength:'{name}は{maxLength}文字数以下で入力してください',
  minLength:'{name}は{minLength}文字数以上で入力してください',
}

