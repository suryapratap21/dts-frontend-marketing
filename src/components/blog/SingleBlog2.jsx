import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBlog2 = ({ blog }) => {
    const { id, blogClass, thumb, badge, date, author, title, text } = blog

    return (
        <>
            <div className={`blog-style-one solid ${blogClass}`}>
                <div className="thumb">
                    <Image src={`/assets/img/blog/${thumb}`} width={800} height={900} alt="Image Not Found" />
                    <div className="tags"><Link href="#" scroll={false}>{badge}</Link></div>
                    <div className="info">
                        <div className="blog-meta">
                            <ul>
                                <li>
                                    <Link href="#" scroll={false}><i className="fas fa-user"></i> {author}</Link>
                                </li>
                                <li>{date}</li>
                            </ul>
                        </div>
                        <h4>
                            <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h4>
                        <p>{[text]}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2;