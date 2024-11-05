import React from 'react';
import Fact2Data from '@/assets/jsonData/fact/Fact2Data.json'
import SingleFunFact2 from './SingleFunFact2';

const FunFactStyle2 = () => {
    return (
        <>
            <div className="fun-factor-style-two-area">
                <div className="container">
                    <div className="fun-factor-style-two-box">
                        <div className="row align-center">
                            {Fact2Data.map(fact =>
                                <div className="col-xl-4 col-md-4 item" key={fact.id}>
                                    <SingleFunFact2 fact={fact} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FunFactStyle2;