import { useEffect, useState } from "react";
import { Form, redirect } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MissKeyLayout from "../layouts/MissKeyLayout";

export let SEARCH = ''
export let MISSAPIKEY = {1: 0,}
let ISAPIKEY = false

export default function Home() {
  const [search, setSearch] = useState('')
  const [counter, setCounter] = useState(0)
  const [inptvalue, setInputvalue] = useState()
  const [misskey, setMisskey] = useState()
  const [wrongnumber, setWrongnumber] = useState()

  // ---------------------------------------------
  const errNumber = () => {
    return <>Wrong number, try one more time.</>
  }

  const handleMisskey = () => {
    if (inptvalue !== 3) {
      setWrongnumber(errNumber())
    } else {
      setMisskey(inptvalue)
      ISAPIKEY = true
      MISSAPIKEY = {2: 4,
        3: 9}
    }
  }

  const getMissKeyForm = () => {
    return (
      <>
      < MissKeyLayout />
      <div className='miss-key'>
        <h3>Complete API Key</h3>
        <p><b>How many balloons do you see in the picture? Enter a number.</b></p>
        <Form method="get" action="/react/">
          <label>
            <input
              type="number"
              name="misskey"
              onChange={e => setInputvalue(parseInt(e.target.value))}
              required >
            </input>
          </label>
          <button onClick={handleMisskey}>Submit</button>
        </Form>
        <>{wrongnumber}</>
      </div>
      </>
    )
  }

  const missKeyForm = getMissKeyForm()

  // -----------------------------------------------
  const getSearchForm = () => {
    return (
      <>
      <MainLayout />
      <div className='main-search'>
        <h3>What book you are looking for?</h3>
        <Form method="post" action="/react/">
          <label>
            <input
              type="text"
              value={search}
              name="search"
              onChange={e => setSearch(e.target.value)}
              required>
            </input>
            <span>Title / Author</span>
          </label>
          <button>Search</button>
        </Form>
      </div >
      </>
    )
  }

  const searchForm = getSearchForm()

  // -------------------------------------------------
  useEffect(() => {
    let lenght = search.length
    if (lenght !== 0 && lenght % 2 === 0 && counter < 3) {
      setCounter(counter + 1)
    }
  }, [search])

  // ----------------------------------------------------
  useEffect(() => {
    const element = document.getElementById(`story${counter}`)
    element.className = 'story'
  }, [counter])

  // --------------------------------------------------------

  return (
    <> {ISAPIKEY ? searchForm : missKeyForm} </>
  )
}

export const homeAction = async ({ request }) => {
  const data = await request.formData()
  SEARCH = data.get('search')

  return redirect("results")
}
