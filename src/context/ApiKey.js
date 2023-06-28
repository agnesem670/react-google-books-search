import React, { useState } from 'react'


export default function ApiKey() {
  const [key, setKey] = useState('')
  const [keyFromButtonClick, setKeyFromButtonClick] = useState('')
  
  const handleKey = () => {
    setKeyFromButtonClick(search)
    console.log(search)
  }

  return (
    <div>
      <h3>What book you are looking for?</h3>
      <input type='text' value={key} onChange={e => setKey(e.target.value)} />
      <button type='button' onClick={handleKey}>Search</button>
    </div>
  )
}
