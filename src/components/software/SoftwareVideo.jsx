"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const SoftwareVideo = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <div className="software-video overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="software-video-preview bg-cover">
                                <div className="video-bg-live" style={{ backgroundImage: `url(/assets/img/banner/20.jpg)` }}>
                                    <div className="shadow-overlay"></div>
                                    <div className="player"></div>
                                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="OSE1K12rm18" onClose={() => setOpen(false)} />
                                    <Link className="popup-youtube video-play-button" onClick={() => setOpen(true)} href="#" scroll={false}>
                                        <i className="fas fa-play"></i>
                                        <div className="effect"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoftwareVideo;