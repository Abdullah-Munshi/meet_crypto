const AccessButton = ({ children, type, onclick }) => {
  return (
    <button
      type={type ? type : "button"}
      onClick={onclick}
      className="bg-gradient-one flex items-center justify-between rounded-10 text-xl text-black font-ibm-plex-sans font-semibold px-6 py-5 min-w-[300px]"
    >
      {children}
    </button>
  );
};

export default AccessButton;
