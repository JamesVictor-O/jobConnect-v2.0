
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
import HomePage from "./page/homePage"

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route>
          <Route path="/" element={<Header />}/>
           <Route path="/homepage" element={<HomePage/>}></Route>
        </Route>
      )
      
)

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
