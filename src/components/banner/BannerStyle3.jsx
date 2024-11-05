"use client"
import React from 'react';
import Banner3Data from '@/assets/jsonData/banner/Banner3Data.json'
import { Autoplay, EffectFade, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleBanner3 from './SingleBanner3';

const BannerStyle3 = () => {
    return (
        <>
            <div className="banner-area zoom-effect bg-gray navigation-circle banner-style-three-area overflow-hidden">
                <div className="banner-style-two-carousel">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Keyboard, Autoplay, EffectFade, Navigation]}
                            direction={"horizontal"}
                            grabCursor={true}
                            loop={true}
                            speed={3000}
                            autoplay={{
                                delay: 5000,
                                stopOnLastSlide: false,
                                disableOnInteraction: false,
                            }}
                            keyboard={{
                                enabled: true,
                            }}
                            effect={'fade'}
                            fadeEffect={{
                                crossFade: true
                            }}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            }}
                        >
                            {Banner3Data.map(banner =>
                                <SwiperSlide key={banner.id} className='banner-style-three'>
                                    <SingleBanner3 banner={banner} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </>
    );
};

export default BannerStyle3;