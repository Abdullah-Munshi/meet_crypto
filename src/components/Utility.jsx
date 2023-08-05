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
    <div className="bg-[#6C8772] text-white text-sm font-ibm-plex-sans font-semibold leading-tight rounded-bl-10 rounded-br-10 flex items-center px-3 py-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[7px] translate-y-[1px]"
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

export const SVGClock = ({ width, height, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
      <path
        d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SVGLighting = ({ width, height, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6247 35.1197C20.6247 35.1197 20.6253 35.1188 20.6266 35.1171C20.6253 35.1189 20.6247 35.1198 20.6247 35.1197ZM22.0255 35.4282C22.0255 35.4283 22.0253 35.4273 22.0249 35.4253C22.0253 35.4272 22.0255 35.4282 22.0255 35.4282ZM21.3753 6.88029C21.3753 6.88033 21.3747 6.88115 21.3735 6.88268C21.3747 6.88103 21.3753 6.88026 21.3753 6.88029ZM19.9745 6.57175C19.9745 6.57173 19.9747 6.57268 19.9751 6.5747C19.9747 6.57279 19.9745 6.57178 19.9745 6.57175ZM12.6575 20.8896L13.5649 21.3098L12.6575 20.8896C12.6477 20.9108 12.6379 20.9319 12.6282 20.9529C12.3575 21.5372 12.1091 22.0738 11.9768 22.5229C11.835 23.0046 11.7501 23.633 12.1296 24.2269C12.5091 24.8208 13.1151 25.0078 13.6118 25.0815C14.0749 25.1502 14.6662 25.1501 15.3102 25.15C15.3333 25.15 15.3566 25.15 15.3799 25.15H20V34.4799L20 34.533C19.9999 34.9321 19.9999 35.3117 20.0303 35.5942C20.0456 35.7369 20.0769 35.9507 20.1698 36.1586C20.2728 36.389 20.5127 36.7325 20.9811 36.8357C21.4495 36.9388 21.8116 36.7279 22.0018 36.5621C22.1735 36.4125 22.2917 36.2316 22.3656 36.1086C22.5118 35.865 22.6713 35.5205 22.8389 35.1582L22.8612 35.1101L29.3425 21.1104L29.3718 21.0471C29.6424 20.4628 29.8909 19.9262 30.0232 19.4771C30.165 18.9954 30.2499 18.367 29.8704 17.7731C29.4909 17.1792 28.8849 16.9922 28.3882 16.9185C27.9251 16.8498 27.3338 16.8499 26.6898 16.85C26.6667 16.85 26.6434 16.85 26.6201 16.85H22V7.52012C22 7.50239 22 7.48469 22 7.46702C22.0001 7.06789 22.0001 6.6883 21.9697 6.4058C21.9544 6.26307 21.9231 6.0493 21.8302 5.84138C21.7272 5.61098 21.4873 5.26749 21.0189 5.16432C20.5505 5.06116 20.1884 5.27206 19.9982 5.43788C19.8265 5.58752 19.7083 5.76837 19.6344 5.89144C19.4882 6.13504 19.3287 6.47954 19.1611 6.84178C19.1537 6.8578 19.1462 6.87386 19.1388 6.88994L12.6575 20.8896Z"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
    </svg>
  );
};

export const SVGInfo = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        r="6.75"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
      <path
        d="M9.375 5.625C9.375 5.83211 9.20711 6 9 6C8.79289 6 8.625 5.83211 8.625 5.625C8.625 5.41789 8.79289 5.25 9 5.25C9.20711 5.25 9.375 5.41789 9.375 5.625Z"
        fill={fill ? fill : "#F8C571"}
        stroke={stroke ? stroke : "#F8C571"}
      />
      <path
        d="M9 12.75V7.5"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
      />
    </svg>
  );
};
export const SVGFilter = ({ width, height, fill }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.65811 19.7806L9.97433 20.7293H9.97433L9.65811 19.7806ZM14.6581 18.114L14.9743 19.0627L14.9743 19.0626L14.6581 18.114ZM19.7071 7.29289L20.4142 8L19.7071 7.29289ZM15.2929 11.7071L14.5858 11L15.2929 11.7071ZM5 5H19V3H5V5ZM5 6.58579V5H3V6.58579H5ZM9.41421 11L5 6.58579L3.58579 8L7.99999 12.4142L9.41421 11ZM7.99999 12.4142V19.3063H9.99999V12.4142H7.99999ZM7.99999 19.3063C7.99999 20.3301 9.00304 21.0531 9.97433 20.7293L9.34188 18.832C9.66565 18.724 9.99999 18.965 9.99999 19.3063H7.99999ZM9.97433 20.7293L14.9743 19.0627L14.3419 17.1653L9.34188 18.832L9.97433 20.7293ZM14.9743 19.0626C15.5868 18.8585 16 18.2853 16 17.6396H14C14 17.4244 14.1377 17.2333 14.3419 17.1653L14.9743 19.0626ZM16 17.6396V12.4142H14V17.6396H16ZM19 6.58579L14.5858 11L16 12.4142L20.4142 8L19 6.58579ZM19 5V6.58579H21V5H19ZM20.4142 8C20.7893 7.62493 21 7.11622 21 6.58579H19L20.4142 8ZM16 12.4142V12.4142L14.5858 11C14.2107 11.3751 14 11.8838 14 12.4142H16ZM7.99999 12.4142H9.99999C9.99999 11.8838 9.78928 11.3751 9.41421 11L7.99999 12.4142ZM3 6.58579C3 7.11622 3.21071 7.62493 3.58579 8L5 6.58579V6.58579H3ZM19 5H21C21 3.89543 20.1046 3 19 3V5ZM5 3C3.89543 3 3 3.89543 3 5H5V5V3Z"
        fill={fill ? fill : "#F8C571"}
      />
    </svg>
  );
};
export const SVGSort = ({ width, height, fill, stroke }) => {
  return (
    <svg
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7H19"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12H15"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 17H11"
        stroke={stroke ? stroke : "#F8C571"}
        strokeWidth="2"
        strokeLinecap="round"
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
