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

// interface Props {
//   data: Chart.ChartData | ((canvas: HTMLCanvasElement) => Chart.ChartData)
//   options?: Chart.ChartOptions
// }

interface Props {
  daysOfWork: number[]
}

export const Graph: React.FC<Props> = ({ daysOfWork }: Props) => {
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
    maintainAspectRatio: false,
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
        label: '2021出勤日数',
        backgroundColor: `${Color.blue}`,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: daysOfWork,
      },
    ],
  }
  return <Bar data={data} options={options as FIXME} height={50} />
}

export default Graph
