import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogSingleWithSidebarContent from '@/components/blog/BlogSingleWithSidebarContent';
import blogData from '@/assets/jsonData/blog/BlogData.json';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Blog Single With Sidebar"
}

const BlogSingleWithSidebar = ({ params }) => {

    const { id } = params
    const data = blogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutStyle7 breadCrumb="blog-single-with-sidebar" title="Blog Single With Sidebar">
                <BlogSingleWithSidebarContent blogInfo={data} />
            </LayoutStyle7>
        </>
    );
};

export default BlogSingleWithSidebar;