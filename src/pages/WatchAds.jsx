import React from "react";
import {
  AddValue,
  SVGClock,
  SVGFilter,
  SVGInfo,
  SVGSort,
  TitleBase,
} from "../components/Utility";
import StatisticsAds from "../components/dashboard/StatisticsAds";
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
        <div className="mb-6 flex flex-wrap items-center">
          <TitleBase>Watch Ads</TitleBase>
          <span className="w-[1px] h-6 bg-[#475A55] inline-block mx-4"></span>
          <div className="text-white text-base font-ibm-plex-sans font-normal flex items-center space-x-1 md:space-x-2 min-w-[200px]">
            <span className="inline-block mr-2">
              <SVGClock stroke="#fff" />
            </span>
            Surfer resets in
            <strong className="text-primary font-bold inline-block">
              19 hours
            </strong>
            <span className="inline-block translate-y-[1px]">
              <SVGInfo fill="#646979" stroke="#646979" width="18" height="18" />
            </span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6">
          <StatisticsAds
            total="12"
            price="$0.3"
            text="Available ads %break% to watch"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <StatisticsAds
            total="5"
            price="$0.001"
            text="Ads watched %break% today"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <StatisticsAds
            total="52"
            price="$12"
            text="Total ads %break% watched"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <StatisticsAds
            highlight={true}
            total="10"
            text="Ads you can %break% watch today"
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
        <div className="mb-6 flex flex-wrap items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-wrap items-center">
            <TitleBase>Standard ads</TitleBase>
            <span className="w-[1px] h-6 bg-[#475A55] inline-block mx-4"></span>
            <AddValue value="0.01" />
          </div>

          <div className="flex items-center basis-full sm:basis-0 justify-end space-x-4">
            <button>
              <SVGFilter width="24" height="24" fill="#fff" />
            </button>
            <button>
              <SVGSort width="24" height="24" stroke="#fff" />
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <AddBlkThree bg="bg-gradient-seven" />
          <AddBlkThree bg="bg-gradient-ten" />
        </div>
      </div>
    </div>
  );
};

export default WatchAds;
