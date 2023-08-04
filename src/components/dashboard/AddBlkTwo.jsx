import React from "react";
import { AdTimeCredit, AddWatchSchedule } from "../Utility";
const AddBlkTwo = () => {
  return (
    <div>
      <div className="bg-gradient-eight rounded-10 p-4 md:p-6 shadow-[0_4px_4px_0px_rgb(0,0,0,0.15)] ">
        <h5 className="text-lg 2xl:text-xl font-ibm-plex-sans text-white leading-tight mb-4 md:mb-5 font-bold">
          A while back I needed to count the letters less.
        </h5>
        <AdTimeCredit time="30 sec" credit="$0.05" />
      </div>
      <div className="relative pb-[36px]">
        <div className="absolute top-0  left-5">
          <AddWatchSchedule text="Watch every 12 hours" />
        </div>
      </div>
    </div>
  );
};

export default AddBlkTwo;
