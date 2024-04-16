import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      id="home"
      className="w-full h-20 bg-transparent flex justify-between items-center"
    >
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <ul className="hidden lg:flex gap-12 items-center justify-center">
        <li className="text-sm tracking-wider font-medium text-white active">
          <button
            onClick={() => {
              handleClick("home");
            }}
          >
            Home
          </button>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <button
            onClick={() => {
              handleClick("features");
            }}
          >
            Features
          </button>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <button
            onClick={() => {
              handleClick("how-it-works");
            }}
          >
            How it works?
          </button>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <button
            onClick={() => {
              handleClick("about-us");
            }}
          >
            About us
          </button>
        </li>
        <li className="text-sm tracking-wider font-medium text-white active">
          <button
            onClick={() => {
              handleClick("contact-us");
            }}
          >
            Contact us
          </button>
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
