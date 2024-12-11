"use client";

import React from "react";

const PricingCards = ({ data }) => {
  return (
    <div className="row align-items-center mb-30">
      {data.map((packageData) => (
        <div className="col-xl-4 col-md-6 col-12 mb-30">
          <>
            <div
              className={`pricing-style-one`}
              style={{
                backgroundImage: `url(/assets/img/shape/15.webp)`,
              }}
            >
              {/* {cart.packageData.id === dotBasic.id && (
            // <span
            //   className="pricing-deselect-button"
            //   onClick={deselectPackage}
            // >
            <i
              className="fas fa-times-circle pricing-deselect-button"
              onClick={() => {
                openDialog();
              }}
            ></i>
            // </span>
          )} */}
              <div className="pricing-header">
                <h4 className="text-primary text-center">
                  {packageData.title}
                </h4>
                <p className=" text-center">{packageData.subTitle}</p>
              </div>
              <div className="pricing-content">
                <div className="price">
                  <h2 className="text-center">
                    <span>${packageData.price}</span> <sub>/Year</sub>
                  </h2>

                  <div
                    className={`btn mt-25 animation btn-dark`}
                    style={{
                      width: "100%",
                    }}
                    onClick={() => {
                      // if (cart.package.id === dotBasic.id) return;
                      // setGlobalState((prev) => ({
                      //   ...prev,
                      //   cart: {
                      //     ...prev.cart,
                      //     package: { id: dotBasic.id },
                      //   },
                      // }));
                    }}
                  >
                    Select
                  </div>
                  <ul className="pricing-list">
                    {packageData.drugTests.map((i) => (
                      <li className="text-center">
                        {i.name}: ${i.price}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="pricing-content-list">
                  {packageData.features.map((i) => (
                    <li key={i.id}>
                      <i className="fas fa-check-circle"></i> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
