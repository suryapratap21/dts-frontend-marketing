"use client"
import React from 'react';
import about15 from '@/assets/img/about/15.jpg'
import about16 from '@/assets/img/about/16.jpg'
import Image from 'next/image';
import CountUp from 'react-countup';

const AboutStyle5 = () => {
    return (
        <>
            <div className="about-style-five-area default-padding overflow-hidden bg-cover" style={{ background: `url(/assets/img/shape/banner-3.jpg)` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-style-five-thumb">
                                <Image src={about16} alt="Image Not Found" />
                                <Image src={about15} alt="Image Not Found" />
                                <h2>Welcome to Our Renergy Company</h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-style-five-info">
                                <h2> Our mission is to make solar energy accessible</h2>
                                <p>
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected.
                                </p>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-license"></i>
                                        </div>
                                        <div className="fun-fact">
                                            <div className="counter">
                                                <div className="timer"><CountUp end={1500} enableScrollSpy /></div>
                                                <div className="operator">K</div>
                                            </div>
                                            <span className="medium">Installed Capacity</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-global"></i>
                                        </div>
                                        <div className="fun-fact">
                                            <div className="counter">
                                                <div className="timer"><CountUp end={70} enableScrollSpy /></div>
                                                <div className="operator">%</div>
                                            </div>
                                            <span className="medium">Save World</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle5;