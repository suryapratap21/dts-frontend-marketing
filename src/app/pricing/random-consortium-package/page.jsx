import PackagePricing from "@/components/price/PackagePricing";
import React from "react";

export const metadata = {
  title: "Pricing - DrugTestingSites",
};

const PricingPage = () => {
  return (
    <div className="container">
      <PackagePricing />
    </div>
  );
};

export default PricingPage;
