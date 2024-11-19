import React from "react";
import SinglePrice1 from "./SinglePrice1";
import Price1Data from "@/assets/jsonData/price/Price1Data.json";
import PriceTitle from "./PriceTitle";
import Link from "next/link";

const dotBasic = {
  id: 1,
  title: "DOT Compliant Basic Random Consortium Enrollment",
  price: "$99.00",
  priceDuration: "/Year",
  features: [
    { id: 1, title: "Enrollment Certificate Instantly" },
    { id: 2, title: "Company Drug & Alcohol Policy" },
    { id: 3, title: "Employee Education Course ( One Included )" },
    { id: 4, title: "Access to 10K plus collection sites" },
  ],
  addOns: [
    { id: 1, title: "Additional Driver", price: 25.0 },
    {
      id: 2,
      title: "Pre-Employment Drug Test",
      price: 60.0,
      regularPrice: 75.0,
    },
    { id: 3, title: "Random Drug Test", price: 60.0, regularPrice: 75.0 },
    { id: 4, title: "Breath Alcohol Test", price: 75.0, regularPrice: 85.0 },
  ],
  buttonText: "Select",
};
const dotRandom = {
  id: 2,
  title: "DOT Compliant Basic Consortium Enrollment",
  price: "$199.00",
  priceDuration: "/Year",
  features: [
    { id: 1, title: "Enrollment Certificate Instantly" },
    { id: 2, title: "Company Drug & Alcohol Policy" },
    { id: 3, title: "Employee Education Course ( One Included )" },
    { id: 4, title: "Access to 10K plus collection sites" },
    { id: 5, title: "Unlimited Random Drug Testing" },
  ],
  addOns: [
    { id: 1, title: "Additional Driver $120.00/Year" },
    {
      id: 2,
      title: "Pre-Employment Drug Test",
      price: 60.0,
      regularPrice: 75.0,
    },
    { id: 3, title: "Random Drug Test", price: 60.0, regularPrice: 75.0 },
    { id: 4, title: "Breath Alcohol Test", price: 75.0, regularPrice: 85.0 },
  ],
  buttonText: "Select",
};

const PriceStyle1 = ({ priceTitle, sectionClass }) => {
  return (
    <>
      <div
        className={`pricing-style-one-area default-padding bottom-less ${sectionClass}`}
      >
        {priceTitle ? <PriceTitle /> : <></>}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-md-6 mb-30">
              <>
                <div
                  className={`pricing-style-one`}
                  style={{ backgroundImage: `url(/assets/img/shape/15.webp)` }}
                >
                  <div className="pricing-header">
                    <h4>DOT Compliant Basic Random Consortium Enrollment</h4>
                  </div>
                  <div className="pricing-content">
                    <div className="price">
                      <h2>
                        <span>$99.00</span> <sub>/Year</sub>
                      </h2>
                    </div>
                    <ul className="pricing-content-list">
                      {dotBasic.features.map((i) => (
                        <li key={i.id}>
                          <i className="fas fa-check-circle"></i> {i.title}
                        </li>
                      ))}
                    </ul>

                    <h4 className="pricing-content-title">Add-Ons</h4>
                    <ul className="pricing-content-add-on">
                      {dotBasic.addOns.map((i) => (
                        <li key={i.id}>
                          <input
                            className="mb-0 min-h-0"
                            style={{
                              minWidth: "1rem",
                              marginRight: "10px",
                              minHeight: "1rem",
                            }}
                            id="text-back"
                            name="text-back"
                            type="checkbox"
                            required
                          />{" "}
                           {i.title} - ${i.price.toFixed(2)}
                          {i.regularPrice && (
                            <span
                              style={{
                                textDecoration: "line-through",
                                paddingLeft: "4px",
                              }}
                            >
                              ${i.regularPrice.toFixed(2)}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className={`btn mt-25 btn-sm animation btn-dark`}
                      href="#"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </>
            </div>
            <div className="col-xl-5 col-md-6 mb-30">
              <>
                <div
                  className={`pricing-style-one active`}
                  style={{ backgroundImage: `url(/assets/img/shape/15.webp)` }}
                >
                  <div className="pricing-header">
                    <h4>DOT Compliant Random Pool Enrollment & Testing</h4>
                  </div>
                  <div className="pricing-content">
                    <div className="price">
                      <h2>
                        <span>$199.00</span> <sub>/Year</sub>
                      </h2>
                    </div>
                    <ul className="pricing-content-list">
                      {dotRandom.features.map((i) => (
                        <li key={i.id}>
                          <i className="fas fa-check-circle"></i> {i.title}
                        </li>
                      ))}
                    </ul>
                    <h4 className="pricing-content-title">Add-Ons</h4>
                    <ul className="pricing-content-add-on">
                      {dotRandom.addOns.map((i) => (
                        <li key={i.id}>
                          <input
                            className="mb-0 min-h-0"
                            style={{
                              minWidth: "1rem",
                              marginRight: "10px",
                              minHeight: "1rem",
                            }}
                            id="text-back"
                            name="text-back"
                            type="checkbox"
                            required
                          />{" "}
                           {i.title} {i.price && <>- ${i.price.toFixed(2)}</>}
                          {i.regularPrice && (
                            <span
                              style={{
                                textDecoration: "line-through",
                                paddingLeft: "4px",
                              }}
                            >
                              ${i.regularPrice.toFixed(2)}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className={`btn mt-25 btn-sm animation btn-dark`}
                      href="#"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </>
            </div>
            <div className="col-xl-3 col-md-6 mb-30">
              <div className=" mb-30">
                <div
                  className={`pricing-style-one`}
                  style={{ backgroundImage: `url(/assets/img/shape/15.webp)` }}
                >
                  <div className="pricing-header">
                    <h4>SUPERVISOR TRAINING</h4>
                  </div>
                  <div className="pricing-content">
                    <div className="price">
                      <h2>
                        <span>$55.00</span>
                      </h2>
                    </div>

                    <Link
                      className={`btn mt-25 btn-sm animation btn-dark`}
                      href="#"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`pricing-style-one`}
                  style={{ backgroundImage: `url(/assets/img/shape/15.webp)` }}
                >
                  <div className="pricing-header">
                    <h4>EMPLOYEE TRAINING</h4>
                  </div>
                  <div className="pricing-content">
                    <div className="price">
                      <h2>
                        <span>$15.00</span>
                      </h2>
                    </div>

                    <Link
                      className={`btn mt-25 btn-sm animation btn-dark`}
                      href="#"
                    >
                      Select
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

export default PriceStyle1;
