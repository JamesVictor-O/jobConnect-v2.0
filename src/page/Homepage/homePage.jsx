import { Outlet } from "react-router-dom";
import SideBar from "../../components/sideBar/sideBar";
const HomePage = () => {
    return (
        <div className="flex flex-row ">
            <SideBar />
            <main className="md:w-[95%] w-[100%] bg-red-50 md:p-4">
                <Outlet/>
            </main>
        </div>
    )
}
export default HomePage;