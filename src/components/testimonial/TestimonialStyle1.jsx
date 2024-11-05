"use client"
import Image from 'next/image';
import React from 'react';
import { Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial1Data from '@/assets/jsonData/testimonial/Testimonial1Data.json'
import SingleTestimonial1 from './SingleTestimonial1';
import illustration5 from '@/assets/img/illustration/5.png';
import shape19 from '@/assets/img/shape/19.png';
import shape19Blue from '@/assets/img/shape/19-blue.png';
import shape19Green from '@/assets/img/shape/19-green.png';

const TestimonialStyle1 = ({ sectionClass, shapeBlue, shapeGreen }) => {
    return (
        <>
            <div className={`testimonial-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-4">
                            <div className="testimonial-thumb">
                                <div className="thumb-item">
                                    <Image src={illustration5} width={500} height={705} alt="illustration" />
                                    <div className="mini-shape">
                                        {shapeBlue ? <Image src={shape19Blue} alt="illustration" />
                                            : shapeGreen ? <Image src={shape19Green} alt="illustration" />
                                                : <Image src={shape19} alt="illustration" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="testimonial-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Keyboard, Autoplay]}
                                        freeMode={true}
                                        grabCursor={false}
                                        autoplay={false}
                                        loop={true}
                                        slidesPerView={1}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                    >
                                        {Testimonial1Data.map(testimonial =>
                                            <SwiperSlide key={testimonial.id}>
                                                <SingleTestimonial1 testimonial={testimonial} />
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

export default TestimonialStyle1;