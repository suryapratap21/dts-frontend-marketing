import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ChooseStyle1 from "@/components/choose/ChooseStyle1";
import PriceStyle1 from "@/components/price/PriceStyle1";
import TestimonialStyle1 from "@/components/testimonial/TestimonialStyle1";
import React from "react";

export const metadata = {
  title: "Pricing - DrugTestingSites",
};

const PricingPage = () => {
  return (
    <>
      <LayoutStyle7>
        <PriceStyle1 priceTitle sectionClass="primary" />
        <ChooseStyle1 />
        <TestimonialStyle1 />
      </LayoutStyle7>
    </>
  );
};

export default PricingPage;
