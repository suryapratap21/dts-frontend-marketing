import SingleFaq1 from "@/components/faq/SingleFaq1";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import Faq1Data from "./faqData";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Drug & Alcohol Clearinghouse - DrugTestingSites",
};

const ServiceDetailsPage = () => {
  return (
    <>
      <LayoutStyle7>
        <>
          <div className="services-details-area overflow-hidden default-padding">
            <div className="container">
              <div className="services-details-items">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 mt-md-120 services-sidebar">
                    <div
                      className="single-widget bg-dark quick-contact-widget text-light d-none d-md-block"
                      style={{
                        backgroundImage: `url(/assets/img/shape/15.png)`,
                      }}
                    >
                      <div className="content">
                        <h3>Need Help?</h3>
                        <p>
                          Contact us for any kind of queries. We are here for
                          your service.
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

                    {/* {renderServiceDetails()} */}
                    <>
                      <h2>FMCSA Drug & Alcohol Clearinghouse Overview</h2>
                      <p>
                        All FMCSA, DOT-Covered Companies, and Owner Operators
                        are required to sign up on the Drug & Alcohol
                        Clearinghouse website before January 6, 2020.
                      </p>
                      <div className="features faq-style-one mt-40 mt-xs-30 mb-30 mb-xs-20">
                        <h3>
                          Drug & Alcohol Clearinghouse Frequently Asked
                          Questions
                        </h3>
                        <div className="accordion" id="faqAccordion">
                          <>
                            {Faq1Data.map((faq) => (
                              <SingleFaq1 faq={faq} key={faq.id} />
                            ))}
                          </>
                        </div>
                        {/* <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="content">
                              <h3>Types of Tests</h3>
                              <ul className="feature-list-item">
                                <li>
                                  <strong>Urine Test:</strong> The most common
                                  method; detects recent drug use.
                                </li>
                                <li>
                                  <strong>Hair Follicle Test:</strong> Detects
                                  drug use over a longer period, typically up to
                                  90 days.
                                </li>
                                <li>
                                  <strong>Saliva Test:</strong> Detects recent
                                  use, typically within the past 24–72 hours.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="content">
                              <h3>Drugs Typically Screened</h3>
                              <ul className="feature-list-item">
                                <li>Marijuana (THC)</li>
                                <li>Cocaine</li>
                                <li>Opiates (e.g., heroin, morphine)</li>
                                <li>Amphetamines (e.g., methamphetamine)</li>
                                <li>PCP (Phencyclidine)</li>
                                <li>
                                  Other substances may be tested depending on
                                  the employer's policy (e.g., alcohol,
                                  prescription drugs)
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </>

                    <div
                      className="single-widget bg-dark quick-contact-widget text-light mt-4 d-md-none"
                      style={{
                        backgroundImage: `url(/assets/img/shape/15.png)`,
                      }}
                    >
                      <div className="content">
                        <h3>Need Help?</h3>
                        <p>
                          Contact us for any kind of queries. We are here for
                          your service.
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
      </LayoutStyle7>
    </>
  );
};

export default ServiceDetailsPage;
