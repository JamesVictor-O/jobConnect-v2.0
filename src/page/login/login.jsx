import { Inputform } from "../../components/InputForm/inputForm"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { CustomButton } from "../../components/CustomButtons/customButton"

const Login = () => {

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const [logins, setLogins] = useState({
        email: "",
        password:""
    })

    const HandleChange = (event) => {
        console.log(event)
    }
    return (
        <div className=" flex  flex-col items-center h-screen w-[100%] pt-6 pb-7">
            <h2 className="text-2xl text-black font-bold ">Login</h2>
            <span className=" text-black">Connect with jobs and job seekers around the world on JobConnect!</span>
            <form className="md:mt-8 mt-5 flex flex-col md:w-[40%] w-[100%] " onSubmit={(e) => e.preventDefault()}>

            <Inputform
                    name="email"
                    type="email"
                    value={logins.email}
                    label="Emali"
                    required
            />
                <Inputform
                    name="Password"
                    type="password"
                    value={logins.password}
                    label="password"
                    handleChange={HandleChange}
                    required
                />
            
                <CustomButton>LOGIN</CustomButton>
            </form>
            <p>Haven't registered yet? <NavLink to="/signup" className="text-red-800 pointer">Sign Up Now!</NavLink></p>
        </div>
    )
}

export default Login