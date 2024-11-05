import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleFeature2 = ({ feature }) => {
    const { icon, title, text } = feature

    return (
        <>
            <div className="feature-style-two">
                <Image src={`/assets/img/icon/${icon}`} width={430} height={430} alt="Icon" />
                <h4><Link href="#" scroll={false}>{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleFeature2;