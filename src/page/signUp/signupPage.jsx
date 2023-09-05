
import { NavLink } from "react-router-dom"
import { CustomButton } from "../../components/CustomButtons/customButton" 
import { useState } from "react"
import { Inputform } from "../../components/InputForm/inputForm"  
import { auth } from "../../firebase/firebase.util"
import {createUserWithEmailAndPassword} from "firebase/auth";

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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = myDetails;

        if (password !== confirmPassword) return

        createUserWithEmailAndPassword(auth, email,password)
       console.log("okay")
        
    }
    return (
        <div className=" flex  flex-col items-center h-screen    w-[100%] pt-6 pb-7">
            <h2 className="text-2xl text-black font-bold ">Registration</h2>
            <span className=" text-black">Create an account with us today</span>
            <form className="md:mt-8 mt-5 flex flex-col md:w-[40%] w-[100%]" onSubmit={handleSubmit} >
                <Inputform
                    name="FirstName"
                    type="text"
                    details={myDetails}
                    value={myDetails.FirstName}
                    label="Firstname"
                    handleChange={HandleChange}
                    required
                />
                <Inputform
                    name="LastName"
                    type="test"
                    label="LastName"
                    details={myDetails}
                    value={myDetails.LastName}
                    handleChange={HandleChange}
                    required
                /> 
                <Inputform
                    name="email"
                    type="email"
                    label="Email"
                    details={myDetails}
                    value={myDetails.email}
                    handleChange={HandleChange}
                    required
                />
                <Inputform
                    name="password"
                    type="password"
                    label="password"
                    details={myDetails}
                    value={myDetails.password}
                    handleChange={HandleChange}
                    required 
                />
                <Inputform
                    name="confirmPassword"
                    type="password"
                    label="confirm Password"
                    details={myDetails}
                    value={myDetails.confirmPassword}
                    handleChange={HandleChange}
                    required
                />
                <div className="md:w-[100%] w-[100%] p-1 ">
                    <label>Status:</label>
                    <select name="status"
                        className="
                        border-black
                        border p-1 ml-1
                        rounded-lg
                        md:w-[100%]
                         w-[90%]
                         outline-none"
                    >
                        <option>Jobseeker</option>
                        <option>recruiter</option>
                    </select>
                </div>
                 
                <div className="flex ml-2">
                    <input type="checkbox" />
                    <p className="ml-2 my-2">I accept all <a href="#">terms & conditions</a></p>
                </div>
                {/* <button type="submit">
                    sign up
                </button> */}
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
            <p>Already Have An Account ?<NavLink to="/login" className="text-red-800 pointer">Login</NavLink></p>
         </div>
    )
}
     
