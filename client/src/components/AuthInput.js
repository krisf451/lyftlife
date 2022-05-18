import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const AuthInput = ({ half, name, type, autoFocus, label, handleChange }) => {
  const toggleShowPassword = () => {
    if (type === "password") {
      type = "text";
    } else {
      type = "password";
    }
  };
  return (
    <div
      className={`relative col-span-12 ${
        half ? "sm:col-span-6" : "sm:col-span-12"
      }`}
    >
      <label
        htmlFor={label}
        className="block text-gray-700 text-sm font-bold mb-2"
      ></label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
        autoFocus={autoFocus}
        required
      />
      {name === "password" ? (
        <div
          className="absolute z-10 bottom-0 left-[23.5rem] top-5"
          onClick={toggleShowPassword}
        >
          {type === "password" ? (
            <MdVisibility size={25} />
          ) : (
            <MdVisibilityOff size={25} />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default AuthInput;
