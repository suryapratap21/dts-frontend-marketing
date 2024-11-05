import React from 'react';
import Feature5Data from '@/assets/jsonData/feature/Feature5Data.json'
import SingleFeature5 from './SingleFeature5';

const FeatureStyle5 = () => {
    return (
        <>
            <div className="feature-style-five-area default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center secondary">
                                <h4 className="sub-heading">Premium features</h4>
                                <h2 className="title">Feel the power of technology <br /> by using our Software</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-style-five-grid">
                                {Feature5Data.map(feature =>
                                    <SingleFeature5 feature={feature} key={feature.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureStyle5;