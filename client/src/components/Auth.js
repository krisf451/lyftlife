import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../redux/features/authSlice";
import { AiFillLock } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import AuthInput from "./AuthInput";
import { GoogleLogin } from "react-google-login";
import { asyncSignin, asyncSignup } from "../redux/features/authSlice";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(asyncSignup(formValues));
    } else {
      dispatch(asyncSignin(formValues));
    }
    if (!error) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const clear = () => {
    setFormValues(initialFormValues);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(auth({ result, token }));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = async (error) => {
    console.log("Google Sign In Was unsuccessful", error);
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="w-[400px] mx-auto bg-gray-300 rounded-lg p-4 shadow-lg">
        <div className="bg-red-500 flex mx-auto justify-center rounded-full h-12 w-12 items-center">
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
            className="bg-blue-400 text-white h-12 w-full rounded-md transition-all hover:bg-blue-500 hover:text-white duration-300 ease-in-out mb-2"
            onClick={clear}
          >
            Clear
          </button>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                type="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="relative bg-blue-400 text-white h-12 w-full rounded-md transition-all hover:bg-blue-500 duration-300 ease-in-out mb-2 cursor-pointer"
              >
                <FaGoogle
                  className="absolute left-[100px] bottom-[15px]"
                  size={20}
                />
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
          <div className="flex justify-end items-center w-full mt-2">
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
