import React from "react";
import {
  Hands,
  HandsWhite,
  HeroMockup,
  HowItWorksMockup,
  List,
  ListWhite,
} from "../assets/export";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorks = () => {
  const arr = [
    {
      icon: Hands,
      white_icon: HandsWhite,
      title: "Renters:",
      description:
        "Learn how easy it is to find and book the perfect boat for your needs, from browsing listings to making secure payments.",
    },
    {
      icon: List,
      white_icon: ListWhite,
      title: "Listers:",
      description:
        "Discover how simple it is to list your boat on Carter Boating and start earning money by sharing your passion with others.",
    },
  ];
  return (
    <div
      id="how-it-works"
      className="w-full h-auto bg-[#F8F8F8] flex flex-col gap-12 justify-start items-center px-6 md:px-8 lg:px-20 xl:px-28 py-6 lg:py-20 "
    >
      <h2 className="text-[45px] font-bold tracking-tight leading-tight">
        How It Works?
      </h2>
      <div className="w-full h-auto grid grid-cols-1 gap-4 lg:gap-0 lg:grid-cols-2 grid-rows-1">
        <div className="flex gap-6 flex-col order-2 md:order-1 md:flex-row justify-center items-center">
          {arr?.map((card) => {
            return (
              <HowItWorksCard
                key={card?.title}
                title={card?.title}
                icon={card?.icon}
                white_icon={card?.white_icon}
                description={card?.description}
              />
            );
          })}
        </div>
        <img
          src={HowItWorksMockup}
          alt="how-it-works-mockup"
          className="order-1 lg:order-2"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
