import { ProfilePicture } from "../../components/ProfilePicture/profilePictue"
export default function UserProfile() {
    return (
        <div className="">
            <div className="pl-4 pt-7 border-b-black-300 border-2">
                
                <div className=" ">
                    <div className=" flex items-center">

                        <div className="w-[100px]">
                          <ProfilePicture />
                        </div>

                        <div className="ml-4">
                            <h2 className="font-bold text-[1.4rem]">JAMES VICTOR</h2>
                            <span className="mt-4 bg-blue-200 p-1 rounded-[15px]">
                                <button className="mt-3">
                                ➕ Add Bio
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="w-[18%] mt-7">
                       <ul className="flex relative justify-between">
                        <li className="border-b-black border-b-2 p-1"><a  className="" href="#">Profile</a></li>
                        <li className="border-b-black border-b-2 p-1"><a href="#">Setting</a></li>
                        <li className="border-b-black border-b-2 p-1"><a href="#">Support</a></li>
                       </ul>
                    </div>
                </div>

                <div className="editfeatures">
                       
                </div>
            </div>
        </div>
    )
}