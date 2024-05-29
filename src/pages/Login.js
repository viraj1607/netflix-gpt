import React, { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInFormToggle = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/89671a35-e5d0-4ed9-a177-82b41f741640/CA-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
      </div>
      <form className="bg-black absolute p-8 w-3/12 rounded-md my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h2 className="text-white text-3xl font-bold ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 my-4 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full p-4 my-4 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 rounded-md"
        />
        <button className="bg-red-700 w-full p-2 my-6 text-white font-bold rounded-md">
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
