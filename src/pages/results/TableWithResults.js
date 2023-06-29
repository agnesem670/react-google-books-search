import { useSearchParams } from "react-router-dom"
import { SEARCH } from "../Home"
import { useEffect, useState } from "react"

export default function TableWithResults() {
  const [search, setSearch]= useState(SEARCH)
  const [searchParams, setSearchParams]= useSearchParams()
  
  useEffect(() => {
    setSearchParams({filter:search})
  }, [search])

  return (
    <>
      <div>Table</div>
      <p>{search}</p>
    </>
  )
}