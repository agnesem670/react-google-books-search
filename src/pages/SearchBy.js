import { NavLink, Outlet } from "react-router-dom"
import { Form, redirect } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

export default function SearchBy() {
  return (
    <div className='search-by-container'>
      <MainLayout />
      <div className="adv-search">
        <Form method="post" action="searchby">
          <label>
            <input
              type="text"
              /* value={search} */
              name="search"
              /* onChange={e => setSearch(e.target.value)} */
            >
            </input>
            <span>Set title</span>
          </label>
          {/*         <nav>
          <NavLink to="bytitle" className='btn' placeholder='Title'>By Title</NavLink>
        </nav> */}
          <label>
            <input
              type="text"
              /* value={search} */
              name="search"
              /* onChange={e => setSearch(e.target.value)} */
              /* required */>
            </input>
            <span>Set author</span>
          </label>
          {/*         <nav>
          <NavLink to="byauthor" className='btn' placeholder='Author'>By Author</NavLink>
        </nav> */}
          <label>
            <input
              type="text"
              /* value={search} */
              name="search"
              /* onChange={e => setSearch(e.target.value)} */
              /* required */>
            </input>
            <span>Set cathegory</span>
          </label>
          <button>Search</button>
          {/*  <nav>
          <NavLink to="bycategory" className='btn' placeholder='Category'>By Category</NavLink>
        </nav> */}
        </Form>
      </div>
      <Outlet />

    </div>
  )
}
