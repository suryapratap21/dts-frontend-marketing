"use client";
import React from 'react';
import Partner2Data from '@/assets/jsonData/partner/Partner2Data.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const PartnerStyle2 = () => {
    return (
        <>
            <div className="partner-style-two-area overflow-hidden bg-gradient-secondary text-light default-padding">
                <div className="partner-shape" style={{ backgroundImage: `url(/assets/img/shape/map-light.png)` }}></div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <div className="partner-heading">
                                <h3>Trusted by <br /> <strong>180K</strong> global brands</h3>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="clients-style-two-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Keyboard, Autoplay]}
                                        loop={true}
                                        spaceBetween={15}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        breakpoints={{
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            },
                                            992: {
                                                slidesPerView: 3,
                                                spaceBetween: 30,
                                            }
                                        }}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false
                                        }}
                                    >
                                        {Partner2Data.map(partner =>
                                            <SwiperSlide key={partner.id}>
                                                <Image src={`/assets/img/logo/${partner.thumb}`} width={400} height={400} alt="Thumb" />
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerStyle2;