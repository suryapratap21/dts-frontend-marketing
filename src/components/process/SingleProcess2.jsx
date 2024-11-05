import Image from 'next/image';
import React from 'react';

const SingleProcess2 = ({ process }) => {
    const { title, steps, thumb } = process

    return (
        <>
            <div className="process-style-two">
                <div className="thumb">
                    <Image src={`/assets/img/process/${thumb}`} alt="Image Not Found" width={600} height={600} />
                    <span>{steps}</span>
                </div>
                <h3>{title}</h3>
            </div>
        </>
    );
};

export default SingleProcess2;