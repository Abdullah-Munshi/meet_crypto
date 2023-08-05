import React from "react";
import { FeatureBlk, SVGOk, SVGTimes } from "../Utility";

const CompareFeature = () => {
  return (
    <div className="bg-gradient-eleven shadow-[0px_3px_10px_0px_rgb(0,0,0,0.10)] rounded-10 relative after:bg-primary after:w-[60px] md:after:w-[160px] after:h-[calc(100%+16px)] md:after:h-[calc(100%+32px)] after:absolute after:right-[74px] md:after:right-[190px] 2xl:after:right-[204px] after:top-1/2 after:-translate-y-1/2 after:z-0 after:rounded-10 after:border after:border-[#1D1A2D] after:shadow[0px_0px_22px_0px_rgba(0,0,0,0.20)] space-y-5 py-3 md:px-2 md:py-4 2xl:px-5 2xl:py-7">
      <div className="compare-table grid grid-cols-[auto_70px_70px] md:grid-cols-[auto_160px_160px] items-center md:gap-6 relative z-10 text-center">
        <div className="">
          <h4 className="text-white pl-3 text-left text-base md:text-lg font-ibm-plex-sans font-bold">
            Compare PRO with FREE
          </h4>
        </div>
        <div className="text-center">
          <h4 className="text-[#181527] text-base md:text-lg font-ibm-plex-sans font-bold">
            PRO
          </h4>
        </div>
        <div className="text-center">
          <h4 className="text-white text-base md:text-lg font-ibm-plex-sans font-bold">
            FREE
          </h4>
        </div>
      </div>
      <div className="compare-table grid grid-cols-[auto_70px_70px] md:grid-cols-[auto_160px_160px] items-center md:gap-6 relative z-10 text-center">
        <div>
          <FeatureBlk
            title="Earnings Multiplier"
            text="Base earning multiplier you will earn when you watch an ad."
          />
        </div>
        <div className="pro-field">x2</div>
        <div className="free-field">x1</div>
      </div>
      <div className="compare-table grid grid-cols-[auto_70px_70px] md:grid-cols-[auto_160px_160px] items-center md:gap-6 relative z-10 text-center">
        <div>
          <FeatureBlk
            title="Offerwalls Multiplier"
            text="Base earning multiplier you will earn when you complete offerwall tasks"
          />
        </div>
        <div className="pro-field">x2</div>
        <div className="free-field">x1</div>
      </div>
      <div className="compare-table grid grid-cols-[auto_70px_70px] md:grid-cols-[auto_160px_160px] items-center md:gap-6 relative z-10 text-center">
        <div>
          <FeatureBlk
            title="Join PRO only Contests"
            text="Able to join contests with PRO only badge
            in Play2Win Arena"
          />
        </div>
        <div className="pro-field">
          <SVGOk width="30" height="30" stroke="#33363F" />
        </div>
        <div className="free-field">
          <SVGTimes width="28" height="28" stroke="#8C859D" />
        </div>
      </div>
      <div className="compare-table grid grid-cols-[auto_70px_70px] md:grid-cols-[auto_160px_160px] items-center md:gap-6 relative z-10 text-center">
        <div>
          <FeatureBlk
            title="Level 1 Referral Commission"
            text="Commission from your Level 1 referrals when they purchase/renew PRO membership"
          />
        </div>
        <div className="pro-field">$10</div>
        <div className="free-field">
          {" "}
          <SVGTimes width="28" height="28" stroke="#8C859D" />
        </div>
      </div>
      <div className="compare-table grid grid-cols-[auto_70px_70px] md:grid-cols-[auto_160px_160px] items-center md:gap-6 relative z-10 text-center">
        <div>
          <FeatureBlk
            title="Level 2 Referral Commission"
            text="Commission from your Level 2 referrals when they purchase/renew PRO membership"
          />
        </div>
        <div className="pro-field">$5</div>
        <div className="free-field">
          {" "}
          <SVGTimes width="28" height="28" stroke="#8C859D" />
        </div>
      </div>
      <div className="compare-table grid grid-cols-[auto_70px_70px] md:grid-cols-[auto_160px_160px] items-center md:gap-6 relative z-10 text-center">
        <div>
          <FeatureBlk
            title="Priority Alerts"
            text="Get notified when new ads, offerwalls are introduced into the platform"
          />
        </div>
        <div className="pro-field">
          <SVGOk width="30" height="30" stroke="#33363F" />
        </div>
        <div className="free-field">
          <SVGTimes width="28" height="28" stroke="#8C859D" />
        </div>
      </div>
    </div>
  );
};

export default CompareFeature;
