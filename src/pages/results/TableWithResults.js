import { SEARCH } from "../Home"

export default function TableWithResults() {
  const search = SEARCH
  console.log(search)

  return (
    <>
      <div>Table</div>
      <p>{search}</p>
    </>
  )
}



