"use client"
import React from 'react';
import CountUp from 'react-countup';

const SingleFunFact2 = ({ fact }) => {
    const { end, operator, text } = fact

    return (
        <>
            <div className="fun-fact">
                <div className="counter">
                    <div className="timer"><CountUp end={end} /></div>
                    <div className="operator">{operator}</div>
                </div>
                <span className="medium">{text}</span>
            </div>
        </>
    );
};

export default SingleFunFact2;