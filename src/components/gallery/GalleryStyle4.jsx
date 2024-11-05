"use client"
import React from 'react';
import Gallery4Data from '@/assets/jsonData/gallery/Gallery4Data.json'
import SingleGallery4 from './SingleGallery4';
import { Autoplay, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const GalleryStyle4 = () => {
    return (
        <>
            <div className="gallery-style-four-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">Project Gallery</h4>
                                <h2 className="title">Latest Projects, <br /> Solutions &  Energy Supplies</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fill">
                    <div className="row">
                        <div className="gallery-style-four-carousel swiper">
                            <Swiper
                                modules={[Keyboard, Autoplay, Pagination]}
                                freeMode={true}
                                grabCursor={true}
                                centeredSlides={true}
                                initialSlide={1}
                                loop={true}
                                spaceBetween={50}
                                keyboard={{
                                    enabled: true,
                                }}
                                autoplay={{
                                    delay: 5000,
                                    stopOnLastSlide: false,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    991: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3.5,
                                        centeredSlides: true,
                                    },
                                }}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                            >
                                <div className="swiper-wrapper">
                                    {Gallery4Data.map(gallery =>
                                        <SwiperSlide key={gallery.id}>
                                            <SingleGallery4 gallery={gallery} />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryStyle4;