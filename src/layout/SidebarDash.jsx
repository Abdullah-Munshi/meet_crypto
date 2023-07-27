import React from "react";
import { NavLink } from "react-router-dom";

const dashboardMenu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z"
          stroke="#F8C571"
          stroke-width="2"
        />
        <path
          d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
          stroke="#F8C571"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Purchase PRO",
    path: "/purchasePro",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2777 10.6615L17.1204 10.1231C17.4999 10.717 17.415 11.3454 17.2732 11.8271C17.1409 12.2762 16.8925 12.8128 16.6218 13.3971C16.6121 13.4181 16.6023 13.4392 16.5925 13.4604L13.8612 19.3601L13.8389 19.4083C13.6713 19.7705 13.5118 20.115 13.3656 20.3586C13.2917 20.4816 13.1735 20.6625 13.0018 20.8121C12.8116 20.9779 12.4495 21.1888 11.9811 21.0857C11.5127 20.9825 11.2728 20.639 11.1698 20.4086C11.0769 20.2007 11.0456 19.9869 11.0303 19.8442C10.9999 19.5617 10.9999 19.1821 11 18.783L11 18.7299V14.8H10.1299C10.1066 14.8 10.0833 14.8 10.0602 14.8C9.4162 14.8001 8.82491 14.8002 8.36179 14.7315C7.8651 14.6578 7.25914 14.4708 6.87963 13.8769M16.2777 10.6615L6.87963 13.8769M16.2777 10.6615L17.1204 10.1231C16.7409 9.52918 16.1349 9.34218 15.6382 9.26851C15.1751 9.19982 14.5838 9.1999 13.9398 9.19999C13.9167 9.2 13.8934 9.2 13.8701 9.2H13V5.27013C13 5.2524 13 5.2347 13 5.21704C13.0001 4.8179 13.0001 4.43831 12.9697 4.1558C12.9544 4.01307 12.9231 3.7993 12.8302 3.59138C12.7272 3.36098 12.4873 3.01749 12.0189 2.91432C11.5505 2.81116 11.1884 3.02206 10.9982 3.18788C10.8265 3.33752 10.7083 3.51837 10.6344 3.64144C10.4882 3.88504 10.3287 4.22953 10.1611 4.59175C10.1537 4.60778 10.1462 4.62385 10.1388 4.63994L7.40746 10.5396C7.39768 10.5608 7.38791 10.5819 7.37818 10.6029C7.10755 11.1872 6.85906 11.7238 6.72683 12.1729C6.58501 12.6546 6.50012 13.283 6.87963 13.8769M16.2777 10.6615L6.87963 13.8769M12.3753 4.63029C12.3753 4.63032 12.3747 4.63115 12.3735 4.63269C12.3747 4.63103 12.3753 4.63026 12.3753 4.63029ZM10.9751 4.32469C10.9747 4.32279 10.9745 4.32178 10.9745 4.32175C10.9745 4.32173 10.9747 4.32268 10.9751 4.32469ZM11.6247 19.3697C11.6247 19.3697 11.6253 19.3688 11.6266 19.3671C11.6253 19.3689 11.6247 19.3697 11.6247 19.3697ZM13.0255 19.6782C13.0255 19.6783 13.0253 19.6773 13.0249 19.6753C13.0253 19.6772 13.0255 19.6782 13.0255 19.6782Z"
          stroke="#F8C571"
          stroke-width="2"
        />
      </svg>
    ),
  },
  {
    label: "Purchase PRO",
    path: "/flipCoin",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2777 10.6615L17.1204 10.1231C17.4999 10.717 17.415 11.3454 17.2732 11.8271C17.1409 12.2762 16.8925 12.8128 16.6218 13.3971C16.6121 13.4181 16.6023 13.4392 16.5925 13.4604L13.8612 19.3601L13.8389 19.4083C13.6713 19.7705 13.5118 20.115 13.3656 20.3586C13.2917 20.4816 13.1735 20.6625 13.0018 20.8121C12.8116 20.9779 12.4495 21.1888 11.9811 21.0857C11.5127 20.9825 11.2728 20.639 11.1698 20.4086C11.0769 20.2007 11.0456 19.9869 11.0303 19.8442C10.9999 19.5617 10.9999 19.1821 11 18.783L11 18.7299V14.8H10.1299C10.1066 14.8 10.0833 14.8 10.0602 14.8C9.4162 14.8001 8.82491 14.8002 8.36179 14.7315C7.8651 14.6578 7.25914 14.4708 6.87963 13.8769M16.2777 10.6615L6.87963 13.8769M16.2777 10.6615L17.1204 10.1231C16.7409 9.52918 16.1349 9.34218 15.6382 9.26851C15.1751 9.19982 14.5838 9.1999 13.9398 9.19999C13.9167 9.2 13.8934 9.2 13.8701 9.2H13V5.27013C13 5.2524 13 5.2347 13 5.21704C13.0001 4.8179 13.0001 4.43831 12.9697 4.1558C12.9544 4.01307 12.9231 3.7993 12.8302 3.59138C12.7272 3.36098 12.4873 3.01749 12.0189 2.91432C11.5505 2.81116 11.1884 3.02206 10.9982 3.18788C10.8265 3.33752 10.7083 3.51837 10.6344 3.64144C10.4882 3.88504 10.3287 4.22953 10.1611 4.59175C10.1537 4.60778 10.1462 4.62385 10.1388 4.63994L7.40746 10.5396C7.39768 10.5608 7.38791 10.5819 7.37818 10.6029C7.10755 11.1872 6.85906 11.7238 6.72683 12.1729C6.58501 12.6546 6.50012 13.283 6.87963 13.8769M16.2777 10.6615L6.87963 13.8769M12.3753 4.63029C12.3753 4.63032 12.3747 4.63115 12.3735 4.63269C12.3747 4.63103 12.3753 4.63026 12.3753 4.63029ZM10.9751 4.32469C10.9747 4.32279 10.9745 4.32178 10.9745 4.32175C10.9745 4.32173 10.9747 4.32268 10.9751 4.32469ZM11.6247 19.3697C11.6247 19.3697 11.6253 19.3688 11.6266 19.3671C11.6253 19.3689 11.6247 19.3697 11.6247 19.3697ZM13.0255 19.6782C13.0255 19.6783 13.0253 19.6773 13.0249 19.6753C13.0253 19.6772 13.0255 19.6782 13.0255 19.6782Z"
          stroke="#F8C571"
          stroke-width="2"
        />
      </svg>
    ),
  },
];

