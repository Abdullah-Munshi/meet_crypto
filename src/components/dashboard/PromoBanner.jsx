import React from "react";
const PromoBanner = ({ imgUrl }) => {
  return (
    <div className="slide_item mr-4 md:mr-6">
      <img
        src={imgUrl}
        alt="promo"
        className="rounded-10 shadow-[0_3px_10px_0_rgb(0,0,0,0.10)] w-full max-w-full"
      />
    </div>
  );
};

export default PromoBanner;
