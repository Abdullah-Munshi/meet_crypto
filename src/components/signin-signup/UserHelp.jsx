import React from "react";
import questionMarkIcon from "../../assets/questionMarkIcon.svg";
const UserHelp = ({ content }) => {
  return (
    <div className="grid grid-cols-[80px_auto] gap-1 w-[350px] mx-auto border-t border-four_7b py-12 cursor-pointer">
      <div>
        <img src={questionMarkIcon} alt="Questionmark" />
      </div>
      <div>
        <h4 className="text-white">Need help?</h4>
        <p className="text-one_d4 text-base_next">{content}</p>
      </div>
    </div>
  );
};

export default UserHelp;
