import React from "react";

const Step = ({ image, title, text }) => {
  return (
    <div className="grid grid-cols-[54px_auto] gap-4 items-center">
      <img src={image} alt="step-img" />
      <div>
        <h4 className="text-2xl text-white font-ibm-plex-sans font-bold mb-0">
          {title}
        </h4>
        <p className="text-lg text-one_d4 m-0">{text}</p>
      </div>
    </div>
  );
};

export default Step;
