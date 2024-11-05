import LayoutStyle6 from '@/components/Layouts/LayoutStyle6';
import AboutStyle6 from '@/components/about/AboutStyle6';
import BannerStyle6 from '@/components/banner/BannerStyle6';
import ContactStyle1 from '@/components/contact/ContactStyle1';
import FeatureStyle5 from '@/components/feature/FeatureStyle5';
import FunFactStyle2 from '@/components/fun/FunFactStyle2';
import PriceStyle1 from '@/components/price/PriceStyle1';
import SoftwareOverview from '@/components/software/SoftwareOverview';
import SoftwareVideo from '@/components/software/SoftwareVideo';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Software Landing"
}

const SoftwareLanding = () => {
    return (
        <>
            <LayoutStyle6>
                <BannerStyle6 />
                <FeatureStyle5 />
                <FunFactStyle2 />
                <AboutStyle6 />
                <SoftwareOverview />
                <PriceStyle1 priceTitle={true} sectionClass="secondary" />
                <SoftwareVideo />
                <TestimonialStyle1 sectionClass="secondary insurance" shapeBlue={true} />
                <TeamStyle1 sectionClass="bg-gray secondary" teamTitle={true} />
                <ContactStyle1 />
            </LayoutStyle6>
        </>
    );
};

export default SoftwareLanding;