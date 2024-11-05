"use client"
import React, { useEffect, useState } from 'react';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import SingleBlogStandard from './SingleBlogStandard';
import ReactPaginate from 'react-paginate';

const BlogStandardContentPagination = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [searchQuery, setSearchQuery] = useState('');

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePageClick = (data) => {
        const newCurrentPage = data.selected + 1;
        setCurrentPage(newCurrentPage);

        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set('page', newCurrentPage);
            window.history.pushState({}, '', `${window.location.pathname}?${searchParams.toString()}`);

            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 200);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            const query = searchParams.get('search') || '';
            setSearchQuery(query);
        }
    }, []);

    const currentData = blogData
        .filter((blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(startIndex, endIndex);

    const totalPages = Math.ceil(
        blogData.filter((blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).length / itemsPerPage
    );

    return (
        <>
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {currentData.map(blog =>
                                    <SingleBlogStandard blog={blog} key={blog.id} />
                                )}
                            </div>
                            <div className="row">
                                <div className="col-md-12 pagi-area text-center">
                                    <ReactPaginate
                                        previousLabel={currentPage === 1 ? <i className='icon fas fa-ban'></i> : <i className='icon fas fa-angle-left'></i>}
                                        nextLabel={currentPage === totalPages ? <i className='icon fas fa-ban'></i> : <i className='icon fas fa-angle-right'></i>}
                                        breakLabel={'...'}
                                        pageCount={Math.ceil(blogData.length / itemsPerPage)}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={2}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination text-center'}
                                        activeClassName={'active'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContentPagination;