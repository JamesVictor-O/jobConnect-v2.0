import { Outlet } from "react-router-dom";
import SideBar from "../../components/sideBar/sideBar";
const HomePage = () => {
    return (
        <div className="flex flex-row ">
            <SideBar />
            <main className="w-[95%] bg-red-50 p-4">
                <Outlet/>
            </main>
        </div>
    )
}
export default HomePage;