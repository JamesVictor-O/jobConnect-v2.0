
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
import { SignupPage } from "./page/signUp/signupPage"
import { RootPage } from "./RootPage"
import { JobGivers } from "./page/jobGiversBoard/jobGiversBoard"
import Login from "./page/login/login"
import UserProfile from "./page/userprofile/userProfile"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path="/" element={<RootPage/>}>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/jobgivers"element={<JobGivers/>}/>
            <Route path="/jobseekers" element={<JobSeekers/>}/>
          </Route>
        )
        
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
