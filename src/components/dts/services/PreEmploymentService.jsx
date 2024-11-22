import React from "react";

const PreEmploymentService = () => {
  return (
    <>
      <h2>Pre Employment</h2>
      <p>
        A pre-employment drug test is a screening process employers use to
        ensure prospective employees are not using illegal drugs or certain
        substances that could impair job performance or violate workplace
        policies. These tests are typically conducted after a job offer has been
        made but before the individual starts work.
      </p>
      <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
        <div className="row">
          <div className="col">
            <div className="content">
              <h3>Types of Tests</h3>
              <ul className="feature-list-item">
                <li>
                  <strong>Urine Test:</strong> The most common method; detects
                  recent drug use.
                </li>
                <li>
                  <strong>Hair Follicle Test:</strong> Detects drug use over a
                  longer period, typically up to 90 days.
                </li>
                <li>
                  <strong>Saliva Test:</strong> Detects recent use, typically
                  within the past 24–72 hours.
                </li>
              </ul>
            </div>
          </div>
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
    </>
  );
};

export default PreEmploymentService;
