import { useState, useEffect } from 'react'
import { footer } from '../../../styles/components/atoms/Footer'

export const Footer: React.FC = () => {
  return (
    <footer css={footer.container}>
      <div css={footer.inner}>
        <small css={footer.company}>©2020</small>
      </div>
    </footer>
  )
}

export default Footer
