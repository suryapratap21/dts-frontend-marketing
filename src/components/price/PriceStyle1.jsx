import React from "react";
import PriceTitle from "./PriceTitle";
import PricingContentMain from "./PricingContentMain";

const PriceStyle1 = ({ sectionClass }) => {
  return (
    <>
      <div
        className={`pricing-style-one-area services-details-items default-padding bottom-less ${sectionClass}`}
      >
        <PriceTitle />
        <PricingContentMain />
      </div>
    </>
  );
};

export default PriceStyle1;
