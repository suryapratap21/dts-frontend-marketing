import React from 'react';
import Process2Data from '@/assets/jsonData/process/Process2Data.json'
import SingleProcess2 from './SingleProcess2';

const ProcessStyle2 = () => {
    return (
        <>
            <div className="process-style-two-area text-center default-padding" style={{ backgroundImage: `url(/assets/img/shape/map-large.png)` }}>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">Working process</h4>
                                <h2 className="title">Our solar energy <br /> Work project planning</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="process-style-two-items">
                        <div className="row">
                            {Process2Data.map(process =>
                                <div className="col-lg-4" key={process.id}>
                                    <SingleProcess2 process={process} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default ProcessStyle2;