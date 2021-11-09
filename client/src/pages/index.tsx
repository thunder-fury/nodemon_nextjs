import React,{ useEffect, useRef, useState } from 'react'
import { Color } from '../styles/Color'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { sp } from '../styles/Media'
import axios from 'axios';
interface props {}
export const Index: React.FC<props> = ({
}) => {
  const buttonElm = useRef(null)
  const dispatch = useDispatch()
  const [ businessDatas, setBusinessData ] = useState([])
  useEffect(() => {
    const getBusinessData = async () => {
      const endpoint ='http://localhost:3090/api/articles'
      const res = await axios.get(endpoint)
      console.log(res)
      // setBusinessData(res.data.allData)
    }
    getBusinessData()
  },[])
  return(
    <>
      トップページ
    </>
  )
}
export default Index