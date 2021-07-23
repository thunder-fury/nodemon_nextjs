import React,{ useEffect, useRef, useState } from 'react'
import Link from 'next/link'
export const Index: React.FC = (props) => {
  return(
    <>
      <Link
        href={`/articles`}
      >
        <a>articles</a>  
      </Link>
    </>
  )
}

export default Index