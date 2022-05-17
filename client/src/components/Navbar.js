import React from "react";
import logo from "../images/lift2.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
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
      <div className="mobile">
        <AiOutlineMenu size={30} className="mr-4 cursor-pointer" />
      </div>
      {/* mobile */}
    </div>
  );
};

export default Navbar;
