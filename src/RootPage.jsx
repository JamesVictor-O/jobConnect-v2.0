import Header from "./components/header"
import { Outlet } from "react-router-dom"
export const RootPage = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main> 
        </div>
    )
}