import Header from "./components/header"
import { Outlet } from "react-router-dom"
export const RootPage = ({isLogedIn,setIsLogedIn}) => {
    return (
        <div>
            <Header isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
            <main>
                <Outlet/>
            </main> 
        </div>
    )
}