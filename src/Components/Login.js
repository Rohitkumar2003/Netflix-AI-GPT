import { useState } from "react";
import Header from "./Header";

 const Login =()=> {

  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = ()=> {
    setSignInForm(!isSignInForm);
  }

    return (
        <div >
            <Header/>
           <div className="absolute ">
           <img className=""

            src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg"
            alt="netflix-bg-banner" />
           </div>

           <form
           className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text text-white bg-opacity-90"
           >
            <h1 className="font-bold text-xl py-4"
            >{isSignInForm ? "Sign In": "Sign Up"}</h1>

           {!isSignInForm && <input type="input" 
            placeholder="Full Name" 
            className="p-2 my-4 w-full bg-gray-900"
            />}
            <input type="text"
              placeholder="E-mail Address"
            className="p-2 my-4 w-full bg-gray-900"
            />
            <input type="password" 
            placeholder="Password" 
            className="p-2 my-4 w-full bg-gray-900"
            />
            
           <button className=" p-2 my-4 bg-red-700 w-full rounded-md">
           {isSignInForm ? 
            "Sign In": "Sign Up"}
            </button>
            <p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm ? 
            "New to Netflix ? Sign Up Now": "Already register ? Sign In Now"}
               </p>
           </form>
        </div>
    )
}
export default Login;