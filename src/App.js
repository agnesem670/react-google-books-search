import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import SearchByTitle from './pages/searchby/SearchByTitle'
import SearchByAuthor from './pages/searchby/SearchByAuthor'
import SearchByCategory from './pages/searchby/SearchByCategory'
import APIKeyHelp from './pages/help/ApiKeyHelp'
import Contact from './pages/help/Contact'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import SearchByLayout from './layouts/SearchByLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element = {<Home />}/>
      <Route path="about" element = {<About />}/>

      <Route path="searchby" element={<SearchByLayout/>}>
        <Route path="bytitle"  element= {<SearchByTitle/>}/>
        <Route path="byauthor" element= {<SearchByAuthor/>}/>
        <Route path="bycategory" element={<SearchByCategory/>}/>
      </Route>

      <Route path="help" element={<HelpLayout/>}>
        <Route path="apikeyhelp" element={<APIKeyHelp/>} />
        <Route path="contact" element={<Contact/>}/>
      </Route>
      
    </Route>
  )
)
function App() {
  return (

    <RouterProvider router={router} />

  );
}

export default App;
