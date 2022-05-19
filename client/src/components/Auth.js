import React, { useState } from "react";
import { AiFillLock } from "react-icons/ai";
import AuthInput from "./AuthInput";

const Auth = () => {
  const [formValues, setFormValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

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

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="w-[400px] mx-auto bg-gray-300 rounded-lg p-4 shadow-lg">
        <div className="bg-red-500 flex mx-auto justify-center rounded-full h-12 w-12 items-center transition-transform duration-1000 ease-linear animate-slideup">
          <AiFillLock size={25} />
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
              </>
            )}
            <AuthInput
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              value={formValues.email}
              handleChange={handleChange}
            />
            <AuthInput
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              placeholder="Example: abc123"
              value={formValues.password}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <AuthInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="abc123"
                value={formValues.confirmPassword}
                handleChange={handleChange}
              />
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-white h-12 w-full rounded-md transition-all hover:bg-blue-500 duration-300 ease-in-out mb-2"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <button
            type="button"
            className="bg-blue-400 text-white h-12 w-full rounded-md transition-all hover:bg-blue-500 hover:text-white duration-300 ease-in-out mb-4"
            onClick={clear}
          >
            Clear
          </button>
          <div className="flex justify-end items-center w-full">
            <button onClick={switchMode} type="button">
              {isSignup
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
