import React, { useState, useEffect } from 'react'
import { footer } from '../../../styles/components/atoms/Footer'

interface FooterProps {
}

export const Footer: React.FC<FooterProps> = ({

}) => {
  return (
    <footer css={footer.container}>
      <div css={footer.inner}>
        <small css={footer.company}>©2020</small>
      </div>
    </footer>
  )
}

export default Footer