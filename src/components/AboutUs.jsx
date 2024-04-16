import React from "react";
import { AboutUsMockup } from "../assets/export";

const AboutUs = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2 grid-rows-1 px-6 md:px-8 lg:px-28 py-6 lg:py-20">
      <img src={AboutUsMockup} alt="about-us-mockup" className="order-1 px-4" />
      <div className="h-full flex flex-col gap-4 justify-center items-start order-1">
        <h2 className="text-[45px] font-bold tracking-tight leading-tight">
          About Us
        </h2>

        <p className="text-md font-normal text-[#454545]">
          Welcome to Carter Boating, your premier destination for hassle-free
          boat rentals. At Carter Boating, we're passionate about connecting
          boat owners with enthusiasts looking for memorable water adventures.
          With our user-friendly platform, we've streamlined the process of
          renting and listing boats, making it convenient for both renters and
          listers to navigate.
          <br />
          <br /> Our mission is to provide a seamless and enjoyable experience
          for all our users, whether they're seeking an exhilarating day on the
          water or looking to earn extra income by sharing their boat.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
