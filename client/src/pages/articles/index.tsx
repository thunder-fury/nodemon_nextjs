import Link from 'next/link'
export const Articles: React.FC = (props) => {
  const { datas }: any = props
  return(
    <>
      <h2>Articles</h2>
      {datas.map((item: any) => {
        return(
          <div key={item.id}>
            <Link href={`/articles/${item.id}`}>
              <a>{item.title}</a>
            </Link>
            
          </div>

        )
      })}
    </>
  )
}

export const getServerSideProps = async () => {
  const endpoint = `http://localhost:3030/api/articles`
  const res = await fetch(endpoint, {
    method: `GET`,
    headers: {
      'Content-Type': 'application/json'
  },
  })
  const datas = await res.json()

  return {
    props: {
      datas
    }
  }
}


export default Articles