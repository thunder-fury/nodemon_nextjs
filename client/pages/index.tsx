import React from 'react'
interface props { }
export const Index: React.FC<props> = ({
}) => {
  const YubinBango = require('yubinbango-core2')
  const autoYubin: any = (zip: any) => {
  new YubinBango.Core(zip.target.value, (addr:any) => {
    console.log(addr)
  })
  }
  return (
    <>
      <div>
        <input type="text" onChange={(e) =>{autoYubin(e)}} />
      </div>
    </>
  )
}
export default Index