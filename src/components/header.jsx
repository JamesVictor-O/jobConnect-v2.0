import { useState } from "react"
import {AiFillHome} from "react-icons/ai"
import { NavLink } from "react-router-dom";
import "../index.css"

function Header() {
    
    const [menuStatus, setMenuStatus] = useState(false)

    const menuToggle = (e) => {
        if (document.getElementById('navMenu').classList.contains('hidden')) {
            document.getElementById('navMenu').classList.remove('hidden')
            setMenuStatus(true)
        } else {
            document.getElementById('navMenu').classList.add('hidden')
            setMenuStatus(false)
        }
    }

    return (
        <div className="bg-primaryBlue text-white flex justify-between p-2 md:p-4 border-r item-center">
            <h2 className=" text-[16px] md:text-[20px]">Jobco<em className="text-orange-800  md:text-[23px]">NN</em>ect</h2>

            <div id='menuBtn' className="md:hidden z-50" onClick={(e) => menuToggle(e.target)}>
                <span className='text-3xl'>{menuStatus ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}</span>
            </div>

            <div id='navMenu' className="md:flex hidden flex-col pl-[20%] pt-[20%] md:pl-0 md:pt-0  z-10 md:flex-row w-[70%] md:w-[60%] bg-Dark md:bg-transparent md:justify-between top-0 right-0 h-screen md:h-auto md:static fixed " >
                <nav>
                    <ul className="inline-block md:flex mr-[px] ">
                        <div className="flex item-center justify-center p-2 border-b-white border-b">
                             <AiFillHome className=" text-Dark text-[20px]"/><NavLink to="/" className="text-Dark">HOME</NavLink>
                        </div>
                        <div className="flex item-center justify-center p-2 border-b-white border-b">
                             <AiFillHome className=" text-Dark text-[20px]"/><NavLink to="/jobgivers" className="text-Dark">COMPANIES</NavLink>
                        </div>
                    </ul>
                </nav>
                <div className="btn1">
                    <NavLink className="bg-Dark p-1 mr-2 rounded-lg" to="/signup">SIGN UP</NavLink>
                    <NavLink className="bg-Dark p-1 mr-2 rounded-lg" to="/login">LOG IN</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;