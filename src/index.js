import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";
import RootDash from "./layout/RootDash";
import Dashboard from "./pages/Dashboard";
import PurchasePro from "./pages/PurchasePro";
import FlipCoin from "./pages/FlipCoin";
import Jackpot from "./pages/Jackpot";
import PredictRpo from "./pages/PredictRpo";
import FantasyCricket from "./pages/FantasyCricket";
import WatchAds from "./pages/WatchAds";
import Offerwalls from "./pages/Offerwalls";
import TgGroup from "./pages/TgGroup";
import Achievements from "./pages/Achievements";
import Refer from "./pages/Refer";
import Withdraw from "./pages/Withdraw";
import BuyAdCredits from "./pages/BuyAdCredits";
import Advertise from "./pages/Advertise";
import MyReferrals from "./pages/MyReferrals";
import TelegramAlerts from "./pages/TelegramAlerts";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <RootDash />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/purchasePro",
        element: <PurchasePro />,
      },
      {
        path: "/flipCoin",
        element: <FlipCoin />,
      },
      {
        path: "/jackpot",
        element: <Jackpot />,
      },
      {
        path: "/predictRPO",
        element: <PredictRpo />,
      },
      {
        path: "/fantacyCricket",
        element: <FantasyCricket />,
      },
      {
        path: "/watchAds",
        element: <WatchAds />,
      },
      { path: "/offerwalls", element: <Offerwalls /> },
      { path: "/tgGroup", element: <TgGroup /> },
      { path: "/achievements", element: <Achievements /> },
      { path: "/refer", element: <Refer /> },
      { path: "/withdraw", element: <Withdraw /> },
      { path: "/buyAdCredits", element: <BuyAdCredits /> },
      { path: "/advertise", element: <Advertise /> },
      { path: "/myReferrals", element: <MyReferrals /> },
      { path: "/telegramAlerts", element: <TelegramAlerts /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
