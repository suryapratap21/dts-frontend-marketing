import Link from 'next/link';
import React from 'react';

const ErrorPageContent = () => {
    return (
        <>
            <div className="error-section default-padding text-center bg-cover">
                <div className="container">
                    <div className="error-content">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>Error</h1>
                                <h2>Something Went Wrong</h2>
                                <p>
                                    Household shameless incommode at no objection behavior. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.
                                </p>
                                <Link className="btn mt-20 btn-md btn-theme" href="/">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPageContent;