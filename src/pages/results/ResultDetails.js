import { useLoaderData, useParams } from "react-router-dom"

export default function ResultDetails() {

  const { id } = useParams ()
  const books = useLoaderData()
  
  
  return (
    <div>
      <p>Hello</p>

    </div>
  )
}

export const resultDetailsLoader = async ({params}) => {
  const { id } = params

  const res = await fetch('http://localhost:3000/results/' + id)
  console.log(res)

  return res
}
