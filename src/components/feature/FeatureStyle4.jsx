import React from 'react';
import Feature4Data from '@/assets/jsonData/feature/Feature4Data.json'
import SingleFeature4 from './SingleFeature4';

const FeatureStyle4 = () => {
    return (
        <>
            <div className="feature-style-four-area text-center default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        {Feature4Data.map(feature =>
                            <div className="col-lg-4 feature-style-four-single" key={feature.id}>
                                <SingleFeature4 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureStyle4;