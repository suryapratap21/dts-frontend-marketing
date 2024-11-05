import React from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import SingleBlogStandard from './SingleBlogStandard';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BlogStandardContent = () => {
    return (
        <>
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {blogData.slice(0, 3).map(blog =>
                                    <SingleBlogStandard blog={blog} key={blog.id} />
                                )}
                            </div>
                            <div className="row">
                                <div className="col-md-12 pagi-area text-center">
                                    <nav aria-label="navigation">
                                        <ul className="pagination">
                                            <li className="page-item"><Link className="page-link" href="#" onClick={handleSmoothScroll}><i className="fas fa-angle-double-left"></i></Link></li>
                                            <li className="page-item active"><a className="page-link" href="#" onClick={handleSmoothScroll}>1</a></li>
                                            <li className="page-item"><Link className="page-link" href="#" onClick={handleSmoothScroll}>2</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#" onClick={handleSmoothScroll}>3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#" onClick={handleSmoothScroll}><i className="fas fa-angle-double-right"></i></Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContent;