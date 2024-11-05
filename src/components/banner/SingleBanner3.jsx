import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import shape43 from '@/assets/img/shape/43.png'

const SingleBanner3 = ({ banner }) => {
    const { bgThumb, subTitle, title, btnText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover" style={{ background: `url(/assets/img/banner/${bgThumb})` }}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="content">
                            <h4>{subTitle}</h4>
                            <h2>{title}</h2>
                            <ul>
                                {banner.listInfo.map(list =>
                                    <li key={list.id}>{list.listData}</li>
                                )}
                            </ul>
                            <div className="button">
                                <Link className="btn btn-theme secondary btn-md animation" href="/contact-us">{btnText}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape">
                <Image src={shape43} width={464} height={464} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner3;