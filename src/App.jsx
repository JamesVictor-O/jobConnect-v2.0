
import {
  NavLink,
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom"
import "./index.css"
// pages
import Header from "./components/header"
import HomePage from "./page/Homepage/homePage"
import JobSeekers from "./page/Jobseeker/jobSeeker"
import topSearches from "./components/TopSearches/topSearches"


const router = createBrowserRouter(
  createRoutesFromElements(
        <Route>
          <Route path="/" element={<JobSeekers/>} />
      
        </Route>
      )
      
)

function App() {

  return (
    <div>
      <Header/>
      <div>
      <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
