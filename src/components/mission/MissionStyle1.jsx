import React from 'react';
import shape47 from '@/assets/img/shape/47.png';
import Image from 'next/image';
import SingleFaq1 from '../faq/SingleFaq1';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';
import MissionTab1 from './MissionTab1';

const MissionStyle1 = () => {
    return (
        <>
            <div className="mission-vision-style-one-area overflow-hidden default-padding" style={{ backgroundImage: `url(/assets/img/shape/banner-4.png)` }}>
                <div className="shape-top-left">
                    <Image src={shape47} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <MissionTab1 />
                        </div>
                        <div className="col-lg-5 offset-lg-1 mt-md-50 mt-xs-40">
                            <div className="faq-style-one secondary">
                                <div className="accordion" id="faqAccordion">
                                    {Faq1Data.slice(0, 3).map(faq =>
                                        <SingleFaq1 faq={faq} key={faq.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionStyle1;