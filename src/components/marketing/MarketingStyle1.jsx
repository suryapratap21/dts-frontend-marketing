import React from 'react';

const MarketingStyle1 = () => {
    return (
        <>
            <div className="marketing-types-area text-center default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="marketing-types">
                                <div className="content">
                                    <h2><strong>Consua</strong> is providing all types of marketing services.</h2>
                                    <ul className="types-list">
                                        <li>Google Ads</li>
                                        <li>YouTube Marketing</li>
                                        <li>Google Analytics</li>
                                        <li>Meta Marketing</li>
                                    </ul>
                                </div>
                                <div className="icon">
                                    <i className="fab fa-youtube"></i>
                                    <i className="fab fa-google"></i>
                                    <i className="fab fa-facebook"></i>
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                                <div className="blur-shape"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarketingStyle1;