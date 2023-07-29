import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import avater from "../assets/user.png";
import wallet from "../assets/wallet.svg";
const HeaderDash = () => {
  return (
    <header className="bg-[#2E3841] rounded-tl-2xl rounded-tr-2xl">
      <div className="flex items-center justify-between h-[90px] px-5">
        <Link>
          <img className="h-[45px]" src={logo} alt="Logo" />
        </Link>

        <div className="flex items-center justify-end space-x-4">
          {/* Wallet markup start  */}
          <div className="flex items-center space-x-3 border-r border-[#627A90] mr-[10px] pr-6">
            <div className="text-end">
              <span className="block text-white text-sm font-ibm-plex-sans font-normal">
                Registered Wallet
              </span>
              <strong className="block text-white text-lg leading-tight">
                0x123aBcD...0FaX
              </strong>
            </div>
            <div>
              <img src={wallet} alt="wallet" />
            </div>
          </div>
          {/* Wallet markup end  */}
          {/* User markup start  */}
          <div className="flex items-center space-x-3">
            <div className="text-end">
              <span className="block text-white text-sm font-ibm-plex-sans font-normal">
                Howdy
              </span>
              <strong className="block text-white text-base_next leading-tight">
                username
              </strong>
            </div>
            <div>
              <img
                src={avater}
                alt="Avater"
                className="w-[45px] h-[45px] rounded-full"
              />
            </div>
            <div>
              <span className="block text-white text-sm font-ibm-plex-sans font-normal">
                User ID
              </span>
              <strong className="block text-white text-base_next leading-tight">
                129
              </strong>
            </div>
          </div>
          {/* User markup end  */}

          <div className="bg-[#1C2731] rounded-10 w-[47px] h-[47px] flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5712 4.02752C15.7799 3.68745 14.9099 3.5 14 3.5C10.6791 3.5 7.88923 5.99704 7.52249 9.29766L7.22872 11.9416C7.19301 12.263 7.17515 12.4238 7.15112 12.582C7.01078 13.5064 6.70945 14.3991 6.26084 15.2195C6.18404 15.3599 6.10084 15.4986 5.93444 15.7759L5.26007 16.8999C4.50755 18.1541 4.1313 18.7812 4.36514 19.267C4.3844 19.307 4.40631 19.3457 4.43072 19.3829C4.72702 19.8333 5.45833 19.8333 6.92095 19.8333H21.0791C22.5417 19.8333 23.273 19.8333 23.5693 19.3829C23.5937 19.3457 23.6156 19.307 23.6349 19.267C23.8687 18.7812 23.4925 18.1541 22.74 16.8999L22.0656 15.7759C21.8992 15.4986 21.816 15.3599 21.7392 15.2195C21.2906 14.3991 20.9892 13.5064 20.8489 12.582C20.8372 12.5048 20.8269 12.427 20.8153 12.3302C17.9553 12.2329 15.6667 9.88371 15.6667 7C15.6667 5.89951 16 4.87687 16.5712 4.02752ZM18.9864 5.8203C18.7832 6.16643 18.6667 6.56961 18.6667 7C18.6667 8.10809 19.4391 9.03577 20.4749 9.274C20.3239 7.95824 19.7876 6.77112 18.9864 5.8203Z"
                fill="white"
              />
              <path
                d="M10.5 19.8333C10.5 20.293 10.5905 20.7481 10.7664 21.1727C10.9423 21.5974 11.2001 21.9832 11.5251 22.3082C11.8501 22.6332 12.236 22.891 12.6606 23.0669C13.0852 23.2428 13.5404 23.3333 14 23.3333C14.4596 23.3333 14.9148 23.2428 15.3394 23.0669C15.764 22.891 16.1499 22.6332 16.4749 22.3082C16.7999 21.9832 17.0577 21.5974 17.2336 21.1727C17.4095 20.7481 17.5 20.293 17.5 19.8333L14 19.8333H10.5Z"
                fill="white"
              />
              <circle
                cx="21"
                cy="6.99999"
                r="2.83333"
                fill="#F8C571"
                stroke="#F8C571"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDash;
