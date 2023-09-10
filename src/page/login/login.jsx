import { Inputform } from "../../components/InputForm/inputForm"
import { NavLink} from "react-router-dom"
import { useState } from "react"
import { CustomButton } from "../../components/CustomButtons/customButton"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase.util"

const Login = () => {
    const [logins, setLogins] = useState({
        email: "",
        password:""
    })

    const handleChange = (event) => {
        const{name,value}=event.target
        setLogins({ ...logins, [name]:value})
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const {email,password}=logins
        try {
            signInWithEmailAndPassword(auth, email, password) 
            setLogins({
                email: "",
                password:""
            }) 
            alert("login successfully")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className=" flex  flex-col items-center h-screen w-[100%] pt-6 pb-7">
            <h2 className="text-2xl text-black font-bold ">Login</h2>
            <span className=" text-black">Connect with jobs and job seekers around the world on JobConnect!</span>
            <form className="md:mt-8 mt-5 flex flex-col md:w-[40%] w-[100%]" onSubmit={handleSubmit}>

            <Inputform
                    name="email"
                    type="email"
                    value={logins.email}
                    handleChange={handleChange}
                    label="Emali"
                    required
            />
                <Inputform
                    name="password"
                    type="password"
                    value={logins.password}
                    label="password"
                    handleChange={handleChange}
                    required
                />
            
                <CustomButton type="submit">LOGIN</CustomButton>
            </form>
            <p>Haven't registered yet? <NavLink to="/signup" className="text-red-800 pointer">Sign Up Now!</NavLink></p>
        </div>
    )
}

export default Login