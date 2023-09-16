import { 
    GrNext,
    GrLinkNext
} from "react-icons/gr"
import { FiChevronDown } from "react-icons/fi"
import Calender from "../calendar/calender"
import Note from "../note/note"
const DashBord = () => {
    return (
        <div className=" h-screen flex flex-row">
            {/* information display section */}
            <div className="border bg-white px-6 h-[100%] w-[100%]">
                <div className="flex flex-col  border-b py-4 border-black" >
                    <h2 className="font-bold text-[1.2rem]">Welcome, James👏</h2>
                    <p className="text-[.8rem]">You have 10 hours left to submit your test task for senior frontend developer</p>
                </div>

                <div className=" mt-6">
                    <div className="flex flex-row pb-3">
                        <span className="font-bold">Your activity in the last past 7 days</span>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="border border-black p-2">
                            <h2 className="font-bold text-[16px]">8</h2>
                            <span>Active jobs in pipeline</span>
                       </div>
                        <div className="border border-black p-2">
                            <h2 className="font-bold text-[16px]">3/35</h2>
                            <span>Application accepted</span>
                       </div>
                        <div className="border border-black p-2">
                            <h2 className="font-bold text-[16px]">41</h2>
                            <span>Profile views</span>
                       </div>
                        <div className="border border-black p-2">
                            <h2 className="font-bold text-[16px]">4</h2>
                            <span>Jobs proposed</span>
                       </div>
                    </div>
                </div>

                {/* Anousments */}

                <div className="border bg-blue-50 flex flex-row justify-between p-3 mt-12">
                    <div>
                        <p className="mb-2">Hey! You have a <a href="#">job offer!</a> 😘</p>
                        <span className="font-bold my-2">Frontend Developer <em>at</em> Slack</span>
                        <div className="mt-4">
                            <button className="bg-blue-400 p-2 text-white rounded-lg">Accept the offer</button>
                            <button className="bg-white p-2 text-black border ml-4 rounded-lg">Send message</button>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center  h-[40px] cursor-pointer">
                        <span>Details </span>
                        <GrNext/>
                    </div>

                </div>
                <div className="border p-3 mt-12 bg-gray-200">
                    <h3 className="mb-3">You have <span className="text-blue-600">3 new job proposals</span></h3>
                    <p className="mb-2">Don't hesitate to get in touch with recruters to discuss new oppurtunities</p>
                    <div className="flex justify-between flex-row mt-2">
                        <button className="bg-white p-2 text-black border text-[12px] rounded-lg w-[9%] flex items-center justify-between">
                            See details
                            <GrLinkNext/>
                        </button>
                    </div>
                </div>


            </div>

            {/* other sections  */}

            <div className="ml-2 p- w-[20%]">
                <div>
                    <Calender/>
               </div>
               <div>
                  <Note/>
               </div>
            </div>
        </div>
    )
}

export default DashBord;