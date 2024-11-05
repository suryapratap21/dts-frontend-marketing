import React from 'react';
import RatingsStar from '../utilities/RatingsStar';
import Image from 'next/image';

const SingleTestimonial2 = ({ testimonial }) => {
    const { quoteThumb, ratings, title, text, name, location, logo } = testimonial

    return (
        <>
            <div className="swiper-slide">
                <div className="testimonial-style-two">
                    <Image src={`/assets/img/shape/${quoteThumb}`} width={135} height={121} alt="Quote" />
                    <div className="top-info">
                        <h3>{title}</h3>
                        <div className="testimonial-rating">
                            <RatingsStar ratings={ratings} />
                        </div>
                    </div>
                    <div className="info">
                        <p>{text}</p>
                    </div>
                    <div className="provider">
                        <div className="content">
                            <h4>{name}</h4>
                            <span>{location}</span>
                        </div>
                        <div className="thumb">
                            <Image src={`/assets/img/logo/${logo}`} width={129} height={37} alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonial2;