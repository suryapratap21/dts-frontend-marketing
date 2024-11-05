import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
// import ContactMap from "@/components/contact/ContactMap";
import ContactUsContent from "@/components/contact/ContactUsContent";
import React from "react";

export const metadata = {
  title: "Contact - DrugTestingSites",
};

const ContactUs = () => {
  return (
    <>
      <LayoutStyle7 breadCrumb="Contact" title="Contact Us">
        <ContactUsContent />
        {/* <ContactMap /> */}
      </LayoutStyle7>
    </>
  );
};

export default ContactUs;
