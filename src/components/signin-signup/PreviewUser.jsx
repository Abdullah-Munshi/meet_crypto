import React from "react";
import AccessButton from "./AccessButton";
import viewIcon from "../../assets/view.png";

const PreviewUser = () => {
  return (
    <div className="text-center md:text-left">
      <h4 className="text-white text-2xl mb-1 font-ibm-plex-sans font-bold">
        Preview any user
      </h4>
      <p className="text-lg text-[#DFDDD4] font-ibm-plex-sans font-normal mb-6">
        All data is on blockchain, You can preview any user’s dashboard here.
      </p>
      <input
        placeholder="Enter Account ID"
        className="text-primary placeholder-[#5B7F8B] rounded-10 bg-[#2B304A] px-6 py-5 w-[300px] text-lg mb-5 border border-transparent  focus:outline-none focus:border-primary transition duration-200"
      />

      <AccessButton outline={true}>
        <span>Preview Account</span>
        <img src={viewIcon} className="w-6" alt="view" />
      </AccessButton>
    </div>
  );
};

export default PreviewUser;
