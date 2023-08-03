import React from "react";
import FooterMenu from "../components/dashboard/FooterMenu";
import Statistics from "../components/dashboard/Statistics";

const footerMenu = [
  { label: "Contact support", path: "/" },
  { label: "Report a Bug", path: "/" },
  { label: "Documentation", path: "/" },
  { label: "Privacy Policy", path: "/" },
  { label: "Terms", path: "/" },
];

const FooterDash = () => {
  return (
    <div className="xl:grid xl:grid-cols-2 gap-6 space-y-4">
      <div className="block sm:flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-6">
        <Statistics
          total={31231}
          text="Total %break% Users"
          styles={`bg-[#232E38]`}
        />
        <Statistics
          total={31231}
          text="Total %break% Paid Out"
          styles={`bg-[#232E38]`}
        />
      </div>
      <div className="text-center xl:text-end space-y-4 pb-3 md:pb-0">
        <FooterMenu items={footerMenu} />
        <p className="text-[#5F794C] text-xs_next font-ibm-plex-sans font-medium leading-tight">
          Copyright @ 2023 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default FooterDash;
