import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import React from "react";
export const metadata = {
  title: "DOT Drug Testing - DrugTestingSites",
};

const ServiceDetailsPage = () => {
  return (
    <>
      {/* <LayoutStyle7 breadCrumb="DOT-Drug-Testing" title="DOT Drug Testing"> */}
      <LayoutStyle7>
        <ServiceDetailsContent />
      </LayoutStyle7>
    </>
  );
};

export default ServiceDetailsPage;
