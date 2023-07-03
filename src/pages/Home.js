import { useState, useEffect } from "react"
import { Form, redirect } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"



export default function Home() {
  const [search, setSearch] = useState('')
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    let lenght = search.length
    if (lenght !== 0 && lenght % 2 === 0 && counter<3) {
      setCounter(counter+1)
    }
  }, [search])

  useEffect(() => {
    const element = document.getElementById(`story${counter}`)
    element.className = 'story'
  }, [counter])

  return (
    <body>
      <div class='main-container'>
        <MainLayout />
        <div className='main-search '>
          {/* <p>If you're looking for books on a specific topic 
            or by a specific author, you are on the right page. It is a place, where you can say ...</p> */}
          <h3>What book you are looking for?</h3>
          <Form method="post" action="/">
            <label>
              <input
                type="text"
                value={search}
                name="search"
                onChange={e => setSearch(e.target.value)}
                required>
              </input>
              <span>...</span>
            </label>
            <button>Search</button>
          </Form>
        </div >
      </div>
    </body>
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