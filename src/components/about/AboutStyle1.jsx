import Image from "next/image";
import React from "react";
import anim1Thumb from "@/assets/img/shape/anim-1.png";
import anim2Thumb from "@/assets/img/shape/anim-2.png";
import anim3Thumb from "@/assets/img/shape/anim-3.png";
import anim4Thumb from "@/assets/img/shape/anim-4.png";
import aboutThumb from "@/assets/new-img/about-thumb.webp";
import signatureThumb from "@/assets/img/signature.png";
import About1Card from "./About1Card";

const AboutStyle1 = () => {
  return (
    <>
      <div className="about-style-one-area default-padding">
        <div className="shape-animated-left">
          <Image src={anim1Thumb} alt="Image Not Found" />
          <Image src={anim2Thumb} alt="Image Not Found" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="about-style-one col-xl-6 col-lg-5">
              <div className="h4 sub-heading">Your Compliance Partner</div>
              <h2 className="title mb-25">Who Needs DOT Compliance</h2>
              <p>
                DOT regulations are applicable to any CMV operator in the United
                States not just trucking companies. A CMV, outside of belonging
                to a company or corporation, is defined as any vehicle that
                satisfies one of the following conditions.
              </p>
              <div className="owner-info">
                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i> Weighs (including
                    any load) 10,001 lbs or more
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Transports hazardous
                    materials (property-carrying vehicle) in a quantity
                    requiring a hazardous material placard
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Transports 16 or
                    more passengers (passenger-carrying vehicle), including the
                    driver, without compensation
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Transports 9 or more
                    passengers (passenger-carrying vehicle), including the
                    driver, for compensation
                  </li>
                </ul>
                {/* <div className="left-info">
                  <h4>Richard Garrett</h4>
                  <span>CEO & Founder</span>
                </div> */}
                {/* <div className="right-info">
                  <Image src={signatureThumb} alt="Image Not Found" />
                </div> */}
              </div>
            </div>
            <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
              <div className="about-thumb">
                <Image
                  className="wow fadeInRight"
                  src={aboutThumb}
                  alt="Image Not Found"
                />
                <About1Card />
                <div
                  className="thumb-shape-bottom wow fadeInDown"
                  data-wow-delay="300ms"
                >
                  <Image src={anim3Thumb} alt="Image Not Found" />
                  <Image src={anim4Thumb} alt="Image Not Found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStyle1;
