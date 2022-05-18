import React from "react";
import logo from "../images/lift2.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const user = null;
  return (
    <div className="w-full h-20 shadow-md flex items-center justify-between rounded-lg  mb-3">
      {/* logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="h-12 w-12 bg-white ml-4 transition-transform duration-500 transform hover:scale-125 ease-in-out mr-4"
        />
        <p className="text-2xl transition-transform duration-1000 transform hover:translate-x-5 ease-linear">
          LYFTLIFE
        </p>
      </Link>

      {/* links */}
      <div className="flex justify-between w-1/4">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* User Information */}
      {user ? (
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold text-xl">John Wick</h2>
          <img
            src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="test user"
            className="rounded-full h-12 w-12 object-cover"
          />
          <button
            type="button"
            className="bg-red-500 px-4 py-2 rounded-lg text-white cursor-pointer text-xl"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/auth">
          <button className="bg-green-400 px-4 py-2 rounded-lg text-white cursor-pointer text-xl">
            Sign In
          </button>
        </Link>
      )}
      <div className="mobile">
        <AiOutlineMenu size={30} className="mr-4 cursor-pointer" />
      </div>
      {/* mobile */}
    </div>
  );
};

export default Navbar;
