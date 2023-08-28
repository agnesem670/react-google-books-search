import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home, { homeAction } from './pages/Home'
import About from './pages/About'
import Contact, { contactAction } from './pages/Contact'
import NotFound from './pages/NotFound'
import TableWithResults from './pages/results/TableWithResults'
import ResultDetails, { resultDetailsLoader } from './pages/results/ResultDetails'

//layouts
import RootLayout from './layouts/RootLayout'
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
      <Route path="contact" element={<Contact />} action={contactAction} />
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
