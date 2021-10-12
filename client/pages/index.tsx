import { Graph } from '../components/Atoms/Graph'
interface props { }

const options = {
  legend: {
    display: false, // label 보이기 여부
  },
  scales: {
    yAxes: [{
      ticks: { 
        min: 0, // y축 스케일에 대한 최소값 설정
        stepSize: 2, // y축 그리드 한 칸당 수치
      }
    }]
  },
  // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
  // true : 크기가 알아서 결정됨.
  // maintainAspectRatio: false 
}

const data = {
  // 각 막대별 라벨
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 2.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 2,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4ad3d3',
      pointBackgroundColor: '#000',
      pointBorderWidth: 20,
      pointHoverRadius: 50,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      data: [65, 59, 80, 81, 56, 55, 40],
    }
  ]
};

export const Index: React.FC<props> = ({
}) => {
  return (
    <>
      <Graph data={data} options={options}/>
    </>
  )
}
export default Index