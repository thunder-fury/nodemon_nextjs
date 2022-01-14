import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { FIXME } from '../../../types/Any'
import { Box, TableBody, TableRow, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncPunchGet, punchRes } from '../../../stores/slices/punchSlice'

const columns: GridColDef[] = [
  { field: 'f_date', headerName: '日時', width: 200 },
  // { field: 'active', headerName: '現在', width: 100 },
  { field: 'attendance', headerName: '出勤時間', width: 110 },
  { field: 'leaving', headerName: '退勤時間', width: 110 },
  { field: 'note', headerName: '備考', width: 110 },
]

const DataTable: React.FC = () => {
  const _punchRes = useSelector(punchRes)
  const { respons } = _punchRes
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncPunchGet())
  }, [])
  console.log(respons)
  return (
    <Box
      sx={{
        display: `flex`,
        justifyContent: `center`,
        mt: 5,
      }}
    >
      <Box
        sx={{
          width: 550,
          height: 500,
        }}
      >
        <Typography variant={`subtitle1`}>出勤リスト</Typography>
        <DataGrid
          rows={respons && respons}
          columns={columns}
          // pageSize={5}
          // rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </Box>
    </Box>
  )
}

export default DataTable
