import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { FIXME } from '../../../types/Any'
import { Box, TableBody, TableRow, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PunchType } from '../../../types/Punch.Type'
import {
  fetchAsyncPunchGet,
  fetchAsyncPunchListCsvGet,
  punchList,
  punchListCsv,
} from '../../../stores/slices/punchSlice'
import SVGDownloadButton from '../CsvButton'
const columns: GridColDef[] = [
  { field: 'date', headerName: '日時', width: 200 },
  // { field: 'active', headerName: '現在', width: 100 },
  { field: 'attendance', headerName: '出勤時間', width: 110 },
  { field: 'leaving', headerName: '退勤時間', width: 110 },
  { field: 'note', headerName: '備考', width: 110 },
]

const DataTable: React.FC = () => {
  const _punchList = useSelector(punchList)
  const _punchListCsv = useSelector(punchListCsv)
  const { respons }: FIXME = _punchList
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncPunchListCsvGet())
  }, [])
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
          padding: `5%`,
        }}
      >
        <Box sx={{ display: `flex`, alignItems: `center` }}>
          <Typography sx={{ flexGrow: 1 }} variant={`subtitle1`}>
            <strong>打刻リスト</strong>
          </Typography>
          <SVGDownloadButton
            fileName={`出勤リスト`}
            label={`Download List`}
            data={_punchListCsv?.respons}
          />
        </Box>
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
