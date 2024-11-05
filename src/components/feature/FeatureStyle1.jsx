import React from 'react';
import shape21 from '@/assets/img/shape/21.png'
import Image from 'next/image';
import FeatureProgress1Data from '@/assets/jsonData/feature/FeatureProgress1Data.json'
import SingleFeatureProgress from './SingleFeatureProgress';

const FeatureStyle1 = () => {
    return (
        <>
            <div className="feature-style-one-area half-angle-shape overflow-hidden default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="feature-style-one-heading text-light">
                                <div className="arrow-shape">
                                    <Image src={shape21} alt="Image not found" />
                                </div>
                                <h2 className="title mb-25">Flexibility & Features to Fit Any Team’s Style.</h2>
                                <p>
                                    Our agency’s aim is always to take the product to market as quickly as possible and use
                                    iterative software development approach until we achieve all business goals and fulfil
                                    market & user needs
                                </p>
                                <div className="circle-progress">
                                    {FeatureProgress1Data.map(progress =>
                                        <SingleFeatureProgress progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-1 pl-60 pl-md-15 pl-xs-10 mt-md-50 mt-xs-50">
                            <div className="feature-style-one wow fadeInUp">
                                <div className="icon">
                                    <i className="flaticon-handshake"></i>
                                </div>
                                <div className="info">
                                    <h4>It control solutions</h4>
                                    <p>
                                        Excellence projecting devonshire dispatched remarkably process. Surrounded sir
                                        motionless she end literature. Gay direction neglected but supported yet her.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-style-one wow fadeInUp" data-wow-delay="300ms">
                                <div className="icon">
                                    <i className="flaticon-social-engagement"></i>
                                </div>
                                <div className="info">
                                    <h4>Teamwork Advanced</h4>
                                    <p>
                                        Anotoinng projecting devonshire dispatched remarkably process. Surrounded sir motionless
                                        she end literature. Gay direction neglected but supported yet her.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureStyle1;