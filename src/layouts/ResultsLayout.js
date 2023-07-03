import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
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
