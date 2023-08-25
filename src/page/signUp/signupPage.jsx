import { useState } from "react"
import { Inputform } from "../../components/InputForm/inputForm"  

export function SignupPage() {
    let [myDetails, setmyDetails] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        status:""
        
    }) 

  const HandleChange = (event) => {
      const { name, value } = event.target;
      
      setmyDetails({ ...myDetails, [name]:value})
      console.log(myDetails)
    }
    return (
        <div className=" flex md:justify-center flex-col items-center h-screen pt-3 bg-blue-400 md:w-[50%] w-[100%]">
            <h2 className="text-2xl text-white font-bold ">Registration</h2>
            <span className=" text-white">Create an account with us today</span>
            <form className="md:mt-10 mt-5 flex justify-center items-center flex-col w-[100%]">

                <Inputform name="FirstName" details={myDetails} value={myDetails.FirstName} handleChange={HandleChange} />
                <Inputform name="LastName" details={myDetails} value={myDetails.LastName} handleChange={HandleChange}/> 
                <Inputform name="Email" details={myDetails} value={myDetails.email} handleChange={HandleChange}/>
                <Inputform name="Password" details={myDetails} value={myDetails.password} handleChange={HandleChange}/>
                <Inputform name="ConfirmPassword" details={myDetails} value={myDetails.confirmPassword} handleChange={HandleChange} />
                {/* <div className=" w-[90%]">
                    <label className="">Testing:</label>
                    <input name="testing" value={myDetails.firstName} onChange={HandleChange} required className="border-black border p-1 ml-1 rounded-lg md:w-[90%] mb-4 w-[100%] outline-none" />
                </div> */}
                <div className="md:w-[90%] w-[100%] p-1 ml-7">
                    <label>Status:</label>
                    <select name="status" className="border-black border p-1 ml-1 rounded-lg md:w-[90%] w-[90%] outline-none">
                        <option>Jobseeker</option>
                        <option>recruiter</option>
                    </select>
                </div>
            </form>
         </div>
    )
}
     
