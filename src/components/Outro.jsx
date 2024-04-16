import React from "react";
import { Apple, Google, OutroMockup } from "../assets/export";

const Outro = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-6 lg:mt-32 items-center relative">
      <span className="w-full h-28 absolute bottom-0 left-0 bg-[#F8F8F8]"></span>
      <div className="w-[98%] lg:w-[70%] px-6 lg:px-12 h-56 rounded-2xl z-[1000] flex justify-start items-end bg-[#1A5091]">
        <div className="hidden lg:block lg:w-1/4">
          <img src={OutroMockup} alt="outro-mockup" />
        </div>
        <div className="w-full lg:w-3/4 lg:px-10 flex flex-col gap-4 h-full justify-center items-start">
          <h1 className="text-[28px] font-bold text-white leading-tight ">
            Ready to Embark on Your Next Boating Adventure?
          </h1>
          <p className="text-sm font-normal text-white/[0.80]">
            Download our app today!
          </p>
          <div className="w-auto flex gap-4 justify-start items-center">
            <img src={Apple} alt="apple-download-btn" />
            <img src={Google} alt="google-download-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outro;
