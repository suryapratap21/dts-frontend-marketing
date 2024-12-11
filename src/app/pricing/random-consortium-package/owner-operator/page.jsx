import React from "react";
import randomConsortiumPrice from "@/assets/jsonData/price/RandomConsortiumPrice.json";
import PricingCards from "../PricingCards";

export const metadata = {
  title: "Setup Owner Operator Account - DrugTestingSites",
};

const OwnerOperatorAccount = () => {
  return (
    <div
      // className="container-full"
      style={{
        maxWidth: "1500px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <PricingCards data={randomConsortiumPrice["owner-operator"]} />
    </div>
  );
};

export default OwnerOperatorAccount;
