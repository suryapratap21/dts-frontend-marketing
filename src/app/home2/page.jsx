import LayoutStyle2 from "@/components/Layouts/LayoutStyle2";
import AboutStyle2 from "@/components/about/AboutStyle2";
import BannerStyle2 from "@/components/banner/BannerStyle2";
import FaqStyle1 from "@/components/faq/FaqStyle1";
import FeatureStyle1 from "@/components/feature/FeatureStyle1";
import PartnerStyle1 from "@/components/partner/PartnerStyle1";
import ServicesStyle2 from "@/components/services/ServicesStyle2";
import TestimonialStyle2 from "@/components/testimonial/TestimonialStyle2";
import ProjectStyle2 from "@/components/project/ProjectStyle2";
import React from "react";
import ContactStyle2 from "@/components/contact/ContactStyle2";
import FunFactStyle1 from "@/components/fun/FunFactStyle1";
import BlogStyle2 from "@/components/blog/BlogStyle2";

export const metadata = {
  title: "DrugTestingSites - Your partner for all drug testing needs",
};

const Home2 = () => {
  return (
    <>
      <LayoutStyle2>
        <BannerStyle2 />
        <FeatureStyle1 />
        <ServicesStyle2 />
        <PartnerStyle1 sectionClass="default-padding" />
        <AboutStyle2 sectionClass="bg-gray" />
        <FaqStyle1 />
        <TestimonialStyle2 />
        <ProjectStyle2 projectTitle={true} />
        <ContactStyle2 />
        <FunFactStyle1 />
        <BlogStyle2 />
      </LayoutStyle2>
    </>
  );
};

export default Home2;
