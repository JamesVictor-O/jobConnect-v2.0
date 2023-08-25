import { CustomButton } from "../CustomButton/customButton"
export default function TopSearches() {
    return (
        <div className="border border-black rounded-2xl  m-5 p-4">
            <h2 className="m-auto">Top Searches</h2>
                <div>
                    <div className="flex justify-between">
                        <div>Graphic Designer</div>
                        <div>50 jobs</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Web Developer</div>
                        <div>50 jobs</div>
                    </div >
                    <div className="flex justify-between">
                        <div>3D Designer</div>
                        <div>50 jobs</div>
                    </div >
                    <div className="flex justify-between">
                        <div>Softwear Developer</div>
                        <div>50 jobs</div>
                    </div>
                    <div className="flex justify-between">
                        <div>UI/Ux Designer</div>
                        <div>50 jobs</div>
                    </div>
               </div>
                <CustomButton>
                Sign up to find your dream job
                </CustomButton>
        </div>       
    )
}