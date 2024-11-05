import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleServices4 = ({ service }) => {
    const { id, title, text, icon, btnText, thumb } = service

    return (
        <>
            <div className="service-style-four">
                <div className="info">
                    <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                    <p>{text}</p>
                    <div className="icon">
                        <div className="thumb">
                            <Image src={`/assets/img/icon/${icon}`} width={256} height={256} alt="Image Not Found" />
                        </div>
                        <Link href={`/services-details/${id}`} className="link">{btnText} <i className="fas fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="thumb">
                    <Image src={`/assets/img/service/${thumb}`} alt="Image Not Found" width={800} height={600} />
                </div>
            </div>
        </>
    );
};

export default SingleServices4;