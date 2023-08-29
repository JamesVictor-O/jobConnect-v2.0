import { CustomButton } from "../../components/CustomButtons/customButton"
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
        <div className=" flex  flex-col items-center h-screen  bg-blue-400  w-[100%] pt-6 pb-7">
            <h2 className="text-2xl text-white font-bold ">Registration</h2>
            <span className=" text-white">Create an account with us today</span>
            <form className="md:mt-8 mt-5 flex flex-col md:w-[40%] w-[100%] ">

                <Inputform name="FirstName" details={myDetails} value={myDetails.FirstName} handleChange={HandleChange} />
                <Inputform name="LastName" details={myDetails} value={myDetails.LastName} handleChange={HandleChange}/> 
                <Inputform name="Email" details={myDetails} value={myDetails.email} handleChange={HandleChange}/>
                <Inputform name="Password" details={myDetails} value={myDetails.password} handleChange={HandleChange}/>
                <Inputform name="ConfirmPassword" details={myDetails} value={myDetails.confirmPassword} handleChange={HandleChange} />
                <input type="file" id="file"/>
                <label htmlFor="file">upload</label>
                <div className="md:w-[100%] w-[100%] p-1 ">
                    <label>Status:</label>
                    <select name="status" className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[90%] outline-none">
                        <option>Jobseeker</option>
                        <option>recruiter</option>
                    </select>
                </div>
                 
                <div className="flex ml-2">
                    <input type="checkbox" />
                    <p className="ml-2 my-2">I accept all <a href="#">terms & conditions</a></p>
                </div>

                <CustomButton>SIGN UP</CustomButton>
            </form>
            <p>Already Have An Account ? <a href="#" className="text-red-800 pointer">Login Now</a></p>
         </div>
    )
}
     
