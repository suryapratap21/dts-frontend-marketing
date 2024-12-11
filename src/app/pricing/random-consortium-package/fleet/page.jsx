import React from "react";
import randomConsortiumPrice from "@/assets/jsonData/price/RandomConsortiumPrice.json";
import PricingCards from "../PricingCards";

export const metadata = {
  title: "Setup Fleet Account - DrugTestingSites",
};

const FleetAccount = () => {
  return (
    <div
      // className="container-full"
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <PricingCards data={randomConsortiumPrice["fleet"]} />
    </div>
  );
};

export default FleetAccount;
