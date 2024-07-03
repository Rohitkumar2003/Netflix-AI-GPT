import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidataionData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [erorMessage, seterorMessage] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // Validate tbe form data 
    const message = checkValidataionData(
      email.current.value, password.current.value);
    seterorMessage(message);

    if (message) return;
    // Sign in / sign up logic here 
    if (!isSignInForm) {
      // Sign- Up logic here
      createUserWithEmailAndPassword(auth,
        email.current.value,
        password.current.value
      )

        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocKtTL6PDGBg36Irw_SWs-qQKXbNf2d80x7Z1VnV7YSKCjvf14z-=s288-c-no"
          }).then(() => {

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );

            navigate("/Browse")
          }).catch((error) => {
            seterorMessage(error.message);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterorMessage(errorCode + "-" + errorMessage)
        });


    } else {
      // sign-in logic here
      signInWithEmailAndPassword(auth,
        email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("sign in: ", user);
          navigate("/Browse")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div >
      <Header />
      <div className="absolute ">
        <img className=""

          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_medium.jpg"
          alt="netflix-bg-banner" />
      </div>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text text-white bg-opacity-90"
      >
        <h1 className="font-bold text-xl py-4"
        >{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input type="input"
          ref={name}
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-900"
        />}
        <input type="text"
          ref={email}
          placeholder="E-mail Address"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <input type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-900"
        />

        <p className="text-red-500 font-bold text-lg py-2">{erorMessage}</p>
        <button className=" p-2 my-4 bg-red-700 w-full rounded-md"
          onClick={handleButtonClick}>
          {isSignInForm ?
            "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ?
            "New to Netflix ? Sign Up Now" : "Already register ? Sign In Now"}
        </p>
      </form> 
    </div>
  )
}

export default Login;