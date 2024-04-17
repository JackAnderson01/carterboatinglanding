import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/export";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
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

      <div className="flex gap-2 justify-start items-center">
        <button
          name="get-the-app"
          className="bg-[#0089FB] shadow-sm w-36 h-12 rounded-full flex items-center justify-center text-white text-md font-medium"
        >
          Get the App
        </button>

        <button onClick={() => setOpenNav(true)} className="flex lg:hidden">
          <CiMenuFries className="text-2xl text-white" />
        </button>
      </div>

      <div
        className={`bg-transparent lg-hidden w-full h-screen z-[1000] fixed top-0 right-0 ${
          openNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
        onClick={() => setOpenNav(!openNav)}
      >
        <div className="bg-white h-auto w-48 absolute top-20 rounded-2xl right-4 float-end p-4  shadow-2xl">
          <ul className="flex lg:hidden flex-col gap-4 items-start justify-center">
            <li className="text-sm tracking-wider font-medium text-black active">
              <button
                onClick={() => {
                  handleClick("home");
                }}
              >
                Home
              </button>
            </li>
            <li className="text-sm tracking-wider font-medium text-black active">
              <button
                onClick={() => {
                  handleClick("features");
                }}
              >
                Features
              </button>
            </li>
            <li className="text-sm tracking-wider font-medium text-black active">
              <button
                onClick={() => {
                  handleClick("how-it-works");
                }}
              >
                How it works?
              </button>
            </li>
            <li className="text-sm tracking-wider font-medium text-black active">
              <button
                onClick={() => {
                  handleClick("about-us");
                }}
              >
                About us
              </button>
            </li>
            <li className="text-sm tracking-wider font-medium text-black active">
              <button
                onClick={() => {
                  handleClick("contact-us");
                }}
              >
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
