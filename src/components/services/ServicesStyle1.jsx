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
            <Link href="/services/dot-drug-testing?service=pre-employment">
              <i className="fas fa-check-circle"></i> Pre Employment
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/services/dot-drug-testing?service=post-accident">
              <i className="fas fa-check-circle"></i> Post Accident
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/services/dot-drug-testing?service=random">
              <i className="fas fa-check-circle"></i> Random
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/services/dot-drug-testing?service=reasonable-suspicion">
              <i className="fas fa-check-circle"></i> Reasonable Suspicion
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/services/dot-drug-testing?service=return-to-duty">
              <i className="fas fa-check-circle"></i> Return to Duty
            </Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <Link href="/services/dot-drug-testing?service=follow-up">
              <i className="fas fa-check-circle"></i> Follow Up
            </Link>
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
          <Link
            href="/services/clearinghouse"
            className="button learn-more-btn"
          >
            Learn More
          </Link>
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
          outlined by FMCSA. We at DrugTestingSites guide our customers through
          this process and make sure to keep them compliant for the next audit
        </p>
        <div className="pt-10">
          <Link
            href="/services/dq-file-management"
            className="button learn-more-btn"
          >
            Learn More
          </Link>
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
          <a>DOT Random Consortium Management</a>
        </h4>
        <p className="">
          A DOT Random Consortium manages the random selection and testing
          process for employees in safety-sensitive positions, such as those in
          transportation industries regulated by the DOT. It is a group-based
          program that helps small employers meet the Department of
          Transportation (DOT) requirements for random drug and alcohol testing.
          It pools employees from multiple companies into a single group,
          ensuring compliance with DOT regulations in an efficient and
          cost-effective manner
        </p>
        <div className="pt-10">
          <Link
            href="/services/random-management"
            className="button learn-more-btn"
          >
            Learn More
          </Link>
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
                <h4 className="sub-title">DrugTestingSites provides</h4>
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
                    <i className="flaticon-career"></i>
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
                    <i className="flaticon-list"></i>
                    Random Consortium
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
