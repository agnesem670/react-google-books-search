import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Help from './pages/Help'

//layouts
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element = {<Home />}/>
      <Route path="help" element = {<Help />}/>
    </Route>
  )
)
function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;
