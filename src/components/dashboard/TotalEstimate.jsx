import React, { Fragment } from "react";

const TotalEstimate = ({ type, total, text }) => {
  const lines = text.split("%break%");
  if (type) {
    return (
      <div className="bg-[#232E38] border border-[#1D1A2D] rounded-10 px-1 py-[14.5px] flex items-center hover:bg-[#243D31] transition duration-200">
        <p className="text-3xl font-ibm-plex-sans leading-tight text-primary font-bold px-[18px]">
          <strong>{total}</strong>
        </p>
        <p
          className="text-xs_next font-medium font-ibm-plex-sans leading-tight text-[#AEAEC5] px-[18px] border-s border-[#585569]"
          style={{ whiteSpace: "pre-line" }}
        >
          {lines.map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </div>
    );
  } else {
    return (
      <div className="bg-[#232E38] border border-[#1D1A2D] rounded-10 px-1 py-[14.5px] flex items-center">
        <p className="text-3xl font-ibm-plex-sans leading-tight text-primary font-bold px-[18px]">
          <strong>{total}</strong>
        </p>
        <p
          className="text-xs_next font-medium font-ibm-plex-sans leading-tight text-[#AEAEC5] px-[18px] border-s border-[#585569]"
          style={{ whiteSpace: "pre-line" }}
        >
          {lines.map((line, index) => (
            <Fragment key={index}>
              {line}
              <br />
            </Fragment>
          ))}
        </p>
      </div>
    );
  }
};

export default TotalEstimate;
