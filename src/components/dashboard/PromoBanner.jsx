import React from "react";
import promoImage from "../../assets/promo.png";
const PromoBanner = () => {
  return (
    <div>
      <img
        src={promoImage}
        alt="promo"
        className="rounded-10 shadow-[0_3px_10px_0_rgb(0,0,0,0.10)] w-full max-w-full"
      />
    </div>
  );
};

export default PromoBanner;
