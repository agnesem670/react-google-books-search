import { useState } from "react"
import { Form, redirect  } from "react-router-dom"


export default function Home() {
  const [search, setSearch] = useState('')
  
  return (
    <div className='main-search'>
      <Form method="post" action="/">
        <label>
          <input type="text" value={search} name="search" onChange={e => setSearch(e.target.value)} required></input>
        </label>
        <button>Search</button>
      </Form>
    </div>
  )
}

export let SEARCH = ''

export const homeAction = async ({ request }) => {
  console.log(request)
  const data = await request.formData()
  SEARCH = data.get('search')
  console.log(SEARCH)

  return redirect("results")

}




