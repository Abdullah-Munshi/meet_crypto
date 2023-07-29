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

      <main
        className="grid grid-cols-[230px_auto] bg-cover bg-center mb-6 rounded-bl-2xl rounded-br-2xl overflow-hidden"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      >
        <SidebarDash />
        <div>
          <Outlet />
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
};

export default RootDash;
