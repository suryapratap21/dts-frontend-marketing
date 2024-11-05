import LayoutStyle5 from '@/components/Layouts/LayoutStyle5';
import AboutStyle5 from '@/components/about/AboutStyle5';
import BannerStyle5 from '@/components/banner/BannerStyle5';
import BlogSolar from '@/components/blog/BlogSolar';
import FeatureStyle4 from '@/components/feature/FeatureStyle4';
import GalleryStyle4 from '@/components/gallery/GalleryStyle4';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle2 from '@/components/process/ProcessStyle2';
import ServicesStyle4 from '@/components/services/ServicesStyle4';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Solar Energy"
}

const SolarEnergy = () => {
    return (
        <>
            <LayoutStyle5>
                <BannerStyle5 />
                <FeatureStyle4 />
                <AboutStyle5 />
                <ServicesStyle4 />
                <ProcessStyle2 />
                <TestimonialStyle1 sectionClass="bg-gray" shapeGreen={true} />
                <GalleryStyle4 />
                <PartnerStyle1 sectionClass="default-padding-bottom" />
                <BlogSolar sectionClass="bg-gray" />
            </LayoutStyle5>
        </>
    );
};

export default SolarEnergy;