import LayoutStyle4 from '@/components/Layouts/LayoutStyle4';
import AboutStyle4 from '@/components/about/AboutStyle4';
import BannerStyle3 from '@/components/banner/BannerStyle3';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import EstimateStyle1 from '@/components/estimate/EstimateStyle1';
import FeatureStyle3 from '@/components/feature/FeatureStyle3';
import MissionStyle1 from '@/components/mission/MissionStyle1';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ServicesStyle3 from '@/components/services/ServicesStyle3';
import TeamStyle2 from '@/components/team/TeamStyle2';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Insurance"
}

const Insurance = () => {
    return (
        <>
            <LayoutStyle4>
                <BannerStyle3 />
                <FeatureStyle3 />
                <AboutStyle4 />
                <ServicesStyle3 />
                <EstimateStyle1 />
                <PartnerStyle1 sectionClass="default-padding" />
                <TeamStyle2 hasText={false} />
                <MissionStyle1 />
                <TestimonialStyle1 sectionClass="secondary bg-gray" shapeBlue={true} />
                <BlogStyle1 sectionClass="secondary" />
            </LayoutStyle4>
        </>
    );
};

export default Insurance;