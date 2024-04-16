import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="w-full py-6 px-4" id="contact">
      <div className="mx-auto w-full md:w-[80%] xl:w-[70%] flex lg:flex-row flex-col justify-start items-start h-auto md:h-[653px]">
        <div className="w-full lg:w-1/2 h-full bg-[#373737] rounded-t-[22px] md:rounded-t-[0px] lg:rounded-s-[22px] px-8 lg:px-12 flex flex-col gap-y-10 py-8 md:pt-14">
          <div className="flex flex-col gap-y-6">
            <h2 className="text-white font-medium text-[32px] leading-[35px]">
              Let’s Connect and <br /> Create Together!
            </h2>
            <p className="text-sm font-normal text-white leading-[21px]">
              Feel free to contact us and we will get back to you as soon as
              possible. Fill this form or contact us directly.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium text-white leading-[24px]">
              Our Office
            </p>
            <div className="flex items-center gap-x-2">
              <MdLocationOn className="text-white w-5 h-5" />
              <span className="text-[#C6C6C6] text-sm font-normal leading-[21px]">
                1234 Elm Street Springfield, Anytown, USA
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium text-white">Email</p>
            <div className="flex items-center gap-x-2">
              <IoMail className="text-white w-5 h-5" />
              <span className="text-[#C6C6C6] text-sm font-normal leading-[21px]">
                hello@carterboating.com
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base font-medium text-white">Phone</p>
            <div className="flex items-center gap-x-2">
              <BiSolidPhoneCall className="text-white w-5 h-5" />
              <span className="text-[#C6C6C6] text-sm font-normal leading-[21px]">
                123-456-7890
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-[#F9FAFA] h-full rounded-b-[22px] md:rounded-b-[0px] lg:rounded-r-[22px] flex flex-col justify-center items-start gap-y-8 px-8 lg:px-14 py-6 md:py-0">
          <h2 className="text-black text-[32px] font-semibold leading-[48px]">
            Closer Than a Click Away
          </h2>
          <div className="w-full flex flex-col justify-center items-start gap-y-4">
            <div className="w-full">
              <label htmlFor="name" className="text-sm font-normal">
                Name
              </label>
              <input
                type="text"
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g John"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="text-md font-normal">
                Email
              </label>
              <input
                type="email"
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g john@gmail.com"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phonenumber" className="text-md font-normal">
                Phone Number
              </label>
              <input
                type="text"
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="e.g 0491 570 156"
              />
            </div>
            <div className="w-full">
              <label htmlFor="message" className="text-md font-normal">
                Message
              </label>
              <input
                type="text"
                className="w-full border-0 border-b border-[#D1D1D1] bg-transparent py-2 text-sm text-[#848484] outline-none font-normal"
                placeholder="Enter your message here"
              />
            </div>
          </div>
          <div>
            <button className="w-[170px] h-[60px] text-white bg-[#0089FB] text-base font-medium rounded-full leading-[24px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
