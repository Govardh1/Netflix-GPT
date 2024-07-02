import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login=()=>{
    const [isSignInForm,setisSignInForm]=useState(true)
    const[errorMessage,setErrorMessage]=useState();
    const toggleSignInForm=()=>{
        setisSignInForm(!isSignInForm)
    }
    const email=useRef(null);
    const password=useRef(null);
    const Name=useRef(null)
    const handelButtonclic=()=>{
        
       
        // const msg=checkValidData(email.current.value,password.current.value,Name.current.value);
        const message=checkValidData(email.current.value,password.current.value,Name.current.value);
        setErrorMessage(message)
        // setErrorMessage(msg)
    }
return (
    <div className="">
    <Header/> 
    <div className="absolute">
       <img 
       src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="" /> 
    </div> 

    <form onSubmit={(e)=>e.preventDefault()} action="" className="absolute  w-3/12 p-12 my-44 mx-auto right-0 left-0 bg-black text-white content-center bg-opacity-80 ">
    <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>

    {!isSignInForm &&(<input ref={Name} className=" p-4 my-4 w-full bg-gray-700 rounded-lg"
        type="text" placeholder="Full Name" /> )}

     <input ref={email} className=" p-4 my-4 w-full bg-gray-700 rounded-lg"
      type="text" placeholder="Email or Phone number" /> 

     <input ref={password} className=" p-4 my-4 w-full bg-gray-700 rounded-lg"
     type="password" placeholder="password" /> 
     <p className="text-red-700 font-bold text-lg py-4">{errorMessage}</p>
     <button className="p-2 my-6 bg-red-700 w-full rounded-lg" onClick={handelButtonclic}>{isSignInForm?"Sign In":"Sign Up"}</button>     
     <p className="py-4 cursor-pointer my-4" onClick={toggleSignInForm}>
        
     {isSignInForm?"New to Netflix? Sign-Up now":"Already Registered?Sign-In Now"}</p>
    </form>     
    </div>
)
}

export default Login;