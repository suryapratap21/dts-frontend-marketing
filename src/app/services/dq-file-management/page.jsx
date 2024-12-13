import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import FeaturesList from "./featuresList";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import about7Thumb from "@/assets/new-img/dq-file.webp";
import about8Thumb from "@/assets/new-img/dq-file-2.webp";
import SingleFeature2 from "@/components/feature/SingleFeature2";
import DQFileSlider from "./DQFileSlider";

export const metadata = {
  title: "Driver Qualification File Management - DrugTestingSites",
};

const DQFileManagement = () => {
  return (
    <>
      {/* <LayoutStyle7 breadCrumb="DOT-Drug-Testing" title="DOT Drug Testing"> */}
      <LayoutStyle7>
        <div className="default-padding-top">
          <div
            className={`about-style-two-area overflow-hidden bg-contain`}
            style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}
          >
            <div className="container">
              <div className="row align-center">
                <div className="col-lg-5 about-style-two">
                  <div className="thumb">
                    <Image src={about7Thumb} alt="Image Not Found" />
                    <Image src={about8Thumb} alt="Image Not Found" />
                    {/* <div className="experience">
                      <h2>
                        <strong>15</strong> Years experience
                      </h2>
                    </div> */}
                    {/* <div className="shape">
                      <Image src={anim5Shape} alt="Shape" />
                    </div> */}
                  </div>
                </div>
                <div className="about-style-two col-lg-6 offset-lg-1">
                  <h2 className="title">
                    Driver Qualification File Management System
                  </h2>
                  <p>
                    The FMCSA requires drivers and fleets to maintain a proper
                    driver qualification record or file. The driver file is a
                    complex document with multiple parts that need to meet the
                    guideline and standards as outlined by FMCSA.
                  </p>
                  <p>
                    <strong className="text-black">
                      Driver Files Must Be Maintained For The Life Of Employment
                      & 3 Years After Termination.
                    </strong>{" "}
                    We at DrugTestingSites guide our customers through this
                    process and make sure to keep them compliant for the next
                    audit.
                  </p>
                  <div className="mt-30">
                    <Link href="/pricing" className="btn btn-md btn-gradient">
                      Enroll Now
                    </Link>
                    {/* <Link href="/pricing" className="btn btn-md btn-gradient">
                      Pricing
                    </Link> */}
                  </div>
                  <div className="default-features mt-30">
                    <div className="default-feature-item">
                      <Link href="#" scroll={false}>
                        <i className="flaticon-investment-3"></i>
                        <h4>
                          100% Asset <br /> Records
                        </h4>
                      </Link>
                    </div>
                    <div className="default-feature-item">
                      <Link href="#" scroll={false}>
                        <i className="flaticon-progress"></i>
                        <h4>
                          Expiration <br /> Reminders
                        </h4>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            <div
              className="feature-style-two-area overflow-hidden default-padding"
              style={{ backgroundImage: `url(/assets/img/shape/45.png)` }}
            >
              <div className="container">
                <div className="services-details-items">
                  <div className="row">
                    <div className="col pl-50 pl-md-15 pl-xs-15">
                      <div className="site-heading text-center">
                        <h4 className="sub-heading">
                          Introducing Prime DQ Files
                        </h4>
                        <h2>Software Features</h2>
                      </div>

                      <div className="row relative pt-40">
                        {FeaturesList.map((feature) => (
                          <div
                            className="col-lg-4 col-md-6 mb-30"
                            key={feature.id}
                          >
                            <SingleFeature2 feature={feature} />
                          </div>
                        ))}
                        {/* <div className="shape-right-bottom">
                          <Image src={shape40} alt="Image Not found" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <DQFileSlider />
      </LayoutStyle7>
    </>
  );
};

export default DQFileManagement;
