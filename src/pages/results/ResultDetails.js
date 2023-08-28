import { useLoaderData, useParams } from "react-router-dom"
import Breadcrumb from '../../components/Breadcrumb'

export default function ResultDetails() {

  const { id } = useParams ()
  const books = useLoaderData()
  
  
  return (
    <div>
      < Breadcrumb/>
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
