const Article: React.FC = (props) => {
  const { data }:any = props
  console.log(data)
  return(
    <>
        <div>{data.title}</div>
        <div>{data.description}</div>
        <div>{data.created}</div>
        <div>{data.outor}</div>
    </>
  )
}

export const getServerSideProps = async ( context: any ) => {
  const id = context.params.id
  const endpoint = `http://localhost:3030/api/articles/${id}`
  const res = await fetch(endpoint, {
    method: `GET`,
    headers: {
      'Content-Type': 'application/json'
  },
  })
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}


export default Article