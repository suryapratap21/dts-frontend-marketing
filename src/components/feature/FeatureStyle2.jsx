import Image from 'next/image';
import React from 'react';
import shape40 from '@/assets/img/shape/40.png'
import Feature2Data from '@/assets/jsonData/feature/Feature2Data.json'
import SingleFeature2 from './SingleFeature2';

const FeatureStyle2 = () => {
    return (
        <>
            <div className="feature-style-two-area default-padding bottom-less bg-gray" style={{ backgroundImage: `url(/assets/img/shape/45.png)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading secondary text-center">
                                <h4 className="sub-heading">Our Features</h4>
                                <h2 className="title">We Are Better Why</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row relative">
                        {Feature2Data.map(feature =>
                            <div className="col-lg-4 col-md-6 mb-30" key={feature.id}>
                                <SingleFeature2 feature={feature} />
                            </div>
                        )}
                        <div className="shape-right-bottom">
                            <Image src={shape40} alt="Image Not found" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureStyle2;