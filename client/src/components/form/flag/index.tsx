import React from 'react'
interface flag {
  flag?: string
}
export const Flag: React.FC<flag> =({
  flag
}) => {
  return(
    <div>{flag}</div>
  )
}

export default Flag