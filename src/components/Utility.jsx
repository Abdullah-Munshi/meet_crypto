export const SVGIcon = ({ children }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export const TitleBase = ({ children }) => {
  return (
    <h4 className="text-white text-xl font-ibm-plex-sans font-bold leading-tight">
      {children}
    </h4>
  );
};

export const BackDrop = ({ showSidebar, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-screen h-screen fixed top-0 end-0 bottom-0 left-0 bg-black/60 transition duration-300 z-30 ${
        showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    />
  );
};

export const AdTimeCredit = ({ time, credit }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-white text-sm md:text-base font-ibm-plex-sans font-semibold leading-tight">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[6px]"
        >
          <circle cx="9" cy="9" r="7" stroke="#EABB6D" strokeWidth="2" />
          <path
            d="M12.375 9H9.25C9.11193 9 9 8.88807 9 8.75V6.375"
            stroke="#EABB6D"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        {time}
      </div>
      <div className="flex items-center text-white text-sm md:text-base font-ibm-plex-sans font-semibold leading-tight justify-end">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[6px]"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="#EABB6D"
            strokeWidth="2"
          />
          <path
            d="M6 9H8"
            stroke="#EABB6D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 15H18"
            stroke="#EABB6D"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="2" stroke="#EABB6D" strokeWidth="2" />
        </svg>
        {credit}
      </div>
    </div>
  );
};

export const AddWatchSchedule = ({ text }) => {
  return (
    <div className="bg-[#6C8772] text-white font-ibm-plex-sans font-semibold leading-tight rounded-bl-10 rounded-br-10 flex items-center px-3 py-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[7px]"
      >
        <circle cx="10" cy="10" r="6.5" stroke="#F8C571" strokeWidth="2" />
        <path
          d="M4.16666 2.33656C3.40657 2.7754 2.77538 3.40659 2.33654 4.16669"
          stroke="#F8C571"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.8333 2.33656C16.5934 2.7754 17.2246 3.40659 17.6635 4.16669"
          stroke="#F8C571"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7.5 7.5H12.1379C12.2715 7.5 12.3384 7.66157 12.2439 7.75607L7.75607 12.2439C7.66157 12.3384 7.7285 12.5 7.86213 12.5H12.5"
          stroke="#F8C571"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </div>
  );
};

export const AddValue = ({ value }) => {
  return (
    <div className="text-white text-base font-ibm-plex-sans font-normal">
      Ad value{" "}
      <strong className="text-primary font-bold inline-block">
        ${value}/view
      </strong>
    </div>
  );
};

export const SVGClock = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="#33363F" stroke-width="2" />
      <path
        d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
        stroke="#33363F"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SVGLighting = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2777 10.6615L17.1204 10.1231C17.4999 10.717 17.415 11.3454 17.2732 11.8271C17.1409 12.2762 16.8925 12.8128 16.6218 13.3971C16.6121 13.4181 16.6023 13.4392 16.5925 13.4604L13.8612 19.3601L13.8389 19.4083C13.6713 19.7705 13.5118 20.115 13.3656 20.3586C13.2917 20.4816 13.1735 20.6625 13.0018 20.8121C12.8116 20.9779 12.4495 21.1888 11.9811 21.0857C11.5127 20.9825 11.2728 20.639 11.1698 20.4086C11.0769 20.2007 11.0456 19.9869 11.0303 19.8442C10.9999 19.5617 10.9999 19.1821 11 18.783L11 18.7299V14.8H10.1299C10.1066 14.8 10.0833 14.8 10.0602 14.8C9.4162 14.8001 8.82491 14.8002 8.36179 14.7315C7.8651 14.6578 7.25914 14.4708 6.87963 13.8769M16.2777 10.6615L6.87963 13.8769M16.2777 10.6615L17.1204 10.1231C16.7409 9.52918 16.1349 9.34218 15.6382 9.26851C15.1751 9.19982 14.5838 9.1999 13.9398 9.19999C13.9167 9.2 13.8934 9.2 13.8701 9.2H13V5.27013C13 5.2524 13 5.2347 13 5.21704C13.0001 4.8179 13.0001 4.43831 12.9697 4.1558C12.9544 4.01307 12.9231 3.7993 12.8302 3.59138C12.7272 3.36098 12.4873 3.01749 12.0189 2.91432C11.5505 2.81116 11.1884 3.02206 10.9982 3.18788C10.8265 3.33752 10.7083 3.51837 10.6344 3.64144C10.4882 3.88504 10.3287 4.22953 10.1611 4.59175C10.1537 4.60778 10.1462 4.62385 10.1388 4.63994L7.40746 10.5396C7.39768 10.5608 7.38791 10.5819 7.37818 10.6029C7.10755 11.1872 6.85906 11.7238 6.72683 12.1729C6.58501 12.6546 6.50012 13.283 6.87963 13.8769M16.2777 10.6615L6.87963 13.8769M12.3753 4.63029C12.3753 4.63032 12.3747 4.63115 12.3735 4.63269C12.3747 4.63103 12.3753 4.63026 12.3753 4.63029ZM10.9751 4.32469C10.9747 4.32279 10.9745 4.32178 10.9745 4.32175C10.9745 4.32173 10.9747 4.32268 10.9751 4.32469ZM11.6247 19.3697C11.6247 19.3697 11.6253 19.3688 11.6266 19.3671C11.6253 19.3689 11.6247 19.3697 11.6247 19.3697ZM13.0255 19.6782C13.0255 19.6783 13.0253 19.6773 13.0249 19.6753C13.0253 19.6772 13.0255 19.6782 13.0255 19.6782Z"
        stroke="#33363F"
        strokeWidth="2"
      />
    </svg>
  );
};

export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export const FeatureBlk = ({ title, text }) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};
