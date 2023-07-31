import React from "react";
import questionMarkIcon from "../../assets/questionMarkIcon.svg";
const UserHelp = ({ content }) => {
  return (
    <div className="grid grid-cols-[90px_auto] gap-2 w-[350px] mx-auto py-12 cursor-pointer">
      <div>
        <img src={questionMarkIcon} alt="Questionmark" className="w-full" />
      </div>
      <div>
        <h4 className="text-white font-ibm-plex-sans font-bold text-2xl mb-[2px]">
          Need help?
        </h4>
        <p className="text-[#DFDDD4] text-base  sm:text-base_next font-ibm-plex-sans font-normal">
          {content}
        </p>
      </div>
    </div>
  );
};

export default UserHelp;
