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
