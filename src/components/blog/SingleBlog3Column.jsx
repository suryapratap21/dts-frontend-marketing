import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlog3Column = ({ blog }) => {
    const { id, thumb, date, author, authorIcon, title, btnIcon, btnText } = blog

    return (
        <>
            <div className="blog-style-one">
                <div className="thumb">
                    <Link href={`blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="blog-meta">
                        <ul>
                            <li>
                                <i className={authorIcon}></i>
                                <Link href="#">{author}</Link>
                            </li>
                            <li>{date}</li>
                        </ul>
                    </div>
                    <h4>
                        <Link href={`blog-single-with-sidebar/${id}`}>{title}</Link>
                    </h4>
                    <Link href={`blog-single-with-sidebar/${id}`} className="btn-simple"><i className={btnIcon}></i>{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;