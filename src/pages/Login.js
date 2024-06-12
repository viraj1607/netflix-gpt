import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch=useDispatch()

  const signInFormToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const errMsg = validateData(email.current.value, password.current.value);
    setErrorMsg(errMsg);
    if (errMsg) return;
    
    // console.log(name.current.value)
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + ":" + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message)
              // console.log(error);
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + ":" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/89671a35-e5d0-4ed9-a177-82b41f741640/CA-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute p-8 w-3/12 rounded-md my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h2 className="text-white text-3xl font-bold ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Your Name"
            className="w-full p-4 my-4 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-4 my-4 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 rounded-md"
        />
        <p className="text-red-500 font-semibold"> {errorMsg}</p>
        <button
          onClick={handleSubmit}
          className="bg-red-700 w-full p-2 my-6 text-white font-bold rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white cursor-pointer text-center"
          onClick={signInFormToggle}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Here"
            : "Already Registered? Sign In Here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
