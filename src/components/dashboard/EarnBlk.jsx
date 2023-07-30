import React from "react";

const EarnBlk = ({ image, title, text }) => {
  return (
    <div className="relative rounded-10 overflow-hidden basis-[calc(25%_-_103px)]">
      <img src={image} alt="earn-img" className="rounded-10 w-full" />
      <div className="absolute start-0 end-0 bottom-0 bg-gradient-four p-4 text-center">
        <h5 className="text-base_next text-white font-ibm-plex-sans font-bold mb-1 leading-tight uppercase">
          {title}
        </h5>
        <p className="text-white text-xs_next font-ibm-plex-sans">{text}</p>
      </div>
    </div>
  );
};

export default EarnBlk;
