import { useEffect } from 'react'
import { Graph } from '../components/Atoms/Graph'
import axios from 'axios'

export const Index: React.FC = () => {
  useEffect(() => {
    const gatData = async () => {
      const res = await axios.get(`/api/get_update_data`)
      console.log(res)
    }
    gatData()
  }, [])
  return <></>
}

// export const getStaticProps = async () => {
//   const res = await fetch(`/api/add_update`)
//   const getData = await res.json()
//   return {
//     props: {
//       getData
//     },
//     revalidate: 60
//   }
// }
export default Index
