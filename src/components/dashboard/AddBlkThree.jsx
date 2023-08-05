import React from "react";
import { Button, SVGClock, SVGLighting } from "../Utility";
const AddBlkThree = ({ bg }) => {
  return (
    <div
      className={`${bg} rounded-10 p-4 md:p-6 shadow-[0_4px_4px_0px_rgb(0,0,0,0.15)] sm:grid grid-cols-[70px_auto_200px] space-y-4 sm:space-y-0 gap-5 items-center`}
    >
      <div className="text-center space-y-2">
        <div className="text-white text-base font-ibm-plex-sans font-bold">
          75%
        </div>
        <div className="bg-[#A98585] rounded-2xl w-full h-[9px] overflow-hidden">
          <span className="bg-[#F8C571] w-10/12 h-full block"></span>
        </div>
      </div>
      <div>
        <h5 className="text-lg font-ibm-plex-sans text-white leading-tight mb-1 font-bold">
          A while back I needed to count the letters less.
        </h5>
        <p className="text-sm md:text-base font-ibm-plex-sans text-white leading-snug 2xl:leading-normal">
          Description of the task placeholder here
        </p>
      </div>
      <div className="flex items-center justify-end space-x-3">
        <button className="w-[35px] h-[39px] flex items-center justify-center rounded-[5px] bg-[#B6D274]">
          <SVGLighting width="24" height="24" stroke="#33363F" />
        </button>
        <button className="w-[35px] h-[39px] flex items-center justify-center rounded-[5px] bg-[#9E92FF]">
          <SVGClock width="24" height="24" stroke="#33363F" />
        </button>

        <Button
          type="button"
          className="px-5 bg-[#363549] hover:bg-[#392B2B] transition duration-200 rounded-[5px] h-[39px] text-white font-ibm-plex-sans font-bold text-[15px]"
        >
          Earn $5
        </Button>
      </div>
    </div>
  );
};

export default AddBlkThree;
