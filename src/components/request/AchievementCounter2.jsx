"use client"
import React from 'react';
import CountUp from 'react-countup';

const AchievementCounter2 = () => {
    return (
        <>
            <div className="achivement-counter">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="flaticon-stats"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer"><CountUp end={500} enableScrollSpy /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Website rank first over 30 years</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="flaticon-group"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer" data-to="90" data-speed="2000"><CountUp end={90} enableScrollSpy /></div>
                                <div className="operator">%</div>
                            </div>
                            <span className="medium">Visitor growth within very short time</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default AchievementCounter2;