const SidebarDash = () => {
  const linkStyle = ({ isActive, isPending }) => {
    const commonStyle =
      "block rounded-10 transition text-xs_next font-ibm-plex-sans font-bold leading-tight flex items-center px-4 py-3";
    return isActive
      ? `${commonStyle} bg-gradient-three text-[#2A2B49]`
      : `${commonStyle} bg-[#1C2731] text-[#A4A4B0]`;
  };
  return (
    <div className="bg-[#232E38] h-full p-5 space-y-3">
      {/* single-blk markup start */}
      <div>
        <ul className="space-y-3">
          {dashboardMenu.map((menuItem) => (
            <li>
              <NavLink to={menuItem.path} className={linkStyle}>
                <span className="mr-2">
                  {menuItem.icon ? menuItem.icon : ""}
                </span>
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* single-blk markup end */}
      {/* single-blk markup start */}
      <div>
        <h5 className="text-xs_next text-[#A3A1B9] font-ibm-plex-sans font-medium leading-tight mb-3">
          Decentralized Play2Win
        </h5>
        <ul className="space-y-3">
          {dashboardMenu.map((menuItem) => (
            <li>
              <NavLink to={menuItem.path} className={linkStyle}>
                <span className="mr-2">
                  {menuItem.icon ? menuItem.icon : ""}
                </span>
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* single-blk markup end */}
      {/* single-blk markup start */}
      <div>
        <h5 className="text-xs_next text-[#A3A1B9] font-ibm-plex-sans font-medium leading-tight mb-3">
          Earn Real Cash
        </h5>
        <ul className="space-y-3">
          {dashboardMenu.map((menuItem) => (
            <li>
              <NavLink
                to={menuItem.path}
                className="bg-[#1C2731] block rounded-10 transition text-[#A4A4B0] text-xs_next font-ibm-plex-sans font-bold leading-tight flex items-center px-4 py-3"
              >
                <span className="mr-2">
                  {menuItem.icon ? menuItem.icon : ""}
                </span>
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* single-blk markup end */}
      {/* single-blk markup start */}
      <div>
        <h5 className="text-xs_next text-[#A3A1B9] font-ibm-plex-sans font-medium leading-tight mb-3">
          Advertisements
        </h5>
        <ul className="space-y-3">
          {dashboardMenu.map((menuItem) => (
            <li>
              <NavLink
                to={menuItem.path}
                className="bg-[#1C2731] block rounded-10 transition text-[#A4A4B0] text-xs_next font-ibm-plex-sans font-bold leading-tight flex items-center px-4 py-3"
              >
                <span className="mr-2">
                  {menuItem.icon ? menuItem.icon : ""}
                </span>
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* single-blk markup end */}
      {/* single-blk markup start */}
      <div>
        <h5 className="text-xs_next text-[#A3A1B9] font-ibm-plex-sans font-medium leading-tight mb-3">
          Others
        </h5>
        <ul className="space-y-3">
          {dashboardMenu.map((menuItem) => (
            <li>
              <NavLink
                to={menuItem.path}
                className="bg-[#1C2731] block rounded-10 transition text-[#A4A4B0] text-xs_next font-ibm-plex-sans font-bold leading-tight flex items-center px-4 py-3"
              >
                <span className="mr-2">
                  {menuItem.icon ? menuItem.icon : ""}
                </span>
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* single-blk markup end */}
    </div>
  );
};

export default SidebarDash;
