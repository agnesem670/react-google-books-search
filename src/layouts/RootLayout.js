import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h3>Search books with Google API</h3>
          <NavLink to="/react/" >Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>

      </header>
      <main>
        <Outlet />
        
      </main>
    </div>
  )
}

