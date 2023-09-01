import { useState } from "react"
import { CustomButton } from "../../components/CustomButtons/customButton"

const login = () => {

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')


    return (
        <div className=" flex  flex-col items-center h-screen  bg-blue-400  w-[100%] pt-6 pb-7">
            <h2 className="text-2xl text-white font-bold ">Login</h2>
            <span className=" text-white">Connect with jobs and job seekers around the world on JobConnect!</span>
            <form className="md:mt-8 mt-5 flex flex-col md:w-[40%] w-[100%] " onSubmit={(e) => e.preventDefault()}>

                <div className=" w-[100%]">
                    <label htmlFor='email' className="">Email:</label>
                    <input type='email' autoComplete='none' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none" />
                </div>

                <div className=" w-[100%]">
                    <label htmlFor='password' className="">Password:</label>
                    <input type='password' autoComplete='none' id='password' value={pw} onChange={(e) => setPw(e.target.value)} required className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none" />
                </div>

                <CustomButton>LOGIN</CustomButton>
            </form>
            <p>Haven't registered yet? <a href="#" className="text-red-800 pointer">Sign Up Now!</a></p>
        </div>
    )
}

export default login