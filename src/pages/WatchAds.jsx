import React from "react";
import { AddValue, TitleBase } from "../components/Utility";
import TotalEstimate from "../components/dashboard/Statistics";
import PromoBanner from "../components/dashboard/PromoBanner";
import AddBlkOne from "../components/dashboard/AddBlkOne";
import AddBlkTwo from "../components/dashboard/AddBlkTwo";
import AddBlkThree from "../components/dashboard/AddBlkThree";

const WatchAds = () => {
  return (
    <div className="space-y-10">
      <div className="-mr-6">
        <div className="grid grid-cols-4 gap-6">
          <PromoBanner />
          <PromoBanner />
          <PromoBanner />
          <PromoBanner />
        </div>
      </div>
      <div>
        <div className="mb-6">
          <TitleBase>Dashboard</TitleBase>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6">
          <TotalEstimate
            total="$10"
            text="Ad Credits %break% Balance"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <TotalEstimate
            type={true}
            total="$500"
            text="Earnings %break% Balance"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <TotalEstimate
            type={true}
            total="52"
            text="Referrals %break% Referred"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <TotalEstimate
            type={true}
            total="$10"
            text="Total WON %break% in Games"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
        </div>
      </div>
      <div>
        <div className="mb-6 flex flex-wrap items-center">
          <TitleBase>Earning Ways</TitleBase>
          <span className="w-[1px] h-6 bg-[#475A55] inline-block mx-4"></span>
          <AddValue value="0.01" />
        </div>
        <div className="space-y-7 lg:space-y-0 lg:grid grid-cols-2 lg:gap-5 2xl:gap-6">
          <AddBlkOne />
          <AddBlkOne />
        </div>
      </div>
      <div>
        <div className="mb-6 flex flex-wrap items-center">
          <TitleBase>Standard ads</TitleBase>
          <span className="w-[1px] h-6 bg-[#475A55] inline-block mx-4"></span>
          <AddValue value="0.01" />
        </div>
        <div className="space-y-7 lg:space-y-0 lg:grid grid-cols-2 lg:gap-5 2xl:gap-6">
          <AddBlkTwo />
          <AddBlkTwo />
        </div>
      </div>
      <div>
        <div className="mb-6 flex flex-wrap items-center">
          <TitleBase>Standard ads</TitleBase>
          <span className="w-[1px] h-6 bg-[#475A55] inline-block mx-4"></span>
          <AddValue value="0.01" />
        </div>
        <div className="space-y-7 lg:space-y-0 lg:grid grid-cols-2 lg:gap-5 2xl:gap-6">
          <AddBlkThree />
          <AddBlkThree />
        </div>
      </div>
    </div>
  );
};

export default WatchAds;
