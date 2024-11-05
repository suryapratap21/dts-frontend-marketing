import Image from "next/image";
import React from "react";
import shape17 from "@/assets/img/shape/17.png";

const ChooseStyle1 = () => {
  return (
    <>
      <div className="choose-us-style-one-area default-padding text-light">
        <div
          className="cover-bg"
          style={{ backgroundImage: `url(/assets/new-img/truck-overlay.webp)` }}
        ></div>
        <div className="shape-left-top">
          <Image src={shape17} alt="Shape" />
        </div>
        <div className="text-invisible">DTS</div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
              <div className="choose-us-style-one">
                <h2 className="title mb-35">
                  New to the industry? Are you not sure where to start?
                </h2>
                <ul className="list-item">
                  <li className="wow fadeInUp">
                    {/* <h4>Best Business Consulting </h4> */}
                    <p>
                      Learn more about our DOT compliance programs for employees
                      in departments that are governed by the department of
                      transportation. Staying DOT compliant allows you to retain
                      your job and avoid jail time, hefty penalties, and higher
                      insurance.
                    </p>
                  </li>
                  {/* <li className="wow fadeInUp" data-wow-delay="300ms">
                    <h4>24/7 Customer Support </h4>
                    <p>
                      Tohether rather her you not esteem men settle genius
                      excuse. Deal say over you age from. Comparison new ham
                      melancholy son.
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseStyle1;
