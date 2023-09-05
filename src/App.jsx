
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
import { useState, useEffect } from "react"
import { auth } from "./firebase/firebase.util"
import HomePage from "./page/Homepage/homePage"
import JobSeekers from "./page/Jobseeker/jobSeeker"
import { SignupPage } from "./page/signUp/signupPage"
import { RootPage } from "./RootPage"
import { JobGivers } from "./page/jobGiversBoard/jobGiversBoard"
import Login from "./page/login/login"
import UserProfile from "./page/userprofile/userProfile"
import { createUserDataBase } from "./firebase/firebase.util"
import { onSnapshot } from "firebase/firestore"



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLogedIn,setIsLogedIn]=useState(false)

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        let userRef =await createUserDataBase(user)
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        setIsLogedIn(!isLogedIn)
      }else {
        setCurrentUser(user)
      } 
    })

    console.log(currentUser)
  }, [])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />}>
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
