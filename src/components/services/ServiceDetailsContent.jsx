"use client";

import React from "react";
import Link from "next/link";
import PreEmploymentService from "../dts/services/PreEmploymentService";
import PostAccidentService from "../dts/services/PostAccidentService";
import RandomService from "../dts/services/RandomService";
import ReasonableSuspicionService from "../dts/services/ReasonableSuspicionService";

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

                      {/* 
                      <li>
                        <Link href="#">Pre-Employment</Link>
                      </li>
                      <li className="current-item">
                        <Link href="#">Post Accident</Link>
                      </li>
                      <li>
                        <Link href="#">Random</Link>
                      </li>
                      <li>
                        <Link href="#">Reasonable Suspicion</Link>
                      </li>
                      <li>
                        <Link href="#">Return-to-Duty</Link>
                      </li>
                      <li>
                        <Link href="#">Follow Up</Link>
                      </li> */}
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
                      Speak with a human to filling out a form? call corporate
                      office and we will connect you with a team member help.
                    </p>
                    <h2>
                      <a href="tel:+(012) 6679545">+(012) 6679545</a>
                    </h2>
                    <h4>
                      <a href="mailto:info@digital.com">info@digital.com</a>
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
                {/* <p>
                  We denounce with righteous indige nation and dislike men who
                  are so beguiled and demo realized by the charms of pleasure of
                  the moment, so blinded by desire, that they cannot foresee the
                  pain and trouble that are bound to ensue cannot foresee. These
                  cases are perfectly simple and easy to distinguish. In a free
                  hour, when our power of choice is untrammelled data structures
                  manages data in technology.
                </p>
                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="content">
                        <h3>Included Services</h3>
                        <ul className="feature-list-item">
                          <li>Consulting Service</li>
                          <li>24/7 Alltime Supporting</li>
                          <li>Marketing Service</li>
                          <li>Expert Team Members</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-xs-30">
                      <div className="content">
                        <h3>The Challange</h3>
                        <p>
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae. Itaque
                          earum rerum hic tenetur a sapiente delectus, ut aut
                          reiciendis voluptatibus maiores alias. consequatur aut
                          perferendis doloribus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3>What we do?</h3>
                <p>
                  Nam libero tempore, cum soluta nobis est elig endi optio
                  cumque nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor repelle
                  ndus. Temporibus autem quibusdam et aut officiis debitis aut
                  rerum necessitatibus saepe eveniet ut et voluptates
                  repudiandae sint et molestiae non recusandae. Itaque earum
                  rerum hic tenetur a sapiente delectus, ut aut reiciendis
                  voluptatibus maiores alias. consequatur aut perferendis
                  doloribus asperiores repellat. The wise man therefore always
                  holds in these matters to this principle of selection: he
                  rejects pleasures to secure other greater pleasures, or else
                  he endures pains to avoid worse pains. pleasures have to be
                  repudiated and annoyances accepted.
                </p>

                <div className="faq-style-one dark mt-40">
                  <h3 className="mb-30">Common Question for this project</h3>
                  <div className="accordion" id="faqAccordion">
                    {Faq1Data.slice(0, 3).map((faq) => (
                      <SingleFaq1 faq={faq} key={faq.id} />
                    ))}
                  </div>
                </div>

                <div className="services-more mt-40">
                  <h2>Popular Services</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="item">
                        <i className="flaticon-personal"></i>
                        <h4>
                          <Link href="#" onClick={handleSmoothScroll}>
                            Investment Planning
                          </Link>
                        </h4>
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item">
                        <i className="flaticon-career"></i>
                        <h4>
                          <Link href="#" onClick={handleSmoothScroll}>
                            Markets Research
                          </Link>
                        </h4>
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our power.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div
                  className="single-widget bg-dark quick-contact-widget text-light mt-4 d-md-none"
                  style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}
                >
                  <div className="content">
                    <h3>Need Help?</h3>
                    <p>
                      Speak with a human to filling out a form? call corporate
                      office and we will connect you with a team member help.
                    </p>
                    <h2>
                      <a href="tel:+(012) 6679545">+(012) 6679545</a>
                    </h2>
                    <h4>
                      <a href="mailto:info@digital.com">info@digital.com</a>
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
