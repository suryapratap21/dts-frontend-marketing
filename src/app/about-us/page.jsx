import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle1 from '@/components/about/AboutStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - About Us"
}

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="About-us" title="About Us">
                <AboutStyle1 />
                <ProcessStyle1 sectionClass="bg-gray" />
                <PartnerStyle1 sectionClass="default-padding" />
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                <TestimonialStyle1 />
            </LayoutStyle7>
        </>
    );
};

export default AboutUsPage;