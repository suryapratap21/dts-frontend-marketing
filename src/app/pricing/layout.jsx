import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import React from "react";

export const metadata = {
  title: "Pricing - DrugTestingSites",
};

const PricingLayout = ({ children }) => {
  return (
    <LayoutStyle7>
      <div
        className={`pricing-style-one-area services-details-items default-padding bottom-less primary`}
      >
        <div className="">{children}</div>
      </div>
    </LayoutStyle7>
  );
};

export default PricingLayout;
