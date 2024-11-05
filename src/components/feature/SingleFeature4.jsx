import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleFeature4 = ({ feature }) => {
    const { icon, title, text } = feature

    return (
        <>
            <div className="feature-style-four">
                <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={256} height={256} />
                <h4><Link href="#" scroll={false}>{title}</Link></h4>
                <p>{text}</p>
            </div>
        </>
    );
};

export default SingleFeature4;