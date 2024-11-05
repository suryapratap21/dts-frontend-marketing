import React from 'react';
import EstimateForm from '../form/EstimateForm';
import about13 from '@/assets/img/about/13.jpg'
import shape53 from '@/assets/img/shape/53.png'
import Image from 'next/image';

const EstimateStyle1 = () => {
    return (
        <>
            <div className="estimate-area bg-dark text-light default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="estimate-style-one">
                                <h4 className="sub-heading secondary">free estimate</h4>
                                <h2 className="title">Get and insurance quote <br /> to get started</h2>
                                <div className="esitmate-form mt-40">
                                    <EstimateForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="estimate-thumb">
                                <Image src={about13} alt="Image Not Found" />
                                <div className="shape">
                                    <Image src={shape53} alt="Shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EstimateStyle1;