import { css } from '@emotion/react'
import { useState } from 'react'
import axios from 'axios'
export const Update: React.FC = () =>{
  const [img, setImg]:any = useState(null)
  const [title, setTitle] = useState(``)
  const [fileUrl, setFileUrl]:any = useState(null);
  const onSubmitHandler = async (e:any) => {
    e.preventDefault()
    const formData = new FormData()
    const reader = new FileReader()
    reader.readAsDataURL(img)
    formData.append(`file`, img)
    formData.append(`title`,title)
    axios.post(`/api/add_update`, formData)
      .then(res => {
        console.log(res)

      }).catch(err =>{
        console.log(err)
      })
  }
  return(
    <form encType="multipart/form-data" method="post">
      <h1>이미지 추가</h1>
      <input type="text" name={`title`} onChange={(e) => {setTitle(e.target.value)}} />
      <img src={fileUrl} alt="" />
      <input 
        type="file" 
        name="file"
        onChange={(e: any)=>{
          console.log(e.target.result)
          setImg(e.target.files[0])}
        }
      />
      <button 
        type="submit"
        onClick={(e) => {onSubmitHandler(e)}}
        css={css`
          background-color: black;
          padding: 10px;
          color: white;
          border-radius: 5px;`
        }>전송</button>
    </form>
  )
}

export default Update