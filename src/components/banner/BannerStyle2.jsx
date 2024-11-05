"use client"
import React from 'react';
import { Autoplay, EffectFade, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banner2Data from '@/assets/jsonData/banner/Banner2Data.json'
import SingleBanner2 from './SingleBanner2';

const BannerStyle2 = () => {
    return (
        <>
            <div className="banner-area banner-style-two content-right navigation-icon-solid navigation-right-botom navigation-custom-large overflow-hidden bg-cover"
                style={{ background: `url(/assets/img/shape/banner.jpg)` }}>
                <div className="banner-style-two-carousel">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Keyboard, Autoplay, EffectFade, Navigation]}
                            direction={"horizontal"}
                            effect={'fade'}
                            loop={true}
                            keyboard={{
                                enabled: true,
                            }}
                            fadeEffect={{
                                crossFade: true
                            }}
                            speed={3000}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                        >
                            {Banner2Data.map(banner =>
                                <SwiperSlide key={banner.id} className='banner-style-two'>
                                    <SingleBanner2 banner={banner} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div className="swiper-nav-left">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default BannerStyle2;