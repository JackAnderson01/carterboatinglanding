import React from "react";
import Navbar from "./Navbar";
import { HeroMockup } from "../assets/export";

const Hero = () => {
  return (
    <div className="w-full bg-image h-auto xl:h-auto px-6 md:px-8 lg:px-20 xl:px-28">
      <Navbar />
      <div className="w-full h-auto flex flex-col gap-4 my-10 justify-start items-start lg:items-center">
        <div className="w-auto flex gap-3 justify-center items-center">
          <span className="w-8 h-1 bg-[#0089FB]"></span>
          <span className="text-white text-md font-medium">
            Welcome to Carter Boating:
          </span>
        </div>

        <h1 className="text-[35px] lg:text-[65px] font-extrabold text-white leading-tight tracking-tight">
          Your Premier Boat
          <br /> Rental Destination
        </h1>

        <span className="text-sm lg:text-center font-normal text-[#E6E6E6] tracking-wider">
          Dive into the world of Carter Boating, where adventure meets
          <br />
          convenience. Discover how our platform revolutionizes
          <br /> the boat rental experience for both renters and listers.
          <br />
          Disclaimer: The phone number used to create an account on either the <br /> Lister or Renter interface can't be used on the other interface.

        </span>

        <img src={HeroMockup} alt="hero-mockup" />
      </div>
    </div>
  );
};

export default Hero;
