//credit goes to https://github.com/ckeditor/ckeditor5/issues
declare module '@ckeditor/ckeditor5-react' {
  const CKEditor: any
  export { CKEditor }
}

declare module '@ckeditor/ckeditor5-build-classic' {
  const ClassicEditor: any
  export = ClassicEditor
}
