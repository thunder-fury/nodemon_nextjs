import { Bar } from 'react-chartjs-2'
import type * as Chart from 'chart.js'

interface Props {
  data: Chart.ChartData | ((canvas: HTMLCanvasElement) => Chart.ChartData)
  options: Chart.ChartOptions
}

export const Graph: React.FC<Props> = ({data, options}) => {
  return(
    <>
      <h2>Graph</h2>
      <Bar data={data} options={options} hidden height={100} />
    </>
  )
}

export default Graph