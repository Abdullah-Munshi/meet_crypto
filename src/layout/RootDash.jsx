import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./HeaderDash";
import DashboardFooter from "./FooterDash";
import SidebarDash from "./SidebarDash";
import dashboardBg from "../assets/dashboard-bg.png";

const RootDash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);
  return (
    <div className="bg-gradient-two p-6 min-h-screen">
      <DashboardHeader />

      <main className="grid grid-cols-[230px_auto]  mb-6 rounded-bl-2xl rounded-br-2xl overflow-hidden relative">
        <div
          className="w-full h-full absolute top-0 start-0 bottom-0 end-0 grayscale-[50%] bg-cover bg-center rounded-bl-2xl rounded-br-2xl"
          style={{ backgroundImage: `url(${dashboardBg})` }}
        ></div>
        <SidebarDash />
        <div className="p-6 relative z-10">
          <Outlet />
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
};

export default RootDash;
