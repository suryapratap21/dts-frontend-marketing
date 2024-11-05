import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PhotoView } from 'react-photo-view';

const SingleProject3 = ({ project }) => {
    const { thumb, icon, tags, title } = project

    return (
        <>
            <div className="gallery-item">
                <div className="gallery-style-three">
                    <div className="thumb">
                        <Image src={`/assets/img/gallery/${thumb}`} width={800} height={600} alt="Thumb" />
                        <Link href="#" className="item popup-gallery" scroll={false}>
                            <PhotoView src={`/assets/img/gallery/${thumb}`} alt="image">
                                <span>
                                    <i className={icon}></i>
                                </span>
                            </PhotoView>
                        </Link>
                    </div>
                    <div className="overlay">
                        <div className="content">
                            <span>{tags}</span>
                            <h4><Link href="#">{title}</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject3;