"use client"
import React from 'react';
import AchievementCounter2 from './AchievementCounter2';

const RequestCallStyle2 = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="request-call-back-area secondary text-light default-padding" style={{ backgroundImage: `url(/assets/img/banner/1.jpg)` }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h2 className="title">Check your website’s <br /> SEO score free!</h2>
                            <form className="seo-form mt-30" onSubmit={handleForm} >
                                <div className="input">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Web URL" name='url' type="url" autoComplete='off' required />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Email Address" type="email" autoComplete='off' required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit">Check</button>
                            </form>
                        </div>
                        <div className="col-lg-6 text-end">
                            <AchievementCounter2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestCallStyle2;