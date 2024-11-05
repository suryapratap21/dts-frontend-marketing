import React from 'react';
import AchievementCounter1 from './AchievementCounter1';
import Link from 'next/link';

const RequestCallStyle1 = () => {
    return (
        <>
            <div className="request-call-back-area text-light default-padding" style={{ backgroundImage: `url(/assets/img/banner/13.jpg)` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h2 className="title">Looking for a First-Class <br /> Business Consultant?</h2>
                            <Link className="btn circle btn-light mt-30 mt-md-15 mt-xs-10 btn-md radius animation" href="/contact-us">Request a Call back</Link>
                        </div>
                        <div className="col-lg-6 text-end">
                            <AchievementCounter1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestCallStyle1;