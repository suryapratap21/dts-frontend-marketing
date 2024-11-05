import Image from 'next/image';
import React from 'react';
import about7Thumb from '@/assets/img/about/7.jpg'
import about8Thumb from '@/assets/img/about/8.jpg'
import anim5Shape from '@/assets/img/shape/anim-5.png'
import Link from 'next/link';

const AboutStyle2 = ({ sectionClass }) => {
    return (
        <>
            <div className={`about-style-two-area overflow-hidden bg-contain default-padding ${sectionClass ? sectionClass : ''}`}
                style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}>
                <div className="container">
                    <div className="row align-center">

                        <div className="col-lg-5 about-style-two">
                            <div className="thumb">
                                <Image src={about7Thumb} alt="Image Not Found" />
                                <Image src={about8Thumb} alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>15</strong> Years experience</h2>
                                </div>
                                <div className="shape">
                                    <Image src={anim5Shape} alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-two col-lg-6 offset-lg-1">
                            <h2 className="title">Finance Consulting for <br /> Challenging Times</h2>
                            <p>
                                We work to understand your issues and are driven to ask better questions in the pursuit of
                                making work. Me contained explained my education. Vulgar as hearts by garret. Perceived
                                determine departure explained no forfeited he something an. Contrasted dissimilar get joy you
                                instrument out reasonably. Again keep.
                            </p>
                            <div className="default-features mt-30">
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-investment-3"></i>
                                        <h4>Targeting & <br /> Positioning</h4>
                                    </Link>
                                </div>
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-progress"></i>
                                        <h4>Unique Ideas <br /> & Solution</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle2;