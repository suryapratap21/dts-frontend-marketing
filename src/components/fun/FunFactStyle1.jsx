import React from 'react';
import shape39 from '@/assets/img/shape/39.png'
import Image from 'next/image';
import Fact1Data from '@/assets/jsonData/fact/Fact1Data.json'
import SingleFunFact1 from './SingleFunFact1';

const FunFactStyle1 = () => {
    return (
        <>
            <div className="fun-factor-style-one-area bg-gray default-padding"
                style={{ backgroundImage: `url(/assets/img/shape/41.png)` }}>
                <div className="container">
                    <div className="fun-factor-style-one-box">
                        <div className="shape-animated-up-down">
                            <Image src={shape39} alt="Image Not Found" />
                        </div>
                        <div className="row align-center">
                            <div className="col-lg-10 offset-lg-1 text-center fun-fact-style-one">
                                <div className="row">
                                    {Fact1Data.map(fact =>
                                        <div className="col-lg-4 col-md-4 item" key={fact.id}>
                                            <SingleFunFact1 fact={fact} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FunFactStyle1;