import { NavLink } from "react-router-dom"

const SideBar = () => {
    return(
        <div className="flex flex-col pt-10 p-3 md:w-[12%] border-r-black border h-screen md:relative absolute w-[60%]  right-0 bg-white">
            <div className="h-[50%] flex justify-between flex-col">
                <NavLink to="dashboard" className="bg-red-200">
                    <div className="flex flex-row items-center p-1">
                        <img alt="home" src="../../../src/assets/homeIc.png"  className="w-[30px]"/>
                        <span className="ml-2 ">Home </span>
                    </div>
                </NavLink>
                <div className="flex flex-row items-center p-1">
                    <img alt="home" src="../../../src/assets/jobA.png"  className="w-[30px]"/>
                    <span className="ml-2 ">Application</span>
                </div>
                <div className="flex flex-row items-center p-1">
                    <img alt="home" src="../../../src/assets/jobP.png"  className="w-[30px]"/>
                    <span className="ml-2 ">Proposals</span>
                </div>
                <div className="flex flex-row items-center p-1">
                    <img alt="home" src="../../../src/assets/jobIn.png"  className="w-[30px]"/>
                    <span className="ml-2">Interview</span>
                </div>
                <div className="flex flex-row items-center p-1">
                    <img alt="home" src="../../../src/assets/jobOf.png" className="w-[30px]"/>
                    <span className="ml-2">Job Offer</span>
                </div>
            </div>
            <div className="absolute bottom-[10%]  flex flex-row items-center p-1">
                <img alt="home" src="../../../src/assets/Logout.png"  className="w-[30px]"/>
                <span className="ml-2 ">Log Out</span>
            </div>
        </div>
    )
}
export default SideBar