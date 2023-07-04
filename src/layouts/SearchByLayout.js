import { NavLink, Outlet } from "react-router-dom"

export default function SearchByLayout() {
  return (
    <div className='search-by-layout'>
        <nav>
            <NavLink to="bytitle">By Title</NavLink>
            <NavLink to="byauthor">By Author</NavLink>
            <NavLink to="bycategory">By Category</NavLink>
        </nav>

        <Outlet />

    </div>
  )
}
