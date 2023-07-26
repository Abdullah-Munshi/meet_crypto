import React from "react";
import { Link } from "react-router-dom";
import { AccessContainer } from "../components/Utility";
import WelcomeTitle from "../components/signin-signup/WelcomeTitle";
import Step from "../components/signin-signup/Step";
import UserHelp from "../components/signin-signup/UserHelp";
import AccessButton from "../components/signin-signup/AccessButton";
import loginBg from "../assets/login-bg.png";
import logo from "../assets/logo.svg";
import signInIcon from "../assets/sign_in_circle.svg";
import leftLongArrow from "../assets/left-long-arrow.svg";
import stepOneImage from "../assets/step-1.png";
import stepTwoImage from "../assets/step-2.png";
import addIcon from "../assets/add.png";
import PreviewUser from "../components/signin-signup/PreviewUser";
const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <header className="px-20 py-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white mr-10">
              <img src={leftLongArrow} alt="Left" className="mr-2" /> Back to
              home
            </Link>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <p className="flex items-center text-white">
              <img src={signInIcon} alt="Icon" />
              Already registered? <Link to="/">Login now</Link>
            </p>
          </div>
        </div>
      </header>

      <main className="mb-12">
        <AccessContainer>
          <div className="mb-12">
            <WelcomeTitle
              title="Welcome to DexLoot"
              text="Register into DexLoot Smart Contract for FREE. 
A one time simple registration process."
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-10">
              <div className="space-y-4">
                <Step
                  image={stepOneImage}
                  title="Step 1"
                  text="Connect your BEP-20 wallet"
                />
                <AccessButton>
                  <span>Connect Wallet </span>
                  <img src={addIcon} className="w-6" alt="add" />
                </AccessButton>
              </div>
              <div className="space-y-4">
                <Step
                  image={stepTwoImage}
                  title="Step 2"
                  text="Register into Users Smart Contract"
                />
                <AccessButton>
                  <span>Register for Free </span>
                  <img src={addIcon} className="w-6" alt="add" />
                </AccessButton>
              </div>
            </div>
            <div className="max-w-[320px] ml-auto">
              <PreviewUser />
            </div>
          </div>
        </AccessContainer>
      </main>

      <footer>
        <div className="container mx-auto">
          <div className="max-w-[660px] mx-auto border-t-[#53577B]">
            <UserHelp content="Click here to watch a video to know more on how to register" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
