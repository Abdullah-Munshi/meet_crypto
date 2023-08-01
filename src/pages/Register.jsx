import React from "react";
import { Link } from "react-router-dom";
import WelcomeTitle from "../components/signin-signup/WelcomeTitle";
import Step from "../components/signin-signup/Step";
import UserHelp from "../components/signin-signup/UserHelp";
import AccessButton from "../components/signin-signup/AccessButton";
import loginBg from "../assets/login-bg.png";
import logo from "../assets/logo.svg";
import signInIcon from "../assets/sign_in_circle.svg";
import stepOneImage from "../assets/step-1.png";
import stepTwoImage from "../assets/step-2.png";
import addIcon from "../assets/add.png";
import lightRingIcon from "../assets/lightring.png";
import obligue from "../assets/obligue.png";
import PreviewUser from "../components/signin-signup/PreviewUser";
const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <header className="px-4 py-6 sm:py-6 sm:px-5 lg:px-20 lg:py-10">
        <div className="grid grid-cols-[80px_1fr] sm:flex sm:justify-between items-center">
          <div className="text-center col-span-3 mb-2 sm:hidden">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Logo" className="w-[135px]" />
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="link-primary-onhover flex items-center text-white text-base font-ibm-plex-sans font-normal sm:mr-7 md:mr-10 hover:text-primary transition duration-200"
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 sm:mr-2.5"
              >
                <path
                  className="transition duration-200"
                  d="M2 7L1.29289 6.29289L0.585786 7L1.29289 7.70711L2 7ZM17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6V8ZM7.29289 0.292893L1.29289 6.29289L2.70711 7.70711L8.70711 1.70711L7.29289 0.292893ZM1.29289 7.70711L7.29289 13.7071L8.70711 12.2929L2.70711 6.29289L1.29289 7.70711ZM2 8H17V6H2V8Z"
                  fill="white "
                />
              </svg>
              <span className="hidden">Back to</span> home
            </Link>
            <Link to="/" className="hidden sm:block">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="text-end">
            <p className="flex items-center justify-end text-white text-base font-ibm-plex-sans font-normal">
              <img src={signInIcon} alt="Icon" className="mr-2 sm:mr-2.5" />
              Already registered?{" "}
              <Link
                to="/login"
                className="ml-1 hover:text-primary transition duration-200"
              >
                {" "}
                Login now
              </Link>
            </p>
          </div>
        </div>
      </header>

      <div className="min-h-[calc(100vh_-_134px)] flex flex-col justify-center">
        <main className="mb-[60px] md:mb-[75px]">
          <div className="px-4 md:px-11 lg:px-0 max-w-[850px] mx-auto">
            <div className="py-12 pt-7">
              <WelcomeTitle
                title="Welcome to DexLoot"
                text="Register into DexLoot Smart Contract for FREE. 
A one time simple registration process."
              />
            </div>
            <div className="md:grid grid-cols-2 items-center gap-6 lg:gap-0 space-y-10 max-w-md mx-auto md:mx-0 md:max-w-none relative">
              <img
                src={obligue}
                alt="obligue"
                className="w-[30px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block"
              />
              <div className="space-y-10 md:max-w-[350px]">
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
                  <AccessButton opacity="opacity-30">
                    <span>Register for Free </span>
                    <img src={lightRingIcon} className="w-6" alt="add" />
                  </AccessButton>
                </div>
              </div>
              <div className="md:max-w-[320px] ml-auto text-center md:text-left">
                <PreviewUser />
              </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="container mx-auto">
            <div className="max-w-[660px] mx-auto border-t border-[#53577B]">
              <UserHelp content="Click here to watch a video to know more on how to register" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;
