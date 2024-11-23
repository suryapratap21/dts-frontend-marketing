"use client";

import React from "react";
import Link from "next/link";
import PreEmploymentService from "../dts/services/PreEmploymentService";
import PostAccidentService from "../dts/services/PostAccidentService";
import RandomService from "../dts/services/RandomService";
import ReasonableSuspicionService from "../dts/services/ReasonableSuspicionService";
import ReturnToDutyService from "../dts/services/ReturnToDutyService";

const ServiceDetailsContent = () => {
  const [selected, setSelected] = React.useState("pre-employment");

  const renderServiceDetails = () => {
    switch (selected) {
      case "pre-employment":
        return <PreEmploymentService />;
      case "post-accident":
        return <PostAccidentService />;
      case "random":
        return <RandomService />;
      case "reasonable-suspicion":
        return <ReasonableSuspicionService />;
      case "return-to-duty":
        return <ReturnToDutyService />;
      case "follow-up":
        return <ReasonableSuspicionService />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="services-details-area overflow-hidden default-padding pt-4">
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-4 col-lg-5 mt-md-120 services-sidebar">
                <div className="single-widget services-list-widget">
                  <h4 className="widget-title">DOT Drug Tests</h4>
                  <div className="content">
                    <ul>
                      {[
                        "pre-employment",
                        "post-accident",
                        "random",
                        "reasonable-suspicion",
                        "return-to-duty",
                        "follow-up",
                      ].map((service) => (
                        <li
                          className={`cursor-pointer ${
                            selected === service ? "current-item" : ""
                          }`}
                          onClick={() => setSelected(service)}
                          key={service}
                        >
                          {service
                            .replace(/-/g, " ")
                            .replace(/^\w/, (c) => c.toUpperCase())}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className="single-widget bg-dark quick-contact-widget text-light d-none d-md-block"
                  style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}
                >
                  <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                      Contact us for any kind of queries. We are here for your
                      service.
                    </p>
                    <h2>
                      <a href="+12094176300">+1 (209) 417-6300</a>
                    </h2>
                    <h4>
                      <a href="mailto:info@drugtestingsites.com">
                        info@drugtestingsites.com
                      </a>
                    </h4>
                    <Link
                      className="btn mt-30 circle btn-sm btn-gradient"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                {/* <div className="thumb">
                  <Image
                    src={`/assets/img/service/${thumbFull}`}
                    alt="Thumb"
                    width={1460}
                    height={782}
                  />
                </div> */}

                {renderServiceDetails()}

                <div
                  className="single-widget bg-dark quick-contact-widget text-light mt-4 d-md-none"
                  style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}
                >
                  <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                      Contact us for any kind of queries. We are here for your
                      service.
                    </p>
                    <h2>
                      <a href="+12094176300">+1 (209) 417-6300</a>
                    </h2>
                    <h4>
                      <a href="mailto:info@drugtestingsites.com">
                        info@drugtestingsites.com
                      </a>
                    </h4>
                    <Link
                      className="btn mt-30 circle btn-sm btn-gradient"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
