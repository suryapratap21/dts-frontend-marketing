import React from "react";
import CtaButton from "./CtaButton";

const PostAccidentService = () => {
  return (
    <>
      <h2>Post Accident Drug Test</h2>
      <p>
        A post-accident drug test is typically conducted by employers to
        determine whether drugs or alcohol may have contributed to a workplace
        accident or incident. These tests are often a part of a company&apos;s
        drug-free workplace policy and are essential for ensuring safety,
        compliance with regulations, and liability management. Below are key
        aspects of post-accident drug testing.
      </p>
      <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
        <div className="row">
          <div className="col">
            <div className="content">
              <h3>When Is It Conducted?</h3>
              <p>A post-accident drug test is usually performed when</p>
              <ul className="">
                <li>
                  <div>
                    <strong>1. An accident results in:</strong> The most common
                    method; detects recent drug use.
                  </div>
                  <ul
                    style={{
                      marginLeft: "1rem",
                      listStyleType: "circle",
                    }}
                  >
                    <li>- Fatalities.</li>
                    <li>
                      - Injuries requiring medical attention beyond first aid.
                    </li>
                    <li>- Significant property or equipment damage.</li>
                    <li>
                      - A situation where human error is suspected as a
                      contributing factor.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>2. Regulatory requirements</strong> mandate testing,
                  such as under the{" "}
                  <strong>U.S. Department of Transportation (DOT)</strong> rules
                  for safety-sensitive employees.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
        <div className="row">
          <div className="col">
            <div className="content">
              <h3>Drugs Typically Screened</h3>
              <ul className="feature-list-item">
                <li>Marijuana (THC)</li>
                <li>Cocaine</li>
                <li>Opiates (e.g., heroin, morphine)</li>
                <li>Amphetamines (e.g., methamphetamine)</li>
                <li>PCP (Phencyclidine)</li>
                <li>
                  Other substances may be tested depending on the employer's
                  policy (e.g., alcohol, prescription drugs)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CtaButton />
    </>
  );
};

export default PostAccidentService;
