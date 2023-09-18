
import {
  NavLink,
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createRoutesFromElements,
  Navigate
} from "react-router-dom"
import "./index.css"

// pages
import Header from "./components/header"
import HomePage from "./page/Homepage/homePage"
import LandingPage from "./page/LandingPage/landingPage"
import JobSeekers from "./page/Jobseeker/jobSeeker"
import { SignupPage } from "./page/signUp/signupPage"
import { RootPage } from "./RootPage"
import { JobGivers } from "./page/jobGiversBoard/jobGiversBoard"
import Login from "./page/login/login"
import UserProfile from "./page/userprofile/userProfile"
import DashBord from "./components/DashBoard/dashBord"

import SideBar from "./components/sideBar/sideBar"

// firebase services
import { createUserDataBase } from "./firebase/firebase.util"
import { onSnapshot } from "firebase/firestore"
import { auth } from "./firebase/firebase.util"

import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.action"
import { useState, useEffect } from "react"

function App(props) {
  
  
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        let userRef =await createUserDataBase(user)
        onSnapshot(userRef, (snapShot) => {
          props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        
      }else {
        props.setCurrentUser(user)
      } 
    })

    console.log(props.AppcurrentUser)
  }, [])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage/>}>
        <Route index element={<LandingPage/>} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={props.currentUser ? <Navigate to="/jobgivers" replace /> : <Login />} /> */}
        <Route path="homepage" element={<HomePage />}>
          <Route path="jobgivers"element={<JobGivers/>}/>
          <Route path="jobseekers" element={<JobSeekers />} />
          <Route path="dashboard" element={<DashBord/>}/>
        </Route>
      </Route>
        )
        
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = (state) => ({
  currentUser:state.user.currentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
