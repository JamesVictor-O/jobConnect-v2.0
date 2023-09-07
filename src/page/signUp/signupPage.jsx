import { CustomButton } from "../../components/CustomButtons/customButton"
import { useEffect, useState } from "react"
import { Inputform } from "../../components/InputForm/inputForm"

export function SignupPage() {
    // let [myDetails, setmyDetails] = useState({
    //     FirstName: "",
    //     LastName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     status: ""

    // })

    // const HandleChange = (event) => {
    //     const { name, value } = event.target;

    //     setmyDetails({ ...myDetails, [name]: value })
    //     console.log(myDetails)
    // }


    // REGEX for validations
    const NAME_REGEX = /^[a-zA-Z][a-zA-Z- ]{3,24}$/
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

    // useState variables for first name
    const [firstName, setFirstName] = useState('')
    const [validFirstName, setValidFirstName] = useState(false)
    const [firstNameFocus, setFirstNameFocus] = useState(false)

    // useState variables for last name
    const [lastName, setLastName] = useState('')
    const [validLastName, setValidLastName] = useState(false)
    const [lastNameFocus, setLastNameFocus] = useState(false)

    // useState variables email address
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    // useState variables for password
    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    // useState variables for confirm password
    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    // useState variables for Status dropdown
    const [selectedOption, setSelectedOption] = useState('')
    const [statusSelect, setStatusSelect] = useState(false)

    // useState variables for checkbox terms
    const [termsChecked, setTermsChecked] = useState(false)


    useEffect(() => {
        // REGEX test the first name
        const result = NAME_REGEX.test(firstName)
        // boolean result of valid first name
        setValidFirstName(result)
        // console.log(result)
    }, [firstName])

    useEffect(() => {
        // REGEX test the last name
        const result = NAME_REGEX.test(lastName)
        // boolean result of valid last name
        setValidLastName(result)
        // console.log(result)
    }, [lastName])

    useEffect(() => {
        // REGEX test email
        const result = EMAIL_REGEX.test(email)
        // boolean result of valid email
        setValidEmail(result)
        // console.log(result)
    }, [email])

    useEffect(() => {
        // REGEX test password
        const result = PWD_REGEX.test(pwd)
        // boolean result of valid password
        setValidPwd(result)

        // test to see if confirm password matches password
        const match = pwd === matchPwd
        // boolean result of valid password
        setValidMatch(match)
        // console.log('password: ' + result + ' match: ' + match)
    }, [pwd, matchPwd])

    useEffect(() => {
        if (selectedOption !== '') setStatusSelect(true)
        // console.log(statusSelect) //log doesn't change until 2nd value switch, but state changes with value (Tested)
    }, [selectedOption])

    useEffect(() => {
        // console.log(termsChecked)
    }, [termsChecked])


    const handleSubmit = (e) => {
        e.preventDefault()

        // Validation to prevent submitting empty entries
        const v1 = NAME_REGEX.test(firstName)
        const v2 = NAME_REGEX.test(lastName)
        const v3 = EMAIL_REGEX.test(email)
        const v4 = PWD_REGEX.test(pwd)
        if (!v1 || !v2 || !v3 || !v4) {
            return
        }

        console.log(firstName + ' ' + lastName + ' ' + email + ' ' + pwd + ' ' + selectedOption + ' ' + termsChecked) //take this off before production!!
    }


    return (
        <div className=" flex  flex-col items-center h-screen  bg-blue-400  w-[100%] pt-6 pb-7">
            <h2 className="text-2xl text-white font-bold ">Registration</h2>
            <span className=" text-white">Create an account with us today</span>
            <form className="md:mt-8 mt-5 flex flex-col md:w-[40%] w-[100%] " onSubmit={handleSubmit}>

                {/* <Inputform name="FirstName" details={myDetails} value={myDetails.FirstName} handleChange={HandleChange} /> */}
                {/* <Inputform name="LastName" details={myDetails} value={myDetails.LastName} handleChange={HandleChange} />
                <Inputform name="Email" details={myDetails} value={myDetails.email} handleChange={HandleChange} />
                <Inputform name="Password" details={myDetails} value={myDetails.password} handleChange={HandleChange} />
                <Inputform name="ConfirmPassword" details={myDetails} value={myDetails.confirmPassword} handleChange={HandleChange} /> */}

                {/* First Name Block Start */}
                <div className=" w-[100%]">
                    <label htmlFor='firstName' className="">First Name:</label>
                    <input
                        type='fname'
                        autoComplete='none'
                        id='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none"
                        onFocus={() => setFirstNameFocus(true)}
                        onBlur={() => setFirstNameFocus(false)}
                    />
                </div>

                <div className={firstNameFocus && firstName && !validFirstName ? "border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none bg-primaryOrange flex flex-row flex-wrap items-center justify-start" : "offscreen"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="ml-2">4 to 25 characters.<br />
                        Letters, spaces, and hyphens (-) allowed.</span>
                </div>

                {/* First Name Block End */}


                {/* Last Name Block Start */}
                <div className=" w-[100%]">
                    <label htmlFor='lastName' className="">Last Name:</label>
                    <input
                        type='lname'
                        autoComplete='none'
                        id='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none"
                        onFocus={() => setLastNameFocus(true)}
                        onBlur={() => setLastNameFocus(false)}
                    />
                </div>

                <div className={lastNameFocus && lastName && !validLastName ? "border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none bg-primaryOrange flex flex-row flex-wrap items-center justify-start" : "offscreen"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="ml-2">4 to 25 characters.<br />
                        Letters, spaces, and hyphens (-) allowed.</span>
                </div>

                {/* Last Name Block End */}


                {/* Email block start */}
                <div className=" w-[100%]">
                    <label htmlFor='email' className="">Email:</label>
                    <input
                        type='email'
                        autoComplete='none'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                </div>

                <div className={emailFocus && email && !validEmail ? "border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none bg-primaryOrange flex flex-row flex-wrap items-center justify-start" : "offscreen"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="ml-2">Email must be valid.<br />
                        ie. email@yourwebsite.com
                    </span>
                </div>
                {/* Email block end */}


                {/* Password block start */}
                <div className=" w-[100%]">
                    <label htmlFor='password' className="">Password:</label>
                    <input
                        type='password'
                        autoComplete='none'
                        id='password'
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                </div>

                <div className={pwdFocus && pwd && !validPwd ? "border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none bg-primaryOrange flex flex-row flex-wrap items-center justify-start" : "offscreen"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="ml-2">8 to 24 characters.<br />
                        Must include:<br />
                        &bull; Uppercase letter<br />
                        &bull; Lowercase letter<br />
                        &bull; Number <br />
                        &bull; Special Character.<br />
                        Allowed special characters:<br /><span>!</span> <span>@</span> <span>#</span> <span>$</span> <span>%</span>
                    </span>
                </div>

                {/* Password block end */}


                {/* Match password block start */}
                <div className=" w-[100%]">
                    <label htmlFor='confirmPassword' className="">Confirm Password:</label>
                    <input
                        type='password'
                        autoComplete='none'
                        id='confirmPassword'
                        value={matchPwd}
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                        className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                </div>

                <div className={matchFocus && !validMatch ? "border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none bg-primaryOrange flex flex-row flex-wrap items-center justify-start" : "offscreen"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="ml-2">Must match the first password entry.</span>
                </div>

                {/* Match password block end */}


                {/* Status dropdown select start */}
                <div className="md:w-[100%] w-[100%] p-1 ">
                    <label>Status:</label>
                    <select name="status" className="border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[90%] outline-none" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value='' disabled>Choose an option...</option>
                        <option value='Jobseeker'>Jobseeker</option>
                        <option value='Recruiter'>Recruiter</option>
                    </select>
                </div>

                <div className={validFirstName && validLastName && validEmail && pwd && matchPwd && validMatch && !statusSelect ? "border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none bg-primaryOrange flex flex-row flex-wrap items-center justify-start" : "offscreen"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="ml-2">Please choose your current job status.</span>
                </div>
                {/* Status dropdown select end */}

                {/* terms and conditions checkbox start */}
                <div className="flex ml-2">
                    <input type="checkbox" value={termsChecked} onChange={() => setTermsChecked(prevValue => !prevValue)} />
                    <p className="ml-2 my-2">I accept all <a href="#">terms & conditions</a></p>
                </div>

                <div className={validFirstName && validLastName && validEmail && pwd && matchPwd && validMatch && selectedOption && !termsChecked ? "border-black border p-1 ml-1 rounded-lg md:w-[100%] w-[95%] mb-3 outline-none bg-primaryOrange flex flex-row flex-wrap items-center justify-start" : "offscreen"}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className="ml-2">Please read and agree to terms & conditions.</span>
                </div>
                {/* terms and conditions checkbox end */}

                <div className="mt-3">
                    <button
                        disabled={!validFirstName || !validLastName || !validEmail || !pwd || !matchPwd || !validMatch || !statusSelect || !termsChecked ? true : false}
                        className={!validFirstName || !validLastName || !validEmail || !pwd || !matchPwd || !validMatch || !statusSelect || !termsChecked ? "bg-primaryOrange text-black p-2 rounded-lg  w-[100%]" : "bg-Dark text-white p-2 rounded-lg  w-[100%]"}
                    >
                        SIGN UP
                    </button>
                </div>
            </form>
            <p>Already Have An Account ? <a href="#" className="text-red-800 pointer">Login Now</a></p>
        </div>
    )
}

