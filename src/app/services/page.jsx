import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import PartnerStyle1 from "@/components/partner/PartnerStyle1";
import ServicesStyle1 from "@/components/services/ServicesStyle1";
import React from "react";

export const metadata = {
  title: "Services - DrugTestingSites",
};

const ServicesPage = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="services" title="Our Services">
        <ServicesStyle1 />
        <PartnerStyle1 sectionClass="default-padding bg-gray" />
      </LayoutStyle7>
    </>
  );
};

export default ServicesPage;
