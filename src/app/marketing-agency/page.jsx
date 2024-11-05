import LayoutStyle3 from '@/components/Layouts/LayoutStyle3';
import AboutStyle3 from '@/components/about/AboutStyle3';
import BannerStyle4 from '@/components/banner/BannerStyle4';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import FeatureStyle2 from '@/components/feature/FeatureStyle2';
import MarketingStyle1 from '@/components/marketing/MarketingStyle1';
import PartnerStyle2 from '@/components/partner/PartnerStyle2';
import PriceStyle1 from '@/components/price/PriceStyle1';
import ProjectStyle3 from '@/components/project/ProjectStyle3';
import RequestCallStyle2 from '@/components/request/RequestCallStyle2';
import TeamStyle2 from '@/components/team/TeamStyle2';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Marketing Agency"
}

const MarketingAgency = () => {
    return (
        <>
            <LayoutStyle3>
                <BannerStyle4 />
                <FeatureStyle2 />
                <AboutStyle3 />
                <PartnerStyle2 />
                <MarketingStyle1 />
                <TeamStyle2 hasText={true} />
                <PriceStyle1 priceTitle={true} sectionClass="secondary" />
                <RequestCallStyle2 />
                <ProjectStyle3 />
                <TestimonialStyle1 sectionClass="secondary bg-gray" shapeBlue={true} />
                <BlogStyle1 sectionClass="secondary" />
            </LayoutStyle3>
        </>
    );
};

export default MarketingAgency;