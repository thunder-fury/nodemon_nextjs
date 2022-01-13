import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { FIXME } from '../../../types/Any'
import { Box, Typography } from '@mui/material'

const columns: GridColDef[] = [
  { field: 'date', headerName: '日時', width: 200 },
  // { field: 'active', headerName: '現在', width: 100 },
  { field: 'attendance', headerName: '出勤時間', width: 110 },
  { field: 'leaving', headerName: '退勤時間', width: 110 },
  { field: 'note', headerName: '備考', width: 110 },
]

interface DataProps {
  data: FIXME
}

const DataTable: React.FC<DataProps> = ({ data }) => {
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
          width: 500,
          height: 300,
        }}
      >
        <Typography variant={`subtitle1`}>出勤リスト</Typography>
        <DataGrid
          rows={data && data}
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
