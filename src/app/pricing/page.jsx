import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ChooseStyle1 from '@/components/choose/ChooseStyle1';
import PriceStyle1 from '@/components/price/PriceStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Pricing"
}

const PricingPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Pricing" title="Pricing Plan">
                <PriceStyle1 sectionClass="primary" />
                <ChooseStyle1 />
                <TestimonialStyle1 />
            </LayoutStyle7>
        </>
    );
};

export default PricingPage;