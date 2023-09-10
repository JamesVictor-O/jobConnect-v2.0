
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

import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.action"

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
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/login" element={props.currentUser ? <Navigate to="/jobgivers" replace/> : <Login/>}/>
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
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = (state) => ({
  currentUser:state.user.currentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
