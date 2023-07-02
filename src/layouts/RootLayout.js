import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h3>Search books with Google API</h3>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="searchby">Search by</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

