import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import NotFoundContent from '@/components/NotFound/NotFoundContent';
import React from 'react';

const NotFoundPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="404" title="404 Page">
                <NotFoundContent />
            </LayoutStyle7>
        </>
    );
};

export default NotFoundPage;