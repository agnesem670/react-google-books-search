import { NavLink, Outlet } from "react-router-dom"

export default function SearchByLayout() {
  return (
    <div className='search-by-layout'>
        <nav>
            <NavLink to="bytitle">Search By Title</NavLink>
            <NavLink to="byauthor">Search By Author</NavLink>
            <NavLink to="bycategory">Search By Category</NavLink>
        </nav>

        <Outlet />

    </div>
  )
}
