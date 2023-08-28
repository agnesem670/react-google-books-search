import { useEffect, useState } from "react";
import { Form, redirect } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MissKeyLayout from "../layouts/MissKeyLayout";

export let SEARCH = ''
export let MISSKEY = {1: 0,}

export default function Home() {
  const [search, setSearch] = useState('')
  const [counter, setCounter] = useState(0)
  const [isApikey, setisApikey] = useState(false)
  const [inptvalue, setInputvalue] = useState()
  const [misskey, setMisskey] = useState()
  const [wrongnumber, setWrongnumber] = useState()

  // ---------------------------------------------
  useEffect(() => {
    if (misskey === 3) {
      setisApikey(true)
      MISSKEY = {2: 4,
        3: 9}
        console.log(MISSKEY)
    }
  }, [misskey])

  // ---------------------------------------------

  const errNumber = () => {
    return <>Wrong number, try one more time.</>
  }

  const handleMisskey = () => {
    if (inptvalue !== 3) {
      setWrongnumber(errNumber())
    } else {
      setMisskey(inptvalue)
    }
  }

  const getMissKeyForm = () => {
    return (
      <>
      < MissKeyLayout />
      <div className='miss-key'>
        <h3>Complete API Key</h3>
        {/* <p>This webpage works only with complete API Key. The source code is availabe on github, api key has to be completed by user.</p> */}
        <p><b>How many balloons do you see in the picture? Enter a number.</b></p>
        <Form method="get" action="/">
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

  return (
    <> {isApikey ? searchForm : missKeyForm} </>
  )
}

export const homeAction = async ({ request }) => {
  const data = await request.formData()
  SEARCH = data.get('search')

  return redirect("results")
}
