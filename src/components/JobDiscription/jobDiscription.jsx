import { CustomButton } from "../CustomButton/customButton"
export default function JobDiscription() {
    return (
        <div className="border border-black m-3 p-2 pr-4 rounded-2xl">
                <div className="flex justify-between items-center ">
                    <h3 className="text-Dark font-bold text-[20px]">Graphic Designer</h3>
                    <div >1 hour ago</div>
                </div>
                <div className="w-[100%] md:w-[70%] my-3 ">
                    <div className="flex justify-between my-2">
                        <h3 className="text-[20] text-Dark font-bold">Mos</h3>
                        <p className="text-[14px] md:text-[20] font-bold">$ 50k-70k USD</p>
                        <div className="text-[14px] md:text-[20] font-bold">United State</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="border rounded-2xl p-1 md:p-2 bg-blue-300 text-[.8rem]">Full Time</div>
                        <div className="border rounded-2xl p-1 md:p-2 bg-orange-300 text-[.8rem]" >Design</div>
                        <div className="border rounded-2xl p-1 md:p-2 bg-gray-300 text-[.8rem]">2 years of experience</div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="hidden md:block">repost</p>
                <CustomButton>
                    Apply now
                    </CustomButton>
                </div>
        </div>
    )
}