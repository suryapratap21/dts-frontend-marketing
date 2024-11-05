"use client"
import React from 'react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Project1Data from "@/assets/jsonData/project/Project1Data.json"
import SingleProject1 from './SingleProject1';

const ProjectStyle1 = () => {
    return (
        <>
            <div className="project-style-one-area default-padding bg-dark bottom-shape-light">
                <div className="container">
                    <div className="heading-left text-light">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="content-left">
                                    <h5 className="sub-heading">Popular Projects</h5>
                                    <h2 className="heading">Our most recent Completed Projects</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-style-one-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Keyboard, Autoplay, Pagination, Navigation]}
                                        freeMode={true}
                                        grabCursor={false}
                                        autoplay={false}
                                        loop={true}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        navigation={{
                                            nextEl: '.project-button-next',
                                            prevEl: '.project-button-prev',
                                        }}
                                        pagination={{
                                            el: '.project-pagination',
                                            clickable: true,
                                            type: 'fraction',
                                        }}
                                    >
                                        {Project1Data.map(project =>
                                            <SwiperSlide key={project.id}>
                                                <SingleProject1 project={project} />
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                                <div className="project-swiper-nav">
                                    <div className="project-pagination"></div>
                                    <div className="project-button-prev"></div>
                                    <div className="project-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectStyle1;