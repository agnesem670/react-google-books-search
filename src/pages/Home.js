import { Form, redirect } from "react-router-dom";

export default function Home() {
  
  return (
    <div className='main-search'>
      <h3>What book you are looking for?</h3>
      <Form method="post" action="/">
        <label>
          <input type="text" name="search" required></input>
        </label>
        <button>Search</button>
      </Form>
    </div>
  )
}

export const homeAction = async ({ request }) => {
  console.log(request)
  const data = await request.formData()
  const  inputedsearch = {
    search: data.get('search')
  }
  console.log(inputedsearch)
  
  return redirect ('results')
}
