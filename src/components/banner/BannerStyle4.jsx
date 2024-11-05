import React from 'react';
import illustration7 from '@/assets/img/illustration/7.png'
import Image from 'next/image';
import Link from 'next/link';

const BannerStyle4 = () => {
    return (
        <>
            <div className="banner-style-four-area text-light bg-cover" style={{ backgroundImage: `url(/assets/img/shape/banner-2.jpg)` }}>
                <div className="banner-style-four">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-50 pr-md-15 pr-xs-15">
                                    <div className="information">
                                        <h2 className="wow fadeInUp" data-wow-delay="500ms" data-wow-duration="400ms">
                                            Grow business <br />with grat <span className="relative">advice</span>
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay="900ms" data-wow-duration="400ms">
                                            Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily.
                                        </p>
                                        <div className="button mt-30 wow fadeInUp" data-wow-delay="1200ms" data-wow-duration="400ms">
                                            <Link className="btn-animation" href="/services"><i className="fas fa-arrow-right"></i> <span>Our Services</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Image src={illustration7} alt="Thumb" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerStyle4;