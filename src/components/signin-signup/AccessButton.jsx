const AccessButton = ({ children, type, onclick, opacity, outline }) => {
  if (outline) {
    return (
      <button
        type={type ? type : "button"}
        onClick={onclick}
        className={`border-2 border-primary flex items-center justify-between rounded-10 text-lg sm:text-xl text-white font-ibm-plex-sans font-semibold px-6 py-5 min-w-[300px] mx-auto ${opacity}`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type={type ? type : "button"}
        onClick={onclick}
        className={`bg-gradient-one flex items-center justify-between rounded-10 text-lg sm:text-xl text-black font-ibm-plex-sans font-semibold px-6 py-5 mx-auto min-w-[300px] ${opacity}`}
      >
        {children}
      </button>
    );
  }
};

export default AccessButton;
