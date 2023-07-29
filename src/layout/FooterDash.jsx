import React from "react";
import TotalEstimate from "../components/dashboard/TotalEstimate";
import FooterMenu from "../components/dashboard/FooterMenu";

const footerMenu = [
  { label: "Contact support", path: "/" },
  { label: "Report a Bug", path: "/" },
  { label: "Documentation", path: "/" },
  { label: "Privacy Policy", path: "/" },
  { label: "Terms", path: "/" },
];

const FooterDash = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex gap-6">
        <TotalEstimate total={31231} text="Total %break% Users" />
        <TotalEstimate total={31231} text="Total %break% Paid Out" />
      </div>
      <div className="text-center lg:text-end space-y-4">
        <FooterMenu items={footerMenu} />
        <p className="text-[#5F794C] text-xs_next font-ibm-plex-sans font-medium leading-tight">
          Copyright @ 2023 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default FooterDash;
