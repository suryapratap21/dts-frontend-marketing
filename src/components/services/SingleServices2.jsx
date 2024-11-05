import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServices2 = ({ service }) => {
    const { id, thumb, title, icon, text, btnText } = service

    return (
        <>
            <div className="services-style-two active">
                <div className="thumb">
                    <Image src={`/assets/img/service/${thumb}`} width={800} height={600} alt="Thumb" />
                    <div className="title">
                        <Link href={`/services-details/${id}`}>
                            <i className={icon}></i>
                            <h4>{title}</h4>
                        </Link>
                    </div>
                </div>
                <div className="info">
                    <p>{text}</p>
                    <div className="button">
                        <Link href={`/services-details/${id}`}>{btnText}</Link>
                        <div className="devider"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleServices2;