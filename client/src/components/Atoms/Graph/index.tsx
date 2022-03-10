import {
  Bar,
  Bubble,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Scatter,
} from 'react-chartjs-2'
import type * as Chart from 'chart.js'
import { FIXME } from '../../../types/Any'
import { Color } from '../../../styles/Variables'
import { PunchType } from '../../../types/Punch.Type'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
// interface Props {
//   data: Chart.ChartData | ((canvas: HTMLCanvasElement) => Chart.ChartData)
//   options?: Chart.ChartOptions
// }

interface Props {
  daysOfWork: number[]
  respons: FIXME
}

export const Graph: React.FC<Props> = ({ daysOfWork, respons }: Props) => {
  const [date, setDate] = useState(new Date())
  const [year, setYear] = useState<FIXME>(date.getFullYear())
  const handleChange = (e: SelectChangeEvent) => {
    setYear(e.target.value as string)
  }
  const daysOfWorkArr = []
  const options = {
    legend: {
      display: true, // label 보이기 여부
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 1, // y축 스케일에 대한 최소값 설정
            stepSize: 1, // y축 그리드 한 칸당 수치
          },
        },
      ],
    },
    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: true,
  }
  for (let i: FIXME = 1; i < 13; i++) {
    i = i < 10 ? `0${i}` : `${i}`
    const res =
      respons &&
      respons.filter((v: PunchType) => `${v.date}` === `${year}-${i}`)
    daysOfWorkArr.push(res.length)
  }
  const data = {
    labels: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
    datasets: [
      {
        label: `${year}年度出勤日数`,
        backgroundColor: `${Color.blue}`,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: daysOfWorkArr,
      },
    ],
  }
  return (
    <>
      <Box sx={{ minWidth: 120, mt: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Year</InputLabel>
          <Box>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label={`year`}
              onChange={handleChange}
            >
              <MenuItem value={date.getFullYear()}>
                {date.getFullYear()}
              </MenuItem>
              <MenuItem value={date.getFullYear() - 1}>
                {date.getFullYear() - 1}
              </MenuItem>
              <MenuItem value={date.getFullYear() - 2}>
                {date.getFullYear() - 2}
              </MenuItem>
            </Select>
          </Box>
        </FormControl>
      </Box>
      <Bar data={data} options={options as FIXME} />
    </>
  )
}

export default Graph
