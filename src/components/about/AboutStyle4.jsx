"use client"
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import shape51 from '@/assets/img/shape/51.png'
import about12thumb from '@/assets/img/about/12.jpg'
import about5thumb from '@/assets/img/about/5.jpg'
import signature from '@/assets/img/signature.png'

const AboutStyle4 = () => {
    return (
        <>
            <div className="about-style-four-area overflow-hidden bg-gray default-padding-top shape-light-bottom">
                <div className="shape-right-bottom-actual">
                    <Image src={shape51} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-four">
                            <h4 className="sub-heading secondary">About Us</h4>
                            <h2 className="title">Creating a better future <br /> for your loved once</h2>
                            <div className="thumb mt-50 mt-xs-30">
                                <Image src={about12thumb} alt="Image Not Found" />
                                <div className="experience wow fadeInUp">
                                    <h2><strong>1988</strong> Year of establishment</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-four">
                            <div className="fun-fact-box mb-30">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={56} enableScrollSpy /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Active Clients</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={865} enableScrollSpy /></div>
                                        <div className="operator">M</div>
                                    </div>
                                    <span className="medium">Loan Provided</span>
                                </div>
                            </div>
                            <p>
                                Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now  get joy you instrument reasonably.
                            </p>
                            <div className="mt-50 mt-xs-30">
                                <div className="list-item-style-two wow fadeInUp">
                                    <div className="number"><i className="fas fa-check"></i></div>
                                    <div className="info">
                                        <h4>Savings Potential</h4>
                                        <p>
                                            Facilisis leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur but man.
                                        </p>
                                    </div>
                                </div>
                                <div className="list-item-style-two wow fadeInUp" data-wow-delay="500ms">
                                    <div className="number"><i className="fas fa-check"></i></div>
                                    <div className="info">
                                        <h4>Worldwide Coverage</h4>
                                        <p>
                                            Technical leo vel fringilla est ullamcorper. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Non pulvinar neque laoreet suspendisse interdum consectetur..
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="company-autor">
                                <div className="left-info">
                                    <div className="author-thumb">
                                        <Image src={about5thumb} alt="Author Image" />
                                    </div>
                                    <div className="content">
                                        <h4>Alex Martinez</h4>
                                        <span>Managing Director</span>
                                    </div>
                                </div>
                                <div className="right-info">
                                    <Image src={signature} alt="Signature" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle4;