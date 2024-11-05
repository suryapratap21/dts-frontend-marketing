import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';

const SingleTeam1 = ({ team }) => {
    const { id, activeClass, memberThumb, designation, name } = team

    return (
        <>
            <div className={`team-style-one ${activeClass}`}>
                <div className="thumb">
                    <Image src={`/assets/img/team/${memberThumb}`} width={800} height={800} alt="Image Not Found" />
                    <div className="social">
                        <ul>
                            <SocialShareStyle3 />
                        </ul>
                    </div>
                </div>
                <div className="info">
                    <span>{designation}</span>
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                </div>
            </div>
        </>
    );
};

export default SingleTeam1;