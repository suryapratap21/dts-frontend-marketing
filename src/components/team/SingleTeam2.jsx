import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';

const SingleTeam2 = ({ team }) => {
    const { id, memberThumb, name, designation } = team

    return (
        <>
            <div className="team-style-two">
                <div className="thumb">
                    <Image src={`/assets/img/team/${memberThumb}`} width={800} height={900} alt="Thumb" />
                    <ul className="social">
                        <SocialShareStyle3 />
                    </ul>
                </div>
                <div className="info">
                    <div className="content">
                        <h4 className="title"><Link href={`/team-details/${id}`}>{name}</Link></h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeam2;