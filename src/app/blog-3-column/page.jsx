import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Blog 3 Column"
}

const Blog3Column = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="blog-3-column" title="Blog 3 Column">
                <Blog3ColumnContent />
            </LayoutStyle7>
        </>
    );
};

export default Blog3Column;