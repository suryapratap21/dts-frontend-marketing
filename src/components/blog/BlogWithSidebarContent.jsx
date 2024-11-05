import React from 'react';
import Pagination from '../pagination/Pagination';
import SingleBlogStandard from './SingleBlogStandard';
import blogData from '@/assets/jsonData/blog/BlogData.json'
import SearchWidget from '../widgets/SearchWidget';
import RecentPostsWidget from '../widgets/RecentPostsWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchiveWidget from '../widgets/ArchiveWidget';
import TagsWidget from '../widgets/TagsWidget';
import FollowWidget from '../widgets/FollowWidget';

const BlogWithSidebarContent = () => {
    return (
        <>
            <div className="blog-area full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {blogData.slice(0, 3).map(blog =>
                                        <SingleBlogStandard blog={blog} key={blog.id} />
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col-md-12 pagi-area text-center">
                                        <Pagination />
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogWithSidebarContent;