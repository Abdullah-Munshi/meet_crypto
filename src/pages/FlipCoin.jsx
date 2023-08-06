import React from "react";
import PromoBanner from "../components/dashboard/PromoBanner";
import { Avater, Button, TitleBase } from "../components/Utility";
import GameWidget from "../components/dashboard/GameWidget";
import CallerImage from "../assets/caller.png";
import vs from "../assets/vs.svg";
import { Link } from "react-router-dom";

const FlipCoin = () => {
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
      <div className="-mr-6">
        <div className="mb-6">
          <TitleBase>PvP Coin Flip Game</TitleBase>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <GameWidget entry="5" win="8" />
          <GameWidget entry="10" win="16" highlight={true} />
          <GameWidget entry="100" win="108" />
          <GameWidget entry="100" win="108" />
          <GameWidget entry="100" win="108" />
        </div>
      </div>

      <div>
        <div className="sm:max-w-[500px] md:max-w-[750px] grid sm:grid-cols-[1fr_100px_1fr] gap-6 mx-auto mb-14 mt-16 md:mt-24">
          <div className="text-center opacity-50">
            <div className="relative w-[132px] mx-auto mb-8">
              <span className="absolute -left-16 top-2 text-white text-sm font-ibm-plex-sans font-bold pl-4 pr-16 py-2 bg-[#57565D] rounded-[5px]">
                Caller
              </span>
              <Avater image={CallerImage} />
            </div>

            <div className="text-center">
              <h5 className="text-white font-ibm-plex-sans font-bold text-xl mb-1">
                dlooter_oie1212
              </h5>
              <strong className="block text-[#447A7E] text-sm_next font-ibm-plex-sans font-bold leading-tight mb-5">
                0xno12e1...123E
              </strong>
              <Button className="flex items-center justify-between h-[44px] pl-5 pr-[18px] rounded-[7px] bg-gradient-one text-base font-ibm-plex-sans font-bold text-black mx-auto min-w-[145px]">
                Call Now
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-5"
                >
                  <path
                    d="M11.5439 13.9294H10.463C8.93991 13.9294 8.17835 13.9294 7.8888 13.434C7.59926 12.9386 7.97297 12.275 8.7204 10.9479L11.1082 6.70821C11.4832 6.04238 11.6707 5.70947 11.8573 5.7584C12.0439 5.80733 12.0439 6.18941 12.0439 6.95357V9.79562C12.0439 10.0313 12.0439 10.1492 12.1171 10.2224C12.1903 10.2956 12.3082 10.2956 12.5439 10.2956H13.6247C15.1478 10.2956 15.9094 10.2956 16.1989 10.791C16.4885 11.2864 16.1148 11.9499 15.3673 13.2771L12.9795 17.5168C12.6045 18.1826 12.417 18.5155 12.2304 18.4666C12.0439 18.4177 12.0439 18.0356 12.0439 17.2714V14.4294C12.0439 14.1937 12.0439 14.0758 11.9706 14.0026C11.8974 13.9294 11.7796 13.9294 11.5439 13.9294Z"
                    fill="#33363F"
                  />
                  <ellipse
                    cx="12.0437"
                    cy="12.1125"
                    rx="9.00469"
                    ry="9.08437"
                    stroke="#33363F"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={vs} alt="verces" />
          </div>
          <div className="text-center">
            <div className="relative w-[132px] mx-auto mb-8">
              <span className="absolute -left-16 top-2 text-white text-sm font-ibm-plex-sans font-bold pl-4 pr-16 py-2 bg-[#57565D] rounded-[5px]">
                Tosser
              </span>
              <Avater />
            </div>

            <div className="text-center">
              <h5 className="text-white font-ibm-plex-sans font-bold text-xl mb-1">
                Yet to decide
              </h5>
              <strong className="block text-[#447A7E] text-sm_next font-ibm-plex-sans font-bold leading-tight mb-5">
                0xno12e1...123E
              </strong>
              <Button className="flex items-center justify-center h-[44px] pl-5 pr-[18px] rounded-[7px] border-2 border-primary text-base font-ibm-plex-sans font-bold text-primary uppercase mx-auto min-w-[145px] text-center">
                Winner
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-8">
          <div className="py-1 flex items-center">
            <p className="text-base sm:text-[18px] font-ibm-plex-sans font-medium text-white mr-3 text-end leading-tight">
              Entry <br /> Fee
            </p>
            <strong class="text-4xl sm:text-[40px] font-ibm-plex-sans font-bold leading-tight text-[#F8C571] block">
              $5
            </strong>
          </div>
          <div className="bg-[#61636F] h-[60px] w-[1px] mx-4"></div>
          <div className="py-1 flex items-center">
            <strong className="text-4xl sm:text-[40px] font-ibm-plex-sans font-bold leading-tight text-[#F8C571] block">
              $8
            </strong>
            <p className="text-base sm:text-[18px] font-ibm-plex-sans font-medium text-white ml-3 text-start leading-tight">
              Winner <br /> Wins
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-[90px_auto] items-center gap-3 max-w-[600px] mx-auto p-5 sm:py-7 sm:px-8 cursor-pointer border-4 border-[#343143] rounded-10 shadow-[0px_3px 10px_0px_rgba(0,0,0,0.10)] mb-6">
          <div>
            <svg
              width="69"
              height="69"
              viewBox="0 0 69 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="34.5"
                cy="34.5"
                r="25.875"
                stroke="#F8C571"
                strokeWidth="2"
              />
              <circle
                cx="34.5"
                cy="51.75"
                r="1.4375"
                fill="#F8C571"
                stroke="#F8C571"
              />
              <path
                d="M34.5 46V41.9208C34.5 39.2061 36.2371 36.796 38.8125 35.9375V35.9375C41.3879 35.079 43.125 32.6689 43.125 29.9542V28.4789C43.125 23.8652 39.3848 20.125 34.7711 20.125H34.5C29.7365 20.125 25.875 23.9865 25.875 28.75V28.75"
                stroke="#F8C571"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-primary font-ibm-plex-sans font-bold text-lg sm:text-xl mb-[5px]">
              Caller (dlooter_oie1212) called for Tails
            </h4>
            <p className="text-[#AA9BD5] text-base  sm:text-base_next font-ibm-plex-sans font-normal mb-1">
              Toss now to declare the winner. If it’s Heads, then you will be
              the WINNER!
            </p>
            <Link className="inline-block font-ibm-plex-sans font-bold text-base text-[#AA9BD5] opacity-40 transition hover:opacity-100">
              Contest #12
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCoin;
