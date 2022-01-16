import { Button } from '@mui/material'
import React from 'react'
interface Props {
  label?: string
  data?: any
  fileName?: string
  buttonColor?: 'primary' | 'error' | 'success' | 'dark'
  radius?: boolean
  shadow?: boolean
}

export const SVGDownloadButton: React.FC<Props> = ({
  label,
  data,
  fileName,
}) => {
  const downloadCSV = () => {
    const filename = `${fileName}.csv`
    const bom = new Uint8Array([0xef, 0xbb, 0xbf])
    const blob = new Blob([bom, data], { type: 'text/csv' })
    const url = (window.URL || window.webkitURL).createObjectURL(blob)
    const download = document.createElement('a')
    download.href = url
    download.download = filename
    download.click()
    ;(window.URL || window.webkitURL).revokeObjectURL(url)
  }
  return (
    <>
      <Button onClick={downloadCSV}>{label}</Button>
    </>
  )
}

export default SVGDownloadButton
