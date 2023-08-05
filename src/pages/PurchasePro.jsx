import React from "react";
import PromoBanner from "../components/dashboard/PromoBanner";
import {
  TitleBase,
  Button,
  SVGLighting,
  FeatureBlk,
} from "../components/Utility";
import MembershipGraph from "../components/dashboard/MembershipGraph";
import directionIcon from "../assets/direction.svg";
import CompareFeature from "../components/dashboard/CompareFeature";

const PurchasePro = () => {
  return (
    <div className="space-y-10">
      <div className="-mr-6">
        <div className="grid grid-cols-4 gap-6">
          <PromoBanner />
          <PromoBanner />
          <PromoBanner />
          <PromoBanner />
        </div>
      </div>
      <div>
        <div className="mb-6">
          <TitleBase>Become a PRO</TitleBase>
        </div>
        <div className="grid lg:grid-cols-[350px_auto] gap-6 mb-3">
          <div className="space-y-6">
            <div className="bg-gradient-nine border border-[#1D1A2D] rounded-10 p-8 text-center">
              <h5 className="text-[#1B1735] font-ibm-plex-sans font-bold text-base_next leading-tight mb-1">
                PRO membership at just
              </h5>
              <div className="text-[#292848] text-5xl font-ibm-plex-sans font-bold leading-tight">
                $25
              </div>
              <span className="text-[#1B1735] font-ibm-plex-sans font-medium text-base_next leading-tight block">
                monthly
              </span>

              <Button className="bg-[#1C2731] rounded-10 flex items-center justify-between uppercase pl-6 pr-4 h-[54px] text-white transition w-full text-sm font-ibm-plex-sans font-bold mt-7 max-w-[250px] mx-auto">
                PURCHASE NOW
                <SVGLighting width="29" height="29" stroke="#fff" />
              </Button>
            </div>
            <div className="bg-[#1C2731] border border-[#1D1A2D] rounded-10 p-8">
              <h5 className="text-center text-base text-primary font-ibm-plex-sans font-bold leading-normal mb-12">
                How the smart contract <br />
                distributes the membership Fee
              </h5>
              <div className="mb-11">
                <MembershipGraph />
              </div>
              <div className="flex items-center space-x-3 mb-5 max-w-[350px] mx-auto">
                <img src={directionIcon} alt="direction" />
                <p className="text-sm text-[#A297C1] font-ibm-plex-sans font-normal">
                  Distribution happens on chain and the BUSD is sent directly to
                  wallets.
                </p>
              </div>
              <div className="text-center">
                <p className="text-primary text-sm font-ibm-plex-sans font-bold">
                  No Claiming Required
                </p>
              </div>
            </div>
          </div>
          <div>
            <CompareFeature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePro;
