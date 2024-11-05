"use client"
import React from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json'
import SingleTeam2 from './SingleTeam2';
import { Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamHeading1 from './TeamHeading1';
import TeamHeading2 from './TeamHeading2';

const TeamStyle2 = ({ hasText }) => {
    return (
        <>
            <div className="team-style-two-area secondary bg-gray default-padding" style={{ backgroundImage: `url(/assets/img/shape/27.png)` }}>

                {hasText ? <TeamHeading1 /> : <TeamHeading2 />}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-carousel swiper">
                                <Swiper
                                    modules={[Keyboard, Autoplay]}
                                    freeMode={true}
                                    grabCursor={false}
                                    autoplay={false}
                                    loop={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        }
                                    }}
                                >
                                    {TeamData.map(team =>
                                        <SwiperSlide key={team.id}>
                                            <SingleTeam2 team={team} />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamStyle2;