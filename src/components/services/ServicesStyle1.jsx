import React from "react";
import shape10 from "@/assets/img/shape/10.png";
// import Services1TabData from "@/assets/jsonData/services/Services1TabData.json";
import SingleServices1 from "./SingleServices1";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    tabClass: "show active",
    tabId: "tab1",
    ariaLabelled: "nav-id-1",
    data: "Drug Test for Truck Drivers to Stay DOT Complaint",
    render: (
      <>
        <h4>
          <a>Drug Test for Truck Drivers to Stay DOT Complaint</a>
        </h4>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Pre Employment
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Post Accident
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Random
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Reasonable Suspicion
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Return-to-Duty
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Follow Up
          </div>
        </div>
        <p className="pt-50">
          The Drug Testing Services can assist owner operators in all areas of
          the United States, for immediate compliance with DOT & FMCSA
          regulations for drug and alcohol testing, call The Drug Testing
          Services
        </p>
        <div className="pt-10">
          <Link
            href="/services/dot-drug-testing"
            className="button learn-more-btn"
          >
            Learn More
          </Link>
        </div>
      </>
    ),
  },
  {
    id: 2,
    tabClass: "",
    tabId: "tab2",
    ariaLabelled: "nav-id-2",
    render: (
      <>
        <h4>
          <a>FMCSA Drug & Alcohol Clearinghouse</a>
        </h4>
        <p className="">
          The Clearinghouse is a secure online database that gives employers,
          the Federal Motor Carrier Safety Administration (FMCSA), State Driver
          Licensing Agencies (SDLAs), and State law enforcement personnel
          real-time information about commercial driver’s license (CDL) and
          commercial learner’s permit (CLP) holders’ drug and alcohol program
          violations. The Clearinghouse contains records of violations of drug
          and alcohol prohibitions in 49 CFR Part 382, Subpart B, including
          positive drug or alcohol test results and test refusals
        </p>
        <div className="pt-10">
          <button className="button learn-more-btn">Learn More</button>
        </div>
      </>
    ),
  },
  {
    id: 3,
    tabClass: "",
    tabId: "tab3",
    ariaLabelled: "nav-id-3",
    render: (
      <>
        <h4>
          <a>Driver Qualification Files Software Features</a>
        </h4>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> DOT Approved Online Driver
            Application For Hiring
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> E-Signatures For Driver
            Oualification File.
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Build Your Own brand
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Save and Return Feature
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> Automatic Order MVRs For
            Annual Reviews
          </div>
          <div className="col-lg-6 col-md-6">
            <i className="fas fa-check-circle"></i> DOT Pre-Employment Screening
            Program
          </div>
        </div>
        <p className="pt-50">
          The FMCSA requires drivers and fleets to maintain a proper driver
          qualification record or file. The driver file is a complex document
          with multiple parts that need to meet the guideline and standards as
          outlined by FMCSA. We at DTS guide our customers through this process
          and make sure to keep them compliant for the next audit
        </p>
        <div className="pt-10">
          <button className="button learn-more-btn">Learn More</button>
        </div>
      </>
    ),
  },
  {
    id: 4,
    tabClass: "",
    tabId: "tab4",
    ariaLabelled: "nav-id-4",
    render: (
      <>
        <h4>
          <a>Background Checks</a>
        </h4>
        <p className="">
          Background checks verify a potential employee’s work history, previous
          experience, and level of education. It can uncover any inaccuracies or
          omissions on a resume as well as past criminal activity. An essential
          part of the hiring process, background checks allow employees to make
          informed decisions. It’s important, however, that the background check
          process be consistent, legal, and fair to all. A fair, consistent, and
          accurate process for running background checks should assist employers
          in making the right decision in bringing on a new worker
        </p>
        <div className="pt-10">
          <button className="button learn-more-btn">Learn More</button>
        </div>
      </>
    ),
  },
];

const ServicesStyle1 = () => {
  return (
    <>
      <div className="services-style-one-area default-padding bg-gray">
        <div className="triangle-shape">
          <Image src={shape10} alt="Shape" />
        </div>
        <div
          className="center-shape"
          style={{ backgroundImage: `url(/assets/img/shape/5.png)` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-60">
              <div className="service-nav-info">
                <h4 className="sub-title">DTS provides</h4>
                <h2>A Full-Service Solution</h2>
                <div
                  className="nav nav-tabs service-tab-navs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-id-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab1"
                    type="button"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    <i className="flaticon-list"></i>
                    DOT Drug Testing
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                    type="button"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    <i className="flaticon-pie-chart"></i>
                    D&A ClearingHouse
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab3"
                    type="button"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    <i className="flaticon-group"></i>
                    DQ File Management
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-4"
                    data-bs-toggle="tab"
                    data-bs-target="#tab4"
                    type="button"
                    role="tab"
                    aria-controls="tab4"
                    aria-selected="false"
                  >
                    <i className="flaticon-career"></i>
                    Background Check
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15 pt-50">
              <div
                className="tab-content services-tab-content"
                id="nav-tabContent"
              >
                {servicesData.map((service) => (
                  <div
                    className={`tab-pane fade ${service.tabClass}`}
                    id={service.tabId}
                    role="tabpanel"
                    aria-labelledby={service.ariaLabelled}
                    key={service.id}
                  >
                    <div className="row services-style-one">
                      {/* {service.tabData.map((data) => (
                        <div
                          className="col-lg-6 col-md-6 mt-60 mt-md-30 mt-xs-30"
                          key={data.id}
                        >
                          <SingleServices1 data={data} />
                        </div>
                      ))} */}
                      {service.render}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyle1;
