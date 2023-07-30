import React from "react";

const ContestBlk = ({ image, title, text }) => {
  return (
    <div className="rounded-10 overflow-hidden basis-[calc(25%_-_103px)] bg-gradient-five">
      <div className="w-[120px] h-[120px] bg-[#1E2832] rounded-full mx-auto m-6 relative">
        <img
          src={image}
          alt="contest-img"
          className="rounded-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[150%]"
        />
      </div>
      <div className="p-4 text-center bg-gradient-six">
        <h5 className="text-base_next text-[#21222C] font-ibm-plex-sans font-bold mb-1 leading-tight">
          {title}
        </h5>
        <p className="text-[#21222C] text-xs_next font-ibm-plex-sans">{text}</p>
      </div>
    </div>
  );
};

export default ContestBlk;
