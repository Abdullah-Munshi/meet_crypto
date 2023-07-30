export const AccessContainer = ({ children }) => {
  return <div className="max-w-[850px] mx-auto">{children}</div>;
};

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
