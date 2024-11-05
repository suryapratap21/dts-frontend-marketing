import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const SingleBanner5 = ({ banner }) => {
    const { thumb, subTitle, title1, title2, btnText, shape, videoId } = banner

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="banner-thumb bg-cover" style={{ background: `url(/assets/img/banner/${thumb})` }}></div>
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7">
                        <div className="content">
                            <h4>{subTitle}</h4>
                            <h2>{title1} <br /> {title2}</h2>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
                            <Link className="popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)} href="#" scroll={false}>
                                <div className="effect"></div>
                                <span><i className="fas fa-play"></i> {btnText}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-bg">
                <img src={`/assets/img/shape/${shape}`} alt="Shape" />
            </div>
        </>
    );
};

export default SingleBanner5;