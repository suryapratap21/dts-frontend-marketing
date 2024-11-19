import React from "react";
import logo1 from "@/assets/new-img/labs/alere.png";
import logo2 from "@/assets/new-img/labs/crl.webp";
import logo4 from "@/assets/new-img/labs/labcorp.png";
import logo5 from "@/assets/new-img/labs/omega.webp";
import logo6 from "@/assets/new-img/labs/psychemedics.webp";
import logo7 from "@/assets/new-img/labs/quest.jpeg";
import Image from "next/image";

const PartnerStyle1 = ({ sectionClass }) => {
  return (
    <>
      <div
        className={`partner-style-one-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div
                className="partner-map"
                style={{ backgroundImage: `url(/assets/img/shape/map.png)` }}
              >
                <h2
                  className="mask-text"
                  //   style={{ backgroundImage: `url(/assets/img/banner/10.jpg)` }}
                  style={{ backgroundColor: "#000" }}
                >
                  10K+
                </h2>
                <h4>Partner Locations in North America</h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="partner-items">
                <ul>
                  <li>
                    <Image src={logo1} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo2} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo7} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo4} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo5} alt="Image Not FOund" />
                  </li>
                  <li>
                    <Image src={logo6} alt="Image Not FOund" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerStyle1;
