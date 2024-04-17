import React, { useState } from "react";

const HowItWorksCard = ({ title, icon, white_icon, description }) => {
  const [image, setImage] = useState(icon);

  return (
    <div
      onMouseOver={() => {
        setImage(white_icon);
      }}
      onMouseOut={() => {
        setImage(icon);
      }}
      className="w-full md:w-[297px] h-[257px] group hover:bg-[#0089FB] flex flex-col gap-2 p-5 justify-start items-start bg-white rounded-3xl shadow-md"
    >
      <span className="w-[70px] h-[70px] rounded-full flex items-center justify-center group-hover:bg-[#FFFFFF]/[0.15] bg-[#0089FB]/[0.05]">
        <img src={image} alt="icon" />
      </span>
      <span className="text-[19px] text-[#0089FB] group-hover:text-white font-semibold">
        {title}
      </span>
      <span className="text-[14px] font-normal text-[#8B8B8B] group-hover:text-gray-100">
        {description}
      </span>
    </div>
  );
};

export default HowItWorksCard;
