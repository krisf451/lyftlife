import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const AuthInput = ({
  half,
  name,
  value,
  type,
  autoFocus,
  label,
  handleChange,
  placeholder,
}) => {
  return (
    <div className={`relative col-span-12 ${half ? "sm:col-span-6" : ""}`}>
      <label htmlFor={label} className="block text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className="h-12 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
        autoFocus={autoFocus}
        required
      />
      {name === "password" || name === "confirmPassword" ? (
        <div className="absolute z-10 bottom-0 left-[18.5rem] top-10">
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
