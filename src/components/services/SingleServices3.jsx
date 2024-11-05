import Link from 'next/link';
import React from 'react';

const SingleServices3 = ({ service }) => {
    const { icon, text, title } = service

    return (
        <>
            <div className="swiper-slide">
                <div className="services-style-three">
                    <div className="info">
                        <i className={icon}></i>
                        <h3><Link href="#" scroll={false}>{title}</Link></h3>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServices3;