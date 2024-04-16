import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-transparent flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <ul className="hidden lg:flex gap-12 items-center justify-center">
        <li className="text-sm tracking-wider font-medium text-white active">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <Link to="/">Features</Link>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <Link to="/">How it works?</Link>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <Link to="/">About us</Link>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <Link to="/">Contact us</Link>
        </li>
      </ul>

      <button
        name="get-the-app"
        className="bg-[#0089FB] shadow-sm w-36 h-12 rounded-full flex items-center justify-center text-white text-md font-medium"
      >
        Get the App
      </button>
    </div>
  );
};

export default Navbar;
