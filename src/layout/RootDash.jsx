import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./HeaderDash";
import DashboardFooter from "./FooterDash";
import SidebarDash from "./SidebarDash";
import dashboardBg from "../assets/dashboard-bg.png";
import { BackDrop } from "../components/Utility";

const RootDash = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/watchAds");
  }, [navigate]);

  const toggleSidebar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  return (
    <div className="bg-gradient-two p-3 md:p-5 min-h-screen">
      <BackDrop showSidebar={showSidebar} onClick={toggleSidebar} />
      <DashboardHeader onToggleSidebar={toggleSidebar} />
      <main className="xl:grid xl:grid-cols-[230px_auto]  mb-6 rounded-bl-2xl rounded-br-2xl overflow-hidden relative">
        <div
          className="w-full h-full absolute top-0 start-0 bottom-0 end-0 grayscale-[50%] bg-cover bg-center rounded-bl-2xl rounded-br-2xl"
          style={{ backgroundImage: `url(${dashboardBg})` }}
        ></div>
        <SidebarDash showSidebar={showSidebar} onHideSidebar={toggleSidebar} />
        <div className="p-3 sm:p-5 2xl:p-6 relative z-10">
          <Outlet />
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
};

export default RootDash;
