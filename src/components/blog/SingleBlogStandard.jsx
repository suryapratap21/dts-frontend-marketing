import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlogStandard = ({ blog }) => {
    const { id, date, dateIcon, author, authorIcon, title, thumbFull, text, btnText } = blog

    return (
        <>
            <div className="item">
                <div className="thumb">
                    <Link href={`/blog-single/${id}`}>
                        <Image src={`/assets/img/blog/${thumbFull}`} width={1900} height={995} alt="Thumb" />
                    </Link>
                </div>
                <div className="info">
                    <div className="meta">
                        <ul>
                            <li>
                                <Link href="#" scroll={false}><i className={dateIcon}></i> {date}</Link>
                            </li>
                            <li>
                                <Link href="#" scroll={false}><i className={authorIcon}></i> {author}</Link>
                            </li>
                        </ul>
                    </div>
                    <h2><Link href={`/blog-single/${id}`}>{title}</Link></h2>
                    <p>{text}</p>
                    <Link className="btn mt-10 btn-md circle btn-theme animation" href={`/blog-single/${id}`}>{btnText}</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogStandard;