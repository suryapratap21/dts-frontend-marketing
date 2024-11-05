import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Blog2Data from '@/assets/jsonData/blog/Blog2Data.json'
import SingleBlog2 from './SingleBlog2';

const BlogStyle2 = () => {
    return (
        <>
            <div className="home-blog-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">Latest Blog</h4>
                                <h2 className="title">News & Update</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {Blog2Data.slice(0, 1).map(blog =>
                                <SingleBlog2 blog={blog} key={blog.id} />
                            )}
                        </div>
                        <div className="col-lg-6 mt-md-30 mt-xs-30">
                            {Blog2Data.slice(1, 3).map(blog =>
                                <SingleBlog2 blog={blog} key={blog.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStyle2;