import { useActionData } from 'react-router-dom'

export default function TableWithResults(props) {
  const  inputedsearch = useActionData(props)
  console.log(props.search)
  return (
    <div>Table</div>
  )
}




