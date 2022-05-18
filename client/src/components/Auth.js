import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import AuthInput from "./AuthInput";

const Auth = () => {
  const [formValues, setFormValues] = useState({});
  const isSignup = true;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const clear = () => {
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="w-[400px] mx-auto bg-gray-300 rounded-lg p-4 shadow-lg">
        <div className="flex flex-col justify-center items-center bg-red-500 rounded-full p-2">
          <AiFillLock size={25} className="" />
        </div>
        <h2 className="text-center">{isSignup ? "Sign Up" : "Sign In"}</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-2 p-4">
            {isSignup && (
              <>
                <AuthInput
                  type="text"
                  name="firstName"
                  label="First Name"
                  value={formValues.firstName}
                  placeholder="First Name"
                  handleChange={handleChange}
                  half
                  autoFocus
                />
                <AuthInput
                  type="text"
                  name="lastName"
                  label="Last Name"
                  value={formValues.lastName}
                  placeholder="Last Name"
                  handleChange={handleChange}
                  half
                />
                <AuthInput
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email"
                  value={formValues.email}
                  handleChange={handleChange}
                />
                <AuthInput
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Example: abc123"
                  value={formValues.password}
                  handleChange={handleChange}
                />
                <AuthInput
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="abc123"
                  value={formValues.confirmPassword}
                  handleChange={handleChange}
                />

                <button type="submit" className="bg-white h-12 w-24 rounded-md">
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-400 h-12 w-24 rounded-md ml-20"
                  onClick={clear}
                >
                  Clear
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
