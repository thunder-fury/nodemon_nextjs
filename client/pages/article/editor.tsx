import { useState } from 'react'
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('../../components/form/Editor'), { ssr: false })
export const ArticleEditor: React.FC = ({
}) => {
  const [ editorData, setEditorData ] = useState('')
  // console.log(editorData)
  return (
    <div>
      <Editor onChange={(e: any, editor: any) => {
        setEditorData(editor.getData());
      }} />
    </div>
  )
}

export default ArticleEditor