"use client"
import React from 'react';
import Services3Data from '@/assets/jsonData/services/Services3Data.json'
import SingleServices3 from './SingleServices3';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ServicesStyle3 = () => {
    return (
        <>
            <div className="services-style-three-area default-padding-top half-bg-dark" style={{ backgroundImage: `url(/assets/img/shape/52.png)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading secondary text-center">
                                <h4 className="sub-heading">Our Services</h4>
                                <h2 className="title">Excellent service and <br /> support for you</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="services-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Keyboard, Autoplay, Navigation, Pagination]}
                                        freeMode={true}
                                        grabCursor={true}
                                        loop={true}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        autoplay={{
                                            delay: 3000,
                                            stopOnLastSlide: false,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={{
                                            nextEl: ".services-button-next",
                                            prevEl: ".services-button-prev"
                                        }}
                                        pagination={{
                                            el: '.services-pagination',
                                            type: 'fraction',
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            800: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                            },
                                            992: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },
                                            1250: {
                                                slidesPerView: 3.6,
                                                spaceBetween: 50,
                                            },
                                        }}
                                    >
                                        {Services3Data.map(service =>
                                            <SwiperSlide key={service.id}>
                                                <SingleServices3 service={service} />
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                                <div className="services-swiper-nav">
                                    <div className="services-pagination"></div>
                                    <div className="services-button-prev"></div>
                                    <div className="services-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStyle3;