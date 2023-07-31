import React from "react";

const WelcomeTitle = ({ title, text }) => {
  return (
    <div className="text-center max-w-[480px] mx-auto">
      <h1 className="text-3xl sm:text-5xl text-white mb-3 font-viga font-normal">
        {title}
      </h1>
      <p className="text-base sm:text-lg text-[#DFDDD4] max-w-[390px] mx-auto font-ibm-plex-sans font-normal">
        {text}
      </p>
    </div>
  );
};

export default WelcomeTitle;
