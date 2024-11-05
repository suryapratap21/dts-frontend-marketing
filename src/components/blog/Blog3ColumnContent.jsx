import React from 'react';
import Pagination from '../pagination/Pagination';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import SingleBlog3Column from './SingleBlog3Column';

const Blog3ColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {blogData.slice(0, 6).map(blog =>
                                <div className="col-xl-4 col-md-6 single-item" key={blog.id}>
                                    <SingleBlog3Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <nav aria-label="navigation">
                                <Pagination />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;