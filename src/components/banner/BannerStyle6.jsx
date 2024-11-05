"use client"
import React from 'react';
import dashboard1 from '@/assets/img/dashboard/1.jpg'
import dashboard2 from '@/assets/img/dashboard/2.jpg'
import Image from 'next/image';
import Link from 'next/link';

const BannerStyle6 = () => {
    return (
        <>
            <div className="banner-style-six-area text-light bg-cover" style={{ backgroundImage: `url(/assets/img/shape/banner-4.jpg)` }}>
                <div className="banner-style-six">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-7 pr-80 pr-md-15 pr-xs-15">
                                    <div className="information mt--100 mt-md-0 mt-xs-0">
                                        <h4 className="wow fadeInUp" data-wow-delay="300ms" data-wow-duration="200ms"><strong># No1</strong> Trending Apps On Play Store</h4>
                                        <h2 className="wow fadeInUp" data-wow-delay="500ms" data-wow-duration="400ms">
                                            Get Benifit By Using Trending Apps
                                        </h2>
                                        <p className="wow fadeInUp" data-wow-delay="900ms" data-wow-duration="400ms">
                                            Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret.
                                        </p>
                                        <div className="button mt-30 wow fadeInUp" data-wow-delay="1200ms" data-wow-duration="400ms">
                                            <Link className="btn-animation" href="#" scroll={false}><i className="fas fa-arrow-right"></i> <span>Download Now</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <Image src={dashboard1} alt="Thumb" />
                                        <Image src={dashboard2} alt="Thumb" />
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

export default BannerStyle6;