

function HomePage() {
    return (
        <div className="relative bg-[url('./src/assets/happy-young.png')]">
         <div className="text-Dark mt-48 max-w-lg ml-11">
           <h2 className="text-[30px]  font-semibold leading-normal">A Meeting Point Between Job Givers And Job Seekers</h2>
           <p>The Job market that serves as a bridge between you and your <span className="text-orange-700 text-lg">Aim and Targets</span>. Your dream job market is HERE</p>
           <div className="mt-5">
              <a  className="bg-primaryOrange p-2 text-sm border-2 rounded-3xl" href="#">Sign Up</a>
           </div>
           {/* <p>Has an account already? <a href="#">Login</a></p> */}
        </div>
        <div className="hidden md:flex w-1/2 absolute top-[-100%] right-0">
            <img src="./src/assets/happy-young.png" className="w-[61%]" alt=""/>
        </div>
        </div>
    )
}

export default HomePage;