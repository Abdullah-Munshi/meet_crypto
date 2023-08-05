import React, { Fragment } from "react";
import { SVGLighting } from "../Utility";

const StatisticsAds = ({ total, price, text, styles, highlight }) => {
  const lines = text.split("%break%");
  const classes = `relative border border-[#1D1A2D] rounded-10 px-1 py-[14.5px] flex items-center transition duration-200 ${styles}`;
  return (
    <div className={classes}>
      {highlight && (
        <span className="absolute end-2 -top-4">
          <SVGLighting width="42" height="42" stroke="#F8C571" />
        </span>
      )}
      <p className="text-3xl font-ibm-plex-sans leading-tight text-primary font-bold px-[18px]">
        <strong>
          {total}
          {price && <span className="text-xs ml-1">{price}</span>}
        </strong>
      </p>
      <p className="text-xs_next font-medium font-ibm-plex-sans leading-tight text-[#AEAEC5] px-[18px] border-s border-[#585569]">
        {lines.map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
      </p>
    </div>
  );
};

export default StatisticsAds;
