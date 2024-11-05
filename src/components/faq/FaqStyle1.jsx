import React from 'react';
import illustration6 from '@/assets/img/illustration/6.png'
import Image from 'next/image';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json'
import SingleFaq1 from './SingleFaq1';

const FaqStyle1 = ({ fullFaq }) => {
    return (
        <>
            <div className="faq-style-one-area relative" style={{ backgroundImage: `url(/assets/img/shape/32.png)` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="faq-style-one default-padding">
                                <h4 className="sub-heading">Basic faq</h4>
                                <h2 className="title mb-30">Common Question <br /> for this project</h2>
                                <div className="accordion" id="faqAccordion">
                                    {fullFaq ?
                                        <>
                                            {Faq1Data.map(faq =>
                                                <SingleFaq1 faq={faq} key={faq.id} />
                                            )}
                                        </> :
                                        <>
                                            {Faq1Data.slice(0, 3).map(faq =>
                                                <SingleFaq1 faq={faq} key={faq.id} />
                                            )}
                                        </>}

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 mt-120 mt-md-50 mt-xs-30">
                            <div className="faq-thumb">
                                <Image src={illustration6} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqStyle1;