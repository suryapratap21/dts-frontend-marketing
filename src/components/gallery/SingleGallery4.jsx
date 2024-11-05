import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleGallery4 = ({ gallery }) => {
    const { thumb, title, subTitle } = gallery

    return (
        <>
            <div className="swiper-slide">
                <div className="gallery-style-four">
                    <Image src={`/assets/img/portfolio/${thumb}`} alt="Image not Found" width={510} height={510} />
                    <div className="overlay">
                        <h4><Link href="#" scroll={false}>{title}</Link></h4>
                        <span>{subTitle}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleGallery4;