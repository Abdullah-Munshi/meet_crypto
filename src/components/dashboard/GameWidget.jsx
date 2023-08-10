import React from "react";
import { SVGLighting } from "../Utility";

const GameWidget = ({ entry, win, highlight }) => {
  return (
    <div className="grid grid-cols-2 rounded-10 relative slide_item mr-4 md:mr-6">
      {highlight && (
        <span className="absolute w-8 h-8 rounded-full bg-white -right-3 -top-3 flex items-center justify-center">
          <SVGLighting width="23" height="23" stroke="#232323" />
        </span>
      )}
      <div className="bg-[#343143] flex flex-col items-center justify-center p-4 min-h-[100px] rounded-tl-10 rounded-bl-10">
        <p className="text-sm font-ibm-plex-sans font-medium text-white mb-1">
          Entry Fee
        </p>
        <strong className="text-[27px] font-ibm-plex-sans font-bold leading-tight text-[#F8C571] block">
          ${entry}
        </strong>
      </div>
      <div className="bg-[#F8C571] flex flex-col items-center justify-center p-4 min-h-[100px] rounded-tr-10 rounded-br-10">
        <p className="text-sm font-ibm-plex-sans font-medium text-[#2C2C2C] mb-1">
          win
        </p>
        <strong className="text-[27px] font-ibm-plex-sans font-bold leading-tight text-[#2C2C2C] block">
          ${win}
        </strong>
      </div>
    </div>
  );
};

export default GameWidget;
