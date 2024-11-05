"use client";
import React from "react";
import CountUp from "react-countup";

const About1Card = () => {
  return (
    <>
      <div className="about-card wow fadeInUp" data-wow-delay="500ms">
        <ul>
          <li>
            <div className="icon">
              <i className="flaticon-license"></i>
            </div>
            <div className="fun-fact">
              <div className="counter">
                <div className="timer">
                  <CountUp enableScrollSpy end={99} delay={1} duration={1.5} />
                </div>
                <div className="operator">%</div>
              </div>
              <span className="medium">Success</span>
            </div>
          </li>
          {/* <li>
                        <div className="icon">
                            <i className="flaticon-global"></i>
                        </div>
                        <div className="fun-fact">
                            <div className="counter">
                                <div className="timer">  <CountUp enableScrollSpy end={120} delay={1} duration={2} /></div>
                                <div className="operator">+</div>
                            </div>
                            <span className="medium">Worldwide Clients</span>
                        </div>
                    </li> */}
        </ul>
      </div>
    </>
  );
};

export default About1Card;
