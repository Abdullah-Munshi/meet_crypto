import React from "react";
import { NavLink } from "react-router-dom";

const FooterMenu = ({ items }) => {
  return (
    <ul className="flex flex-wrap items-center justify-center xl:justify-end space-x-7">
      {items.map((item, index) => (
        <li className="block" key={index}>
          <NavLink
            to={item.path}
            className="text-[#5F794C] text-xs_next font-ibm-plex-sans font-medium leading-tight inline-block hover:text-[#232E38] transition duration-200"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterMenu;
