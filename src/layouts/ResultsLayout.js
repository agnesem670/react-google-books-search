import { NavLink, Outlet } from 'react-router-dom'

export default function ResultsLayout() {
  return (
    <div className='results-layout'>
        {/* <nav>
            <NavLink>Results</NavLink>
            <NavLink>ResultsDetails</NavLink>
        </nav> */}
        <Outlet/>
    </div>
  )
}
