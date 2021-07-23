import { useState } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

interface Props {
  onChange: any
}
export const Editer: React.FC<Props> = ({
  onChange
}) => {
  const [content, setContent] = useState({
    content: ''
  })
  const getValue = (e: any) => {
  };
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onChange={onChange}
      />
    </div>
  )
}

export default Editer