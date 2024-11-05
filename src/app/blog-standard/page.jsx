import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import BlogStandardContent from '@/components/blog/BlogStandardContent';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Blog Standard"
}

const BlogStandardPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-standard" title="Blog Standard">
                <BlogStandardContent />
            </LayoutStyle7>
        </>
    );
};

export default BlogStandardPage;