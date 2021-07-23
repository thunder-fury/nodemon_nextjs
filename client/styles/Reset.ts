import { css } from '@emotion/react'
import { Color } from './Variables'

export const Reset = css`
  html,body,div,span,object,iframe,h1,h2,h3,h4,
  h5,h6,p,blockquote,pre,abbr,address,cite,code,
  del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,
  sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,
  legend,table,caption,tbody,tfoot,thead,tr,th,td,
  article,aside,canvas,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section,summary,
  time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background: transparent;
  }
  p {
    line-height: 25px;
  }
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    /* font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ",
      "Hiragino Kaku Gothic ProN", "Hiragino Sans", sans-serif;
    -webkit-text-size-adjust: 100%; */
    font-family: "Noto Sans CJK JP", "Noto Sans CJK JP Subset", "Noto Sans",
      "Montserrat", sans-serif;
    /* background-color: #f6f8fa; */
  }
  a {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
  }
  
  select,
  input,
  textarea {
    appearance: none;
  }
  input,
  textarea {
    border: none;
    outline: none;
  }
  select::-ms-expand {
    display: none;
  }
`;


export const Normalize = css `
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
  text-shadow: none !important;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit;
}
details {
  display: block;
}
summary {
  display: list-item;
}
[hidden] {
  display: none;
}
.pictureImg {
  width: 100%;
}
`