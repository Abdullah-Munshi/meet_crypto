import React, { Fragment } from "react";

const Statistics = ({ total, text, styles }) => {
  const lines = text.split("%break%");
  const classes = `border border-[#1D1A2D] rounded-10 px-1 py-[14.5px] flex items-center transition duration-200 ${styles}`;
  return (
    <div className={classes}>
      <p className="text-3xl font-ibm-plex-sans leading-tight text-primary font-bold px-[18px]">
        <strong>{total}</strong>
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

export default Statistics;
