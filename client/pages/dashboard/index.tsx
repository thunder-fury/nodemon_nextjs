import { useState, useEffect } from 'react'
import { getUserInfo } from '../../utils/GetUserInfo'
import Router, { useRouter } from 'next/router'
import Menu from '../../components/Menu'
import axios from 'axios'
interface props { }
export const Dashboard: React.FC<props> = ({
}) => {
  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  }
  // console.log(date.year, date.month)
  // const [datas, setDatas] = useState('')
  // const endPoint = `/api/user`
  // useEffect(() => {
  //   const getDatas = async () => {
  //     const res = await axios.get(endPoint)
  //     setDatas(res.data)
  //   }
  //   getDatas()
  // }, [])
  return (
    <>
      <p>新規会員登録数</p>
      <p>今月：800件</p>
      <p>ユーザー一覧はこちら</p>
      <p>新規メルマガ登録数</p>
      <p>今月：800人</p>
  
      {/* {Object.entries(datas).map(([key, value]: any, index: number) => {
        // console.log(key)
        const dateStr = value.registration_date.split('/')
        const getMonthd = dateStr.slice(0, 2)
        let dates:any = []
        
        return (
          <div key={value.id}>
            {getMonthd.map((item: any, index: any) => {
              dates += item
              if( dates === `${date.year}${date.month}`) {
                return(
                  <div key={index}>{Object.keys(value).length}</div>
                )
              }
            })}
          </div>
        )
      })} */}
      <p>メルマガ登録者一覧はこちら</p>
      <p>最新案件一覧</p>
      <p>未承認の案件数：5件</p>
      <p>未承認一覧はこちら</p>
    </>
  )
}
export default Dashboard