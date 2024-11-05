"use client"
import React from 'react';
import Banner5Data from '@/assets/jsonData/banner/Banner5Data.json'
import SingleBanner5 from './SingleBanner5';
import { EffectFade, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerStyle5 = () => {
    return (
        <>
            <div className="banner-area banner-solar navigation-circle overflow-hidden" style={{ background: `url(/assets/img/shape/54.png)` }}>
                <div className="banner-fade">
                    <Swiper
                        modules={[Keyboard, Navigation, EffectFade]}
                        direction={"horizontal"}
                        autoplay={false}
                        loop={true}
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
                        {Banner5Data.map(banner =>
                            <SwiperSlide key={banner.id} className="banner-style-five">
                                <SingleBanner5 banner={banner} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div >
        </>
    );
};

export default BannerStyle5;