"use client";
import React from "react";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial2Data from "@/assets/jsonData/testimonial/Testimonial1Data.json";
import SingleTestimonial2 from "./SingleTestimonial2";

const TestimonialStyle2 = () => {
  return (
    <>
      <div
        className="testimonials-style-two-area bg-dark default-padding-top half-shape-light-bottom"
        style={{ backgroundImage: `url(/assets/img/shape/34.png)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-light text-center">
                <h4 className="sub-heading">Testimonials</h4>
                <h2 className="title">Clients Feedback</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fill">
          <div className="row">
            <div className="testimonial-style-two-carousel swiper">
              <Swiper
                modules={[Keyboard, Autoplay, Pagination]}
                freeMode={true}
                grabCursor={true}
                autoplay={false}
                centeredSlides={true}
                initialSlide={1}
                slidesPerView={1}
                loop={true}
                spaceBetween={50}
                keyboard={{
                  enabled: true,
                }}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 2.5,
                  },
                }}
              >
                <div className="swiper-wrapper">
                  {Testimonial2Data.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <SingleTestimonial2 testimonial={testimonial} />
                    </SwiperSlide>
                  ))}
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

export default TestimonialStyle2;
