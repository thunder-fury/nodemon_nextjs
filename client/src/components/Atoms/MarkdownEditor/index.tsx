import MarkdownIt from 'markdown-it'
import 'react-markdown-editor-lite/lib/index.css'
const mdParser = new MarkdownIt(/* Markdown-it options */)
import dynamic from 'next/dynamic'
const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
})
export const MarkddownEditor = () => {
  return (
    <>
      <h2>MarkddownEditor</h2>
    </>
  )
}

export default MarkddownEditor
