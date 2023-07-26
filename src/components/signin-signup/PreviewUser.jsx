import React from "react";
import AccessButton from "./AccessButton";
import viewIcon from "../../assets/view.png";

const PreviewUser = () => {
  return (
    <div>
      <h4 className="text-white text-2xl mb-1 font-ibm-plex-sans font-bold">
        Preview any user
      </h4>
      <p className="text-lg text-one_d4 font-ibm-plex-sans font-normal mb-6">
        All data is on blockchain, You can preview any user’s dashboard here.
      </p>
      <input
        placeholder="Enter Account ID"
        className="rounded-10 bg-two_4a px-6 py-5 w-[300px] text-lg mb-5 text-three_8b focus:outline-none transition"
      />

      <AccessButton>
        <span>Preview Account</span>
        <img src={viewIcon} className="w-6" alt="view" />
      </AccessButton>
    </div>
  );
};

export default PreviewUser;
