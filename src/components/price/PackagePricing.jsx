"use client";

import React, { useContext, useState } from "react";
// import Link from "next/link";
import { GlobalContext } from "@/app/contexts";

const dotBasic = {
  id: "basic-plan",
  title: "DOT Compliant Basic Random Consortium Enrollment",
  price: "$99.00",
  priceDuration: "/Year",
  features: [
    { id: 1, title: "Enrollment Certificate Instantly" },
    { id: 2, title: "Company Drug & Alcohol Policy" },
    { id: 3, title: "Employee Education Course (One Included)" },
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
  id: "random-plan",
  title: "DOT Compliant Basic Consortium Enrollment",
  price: "$199.00",
  priceDuration: "/Year",
  features: [
    { id: 1, title: "Enrollment Certificate Instantly" },
    { id: 2, title: "Company Drug & Alcohol Policy" },
    { id: 3, title: "Employee Education Course (One Included)" },
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
    // { id: 3, title: "Random Drug Test", price: 60.0, regularPrice: 75.0 },
    { id: 4, title: "Breath Alcohol Test", price: 75.0, regularPrice: 85.0 },
  ],
  buttonText: "Select",
};

const PackagePricing = ({}) => {
  const {
    globalState: { cart },
    setGlobalState,
  } = useContext(GlobalContext);
  const deselectPackage = () => {
    setGlobalState((prev) => ({
      ...prev,
      cart: {
        ...prev.cart,
        package: {},
      },
      globalDialog: {
        isOpen: false,
        title: "",
        content: <></>,
      },
    }));
  };
  const openDialog = () => {
    setGlobalState((prev) => ({
      ...prev,
      globalDialog: {
        isOpen: true,
        title: "Are you sure you want to deselect?",
        content: (
          <>
            <p>
              Enrolling in a package will save you upto 30% on drug tests...
            </p>
            <div className="btn" onClick={deselectPackage}>
              Confirm
            </div>
          </>
        ),
      },
    }));
  };
  return (
    <>
      <div className="row align-items-center">
        <div className="col-xl-6 col-md-6 mb-30">
          <>
            <div
              className={`pricing-style-one ${
                cart.package.id === dotBasic.id && "active"
              }`}
              style={{
                backgroundImage: `url(/assets/img/shape/15.webp)`,
              }}
            >
              {cart.package.id === dotBasic.id && (
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
              )}
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

                {/* <h4 className="pricing-content-title">Add-Ons</h4>
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
                </ul> */}
                <div
                  className={`btn mt-25 ${
                    cart.package.id === dotBasic.id
                      ? "bg-theme text-white"
                      : "animation btn-dark"
                  }`}
                  style={{
                    width: "100%",
                  }}
                  onClick={() => {
                    if (cart.package.id === dotBasic.id) return;
                    setGlobalState((prev) => ({
                      ...prev,
                      cart: {
                        ...prev.cart,
                        package: { id: dotBasic.id },
                      },
                    }));
                  }}
                >
                  {cart.package.id === dotBasic.id ? (
                    <>
                      Selected <i className="fas fa-check-circle"></i>
                    </>
                  ) : (
                    "Select"
                  )}
                </div>
              </div>
            </div>
          </>
        </div>
        <div className="col-xl-6 col-md-6 mb-30">
          <>
            <div
              className={`pricing-style-one ${
                cart.package.id === dotRandom.id && "active"
              }`}
              style={{
                backgroundImage: `url(/assets/img/shape/15.webp)`,
              }}
            >
              {cart.package.id === dotRandom.id && (
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
              )}
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
                {/* <h4 className="pricing-content-title">Add-Ons</h4>
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
                        onClick={(e) => {
                          console.log("asdsd: ", e.target.checked);
                          // if(cart)
                          setGlobalState((prev) => ({
                            ...prev,
                            cart: {
                              ...prev.cart,
                              package: { id: dotRandom.id },
                            },
                          }));
                        }}
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
                </ul> */}
                <div
                  className={`btn mt-25 ${
                    cart.package.id === dotRandom.id
                      ? "bg-theme text-white"
                      : "animation btn-dark"
                  }`}
                  style={{
                    width: "100%",
                  }}
                  onClick={() => {
                    if (cart.package.id === dotRandom.id) return;
                    setGlobalState((prev) => ({
                      ...prev,
                      cart: {
                        ...prev.cart,
                        package: { id: dotRandom.id },
                      },
                    }));
                  }}
                >
                  {cart.package.id === dotRandom.id ? (
                    <>
                      Selected <i className="fas fa-check-circle"></i>
                    </>
                  ) : (
                    "Select"
                  )}
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default PackagePricing;
