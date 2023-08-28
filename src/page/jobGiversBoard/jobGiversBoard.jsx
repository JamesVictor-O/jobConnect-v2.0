import { CustomButton } from "../../components/CustomButton/customButton"
import JobDiscription from "../../components/JobDiscription/jobDiscription"
import TopSearches from "../../components/TopSearches/topSearches"
export const JobGivers = () => (
    <div className="jobgivers">
        <div className="flex flex-col md:flex-row p-5 border-2 border-b-gray-200 ">
                <div className="w-[100%] md:w-[70%]">
                    <h2 className="text-[24px] font-bold text-Dark">Find, Connect And Hire Great Talents To Work With.</h2>
                    <p className="pt-1 text-[15px]">FInd talents,post jobs connect with potential employee.</p>
                    <div className="mt-8">
                        <input className="border outline-none border-black rounded-lg p-1 w-[100%] md:w-[49%] mb-3 md:mb-0" type="search" placeholder="job title or keywords"/>
                        <input className="border outline-none border-black rounded-lg p-1 w-[100%] md:w-[49%] md:ml-4 mb-3 md:mb-0" type="text" placeholder="Location"/>
                    </div>
                </div>
                <div className=" md:w-[25%] flex items-end ml-3">
                    <CustomButton>
                        Search
                    </CustomButton>
                </div>
        </div>
        <div className="flex flex-row justify-between">
                <div className=" w-[100%] md:w-[70%]">
                    <div className="flex justify-between items-center mr-6 pl-5 mt-3">
                        <div>1000 Jobs Open</div>
                        <div className="flex border items-center rounded-xl p-1 border-black">
                            <p className="hidden md:block">sorting</p>
                            <span className="bg-white">⬆⬇</span>
                        </div> 
                    </div>
                    <div>
                        <JobDiscription/>
                        <JobDiscription/>
                        <JobDiscription/>
                        <JobDiscription/>
                        <JobDiscription/>
                    </div>
                </div>
                <div className="mr-6 mt-6 hidden md:block">
                   <TopSearches/>
                </div>
        </div>

    </div>
)
