import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import AuthInput from "./AuthInput";

const Auth = () => {
  const [formValues, setFormValues] = useState({});
  const isSignup = true;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="bg-red-500">
        <div className="flex flex-col justify-center items-center w-full">
          <AiFillLock size={25} className="" />
          <h2>{isSignup ? "Sign Up" : "Sign In"}</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-2 p-4">
            {isSignup && (
              <>
                <AuthInput
                  type="text"
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                  autoFocus
                />
                <AuthInput
                  type="text"
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
                <AuthInput type="password" name="password" />
                <AuthInput type="text" />
                <AuthInput type="text" />
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
