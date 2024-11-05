"use client"
import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ErrorPageContent from '@/components/NotFound/ErrorPageContent';
import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="error" title="Error">
                <ErrorPageContent />
            </LayoutStyle7>
        </>
    );
};

export default ErrorPage;