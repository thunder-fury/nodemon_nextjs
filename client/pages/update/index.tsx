import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import DragDrop from '../../components/Atoms/DragDrop'
import axios from 'axios'
export const Update: React.FC = () =>{
  const [img, setImg]:any = useState(null)
  const [title, setTitle] = useState(``)
  const onSubmitHandler = async (e:any) => {
    e.preventDefault()
    const formData = new FormData()
    const reader = new FileReader()
    formData.append(`file`, img)
    formData.append(`title`,title)
    axios.post(`/api/add_update`, formData)
      .then(res => {
        console.log(res)
      }).catch(err =>{
        console.log(err)
      })
  }
  const setImage = (e: any) => {
    setImg(e.target.files[0])
  }
  useEffect(() => {
    console.log(img)
  },[img])
  return(
    <form encType="multipart/form-data" method="post">
      <h1>UP DATE STUDY</h1>
      {/* <input type="text" name={`title`} onChange={(e) => {setTitle(e.target.value)}} /> */}
      <DragDrop 
        onChange={(e: any)=>{setImage(e)}} 
        onDragOver={(e: any)=>{setImage(e)}} 
        onDrop={(e: any)=>{setImage(e)}} 
      />
      <button
        css={button.elemet}
        type={`submit`}
        onClick={(e) => {onSubmitHandler(e)}}
        >전송</button>
    </form>
  )
}

const button = {
  elemet: css`
    color: white;
    background-color: black;
  `
}
export default Update