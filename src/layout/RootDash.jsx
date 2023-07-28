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
    <div className="bg-gradient-two p-8 min-h-screen">
      <DashboardHeader />

      <main
        className="grid grid-cols-[230px_auto] bg-cover bg-center"
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
