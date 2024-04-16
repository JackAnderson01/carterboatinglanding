import React from "react";
import FeatureCard from "./FeatureCard";
import featuresArr from "../utils/features";

const Features = () => {
  return (
    <div
      id="features"
      className="w-full h-auto flex flex-col gap-12 justify-start items-start px-6 md:px-8 lg:px-28 pb-6 lg:py-20"
    >
      <div className="w-full flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between lg:items-end h-auto">
        <div className="w-auto flex flex-col justify-start items-start gap-2">
          <div className="w-auto flex gap-3 justify-center items-center">
            <span className="w-8 h-1 bg-[#0089FB]"></span>
            <span className="text-black text-md font-medium">
              Best Features:
            </span>
          </div>
          <h2 className="text-[30px] lg:text-[45px] font-bold tracking-tight leading-tight">
            <span className="text-[#0089FB]">Key Features</span> of <br />
            Carter Boating App!{" "}
          </h2>
        </div>
        <div className="w-full lg:w-1/3 flex gap-3 justify-start items-center">
          <span className="h-10 w-[2px] bg-[#0089FB]" />
          <span className="text-sm text-[#757474] font-normal">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took
          </span>
        </div>
      </div>
      <div className="w-full h-auto grid gap-5 grid-cols-2 lg:grid-cols-4 grid-rows-1">
        {featuresArr?.map((feature, key) => {
          return (
            <FeatureCard
              key={key}
              title={feature?.title}
              description={feature?.description}
              src={feature?.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
