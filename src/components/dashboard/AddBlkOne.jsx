import React from "react";
import adImage from "../../assets/ad-3.png";
import { AdTimeCredit, AddWatchSchedule } from "../Utility";
const AddBlkOne = () => {
  return (
    <div>
      <div className="bg-gradient-seven rounded-10 p-4 md:p-6 shadow-[0_4px_4px_0px_rgb(0,0,0,0.15)] ">
        <h5 className="text-lg 2xl:text-xl font-ibm-plex-sans text-white leading-tight mb-4 md:mb-5 font-bold">
          A while back I needed to count the letters less.
        </h5>
        <div className="grid grid-cols-[70px_auto] md:grid-cols-[100px_auto] gap-4 md:gap-5 2xl:6">
          <img src={adImage} alt="add" className="w-full rounded-10" />
          <div className="space-y-3 2xl:space-y-5">
            <p className="text-sm md:text-base 2xl:text-lg font-ibm-plex-sans text-white leading-snug 2xl:leading-normal">
              There were a couple of tools out there, but none of them met my
              standards and since I am a designer.
            </p>
            <AdTimeCredit time="30 sec" credit="$0.05" />
          </div>
        </div>
      </div>
      <div className="relative pb-[36px]">
        <div className="absolute top-0  left-5">
          <AddWatchSchedule text="Watch every 12 hours" />
        </div>
      </div>
    </div>
  );
};

export default AddBlkOne;
