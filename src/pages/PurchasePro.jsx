import React from "react";
import PromoBanner from "../components/dashboard/PromoBanner";
import {
  TitleBase,
  Button,
  SVGLighting,
  FeatureBlk,
} from "../components/Utility";
import MembershipGraph from "../components/dashboard/MembershipGraph";
import directionIcon from "../assets/direction.svg";

const PurchasePro = () => {
  return (
    <>
      <div className="space-y-10">
        <div className="-mr-6">
          <div className="grid grid-cols-4 gap-6">
            <PromoBanner />
            <PromoBanner />
            <PromoBanner />
            <PromoBanner />
          </div>
        </div>
        <div>
          <div className="mb-6">
            <TitleBase>Become a PRO</TitleBase>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 2xl:gap-6">
            <div className="space-y-9">
              <div className="bg-gradient-nine border border-[#1D1A2D] rounded-10 p-8">
                <h5>PRO membership at just</h5>
                <div>$25</div>
                <span>monthly</span>

                <Button>
                  PURCHASE NOW
                  <SVGLighting />
                </Button>
              </div>
              <div className="bg-[#1C2731] border border-[#1D1A2D] rounded-10 p-8">
                <h5>
                  How the smart contract <br />
                  distributes the membership Fee
                </h5>
                <MembershipGraph />
                <div>
                  <img src={directionIcon} alt="direction" />
                  <p>
                    Distribution happens on chain and the BUSD is sent directly
                    to wallets.
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-primary text-xs_next font-ibm-plex-sans font-bold">
                    No Claiming Required
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h4>Compare PRO with FREE</h4>
                <div>
                  <FeatureBlk
                    title="Earnings Multiplier"
                    text="Base earning multiplier you will earn when you watch an ad."
                  />
                  <div>
                    <p>
                      PRO : <span>x2</span>
                    </p>
                    <p>
                      FREE : <span>x1</span>
                    </p>
                  </div>
                </div>
                <div>
                  <FeatureBlk
                    title="Offerwalls Multiplier
                    "
                    text="Base earning multiplier you will earn when you complete offerwall tasks"
                  />
                  <div>
                    <p>
                      PRO : <span>x2</span>
                    </p>
                    <p>
                      FREE : <span>x1</span>
                    </p>
                  </div>
                </div>
                <div>
                  <FeatureBlk
                    title="Join PRO only Contests"
                    text="Able to join contests with PRO only badge
                    in Play2Win Arena"
                  />
                  <div>
                    <p>
                      PRO : <span>x2</span>
                    </p>
                    <p>
                      FREE : <span>x1</span>
                    </p>
                  </div>
                </div>
                <div>
                  <FeatureBlk
                    title="Level 1 Referral Commission"
                    text="Commission from your Level 1 referrals when they purchase/renew PRO membership"
                  />
                  <div>
                    <p>
                      PRO : <span>x2</span>
                    </p>
                    <p>
                      FREE : <span>x1</span>
                    </p>
                  </div>
                </div>
                <div>
                  <FeatureBlk
                    title="Level 2 Referral Commission"
                    text="Commission from your Level 2 referrals when they purchase/renew PRO membership"
                  />
                  <div>
                    <p>
                      PRO : <span>x2</span>
                    </p>
                    <p>
                      FREE : <span>x1</span>
                    </p>
                  </div>
                </div>
                <div>
                  <FeatureBlk
                    title="Priority Alerts"
                    text="Get notified when new ads, offerwalls are introduced into the platform"
                  />
                  <div>
                    <p>
                      PRO : <span>x2</span>
                    </p>
                    <p>
                      FREE : <span>x1</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <svg
          width="144"
          height="199"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5817 35.6209C32.5817 35.6209 33.0251 33.2052 35.467 32.5982C35.467 32.5982 32.4131 32.3479 32.5817 35.6209Z"
            fill="white"
          />

          <path
            d="M25.7678 136.301C28.5532 134.229 31.1075 131.857 33.3745 129.235C36.3348 125.806 41.2623 124.892 45.1781 127.157L65.9999 139.204C70.865 142.02 72.1827 148.491 68.7665 152.966C54.9083 171.083 34.2801 183.73 10.6604 187.091C5.03968 187.892 0.00598145 183.524 0.00598145 177.829V153.685C0.00598145 149.286 3.05992 145.431 7.36292 144.549C10.4668 143.917 13.4583 142.972 16.2999 141.751C16.531 141.651 16.7496 141.551 16.9682 141.432C18.517 140.637 24.9934 137.264 25.7678 136.301Z"
            fill="#36B0E2"
          />

          <text x="40" y="150" font-size="12" fill="black">
            10x
          </text>
        </svg>
      </div>
    </>
  );
};

export default PurchasePro;
