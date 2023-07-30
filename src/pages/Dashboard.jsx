import React from "react";
import { TitleBase } from "../components/Utility";
import TotalEstimate from "../components/dashboard/TotalEstimate";
import EarnImage from "../assets/addImage.png";
import EarnBlk from "../components/dashboard/EarnBlk";
import ContestBlk from "../components/dashboard/ContestBlk";
import Contest1 from "../assets/ct-1.png";
import Contest2 from "../assets/ct-2.png";
import Contest3 from "../assets/ct-3.png";
import Contest4 from "../assets/ct-4.png";
import PromoBanner from "../components/dashboard/PromoBanner";

const earnWay = [
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage,
    title: "WATCH ADS",
    text: "Watch simple ads and earn real cash",
  },
  {
    thumbnail: EarnImage,
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
      <div>
        <div className="grid grid-cols-4 gap-6">
          <PromoBanner />
          <PromoBanner />
          <PromoBanner />
          <PromoBanner />
        </div>
      </div>
      <div>
        <div className="mb-6">
          <TitleBase>Dashboard</TitleBase>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <TotalEstimate
            type={true}
            total="$10"
            text="Ad Credits %break% Balance"
          />
          <TotalEstimate
            type={true}
            total="$500"
            text="Earnings %break% Balance"
          />
          <TotalEstimate
            type={true}
            total="52"
            text="Referrals %break% Referred"
          />
          <TotalEstimate
            type={true}
            total="$10"
            text="Total WON %break% in Games"
          />
        </div>
      </div>
      <div>
        <div className="mb-6">
          <TitleBase>Earning Ways</TitleBase>
        </div>
        <div className="grid grid-cols-6 gap-6">
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
        <div className="grid grid-cols-6 gap-6">
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
