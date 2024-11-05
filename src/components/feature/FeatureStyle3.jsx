import React from 'react';
import Feature3Data from '@/assets/jsonData/feature/Feature3Data.json'
import SingleFeature3 from './SingleFeature3';

const FeatureStyle3 = () => {
    return (
        <>
            <div className="feature-style-three-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        {Feature3Data.map(feature =>
                            <div className="col-lg-4 col-md-6 mb-30" key={feature.id}>
                                <SingleFeature3 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureStyle3;