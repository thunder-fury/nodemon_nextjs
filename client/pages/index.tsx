import React, { useState, useEffect } from 'react'
import { redirect } from '../utils/redirect'
import { getUserInfo } from '../utils/GetUserInfo'
import { render } from '../utils/Router'
import Router, { useRouter } from 'next/router'

interface props { }
export const Index: React.FC<props> = ({
}) => {
  return (
    <>
      <div>
        <img src="http://localhost:3090/image/1627732988172__IMG_5658.JPG" alt="" />
      </div>
    </>
  )
}
export default Index