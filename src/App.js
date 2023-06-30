import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home, { homeAction } from './pages/Home'
import About from './pages/About'
import SearchByTitle from './pages/searchby/SearchByTitle'
import SearchByAuthor from './pages/searchby/SearchByAuthor'
import SearchByCategory from './pages/searchby/SearchByCategory'
import APIKeyHelp from './pages/help/ApiKeyHelp'
import Contact, { contactAction } from './pages/help/Contact'
import NotFound from './pages/NotFound'
import TableWithResults from './pages/results/TableWithResults'
import ResultDetails, { resultDetailsLoader } from './pages/results/ResultDetails'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import SearchByLayout from './layouts/SearchByLayout'
import ResultsLayout from './layouts/ResultsLayout'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} action={homeAction} />
      <Route path="results" element={<ResultsLayout />}>
        <Route index element={<TableWithResults />}/>
        <Route path=":id" element={<ResultDetails />} loader={resultDetailsLoader}/>
      </Route>

      <Route path="about" element={<About />} />


      <Route path="searchby" element={<SearchByLayout />}>
        <Route path="bytitle" element={<SearchByTitle />} />
        <Route path="byauthor" element={<SearchByAuthor />} />
        <Route path="bycategory" element={<SearchByCategory />} />
      </Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="apikeyhelp" element={<APIKeyHelp />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="*" element={<NotFound />} />

    </Route>
  )
)
function App() {

  return (
    <div className='App'>
      <div className='content'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
