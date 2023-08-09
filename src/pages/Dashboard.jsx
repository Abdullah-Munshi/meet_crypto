import React from "react";
import { TitleBase } from "../components/Utility";
import TotalEstimate from "../components/dashboard/Statistics";
import PromoCarousel from "../components/dashboard/PromoCarousel";
import EarnImage from "../assets/addImage.png";
import EarnImage2 from "../assets/addImage-2.png";
import EarnImage3 from "../assets/addImage-3.png";
import EarnImage4 from "../assets/addImage-4.png";
import EarnImage5 from "../assets/addImage-5.png";
import EarnBlk from "../components/dashboard/EarnBlk";
import ContestBlk from "../components/dashboard/ContestBlk";
import Contest1 from "../assets/ct-1.png";
import Contest2 from "../assets/ct-2.png";
import Contest3 from "../assets/ct-3.png";
import Contest4 from "../assets/ct-4.png";

const earnWay = [
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage2,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage3,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage4,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage5,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage2,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
];

const contests = [
  {
    thumbnail: Contest1,
    title: "Flip a Coin",
    text: "Place a bet against an opponent & WIN 2x!",
  },
  {
    thumbnail: Contest2,
    title: "Jackpot",
    text: "Purchase tickets and WIN big in the lottery",
  },
  {
    thumbnail: Contest3,
    title: "Predict RPO",
    text: "Predict Runs Per Over in a match and WIN!",
  },
  {
    thumbnail: Contest4,
    title: "Fantacy Cricket",
    text: "Create your Fantasy Team and Win based on real match",
  },
  {
    thumbnail: Contest1,
    title: "Flip a Coin",
    text: "Place a bet against an opponent & WIN 2x!",
  },
  {
    thumbnail: Contest2,
    title: "Jackpot",
    text: "Purchase tickets and WIN big in the lottery",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-10">
      <div className="-mr-[36px]">
        <PromoCarousel />
      </div>
      <div>
        <div className="mb-6">
          <TitleBase>Dashboard</TitleBase>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6">
          <TotalEstimate
            total="$10"
            text="Ad Credits %break% Balance"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <TotalEstimate
            type={true}
            total="$500"
            text="Earnings %break% Balance"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <TotalEstimate
            type={true}
            total="52"
            text="Referrals %break% Referred"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
          <TotalEstimate
            type={true}
            total="$10"
            text="Total WON %break% in Games"
            styles={`bg-[#343143] hover:bg-[#243D31]`}
          />
        </div>
      </div>
      <div>
        <div className="mb-6">
          <TitleBase>Earning Ways</TitleBase>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-3 sm:gap-5 2xl:gap-6">
          {earnWay.map((item, index) => (
            <EarnBlk
              key={index}
              image={item.thumbnail}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-6">
          <TitleBase>100% Decentralized Play2Win Contests</TitleBase>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-3 sm:gap-5 2xl:gap-6">
          {contests.map((item, index) => (
            <ContestBlk
              key={index}
              image={item.thumbnail}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
