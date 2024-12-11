"use client";

import React, { useContext, useState } from "react";
// import Link from "next/link";
import { GlobalContext } from "@/app/contexts";
import { useRouter } from "next/navigation";

const PackagePricing = ({}) => {
  const router = useRouter();
  // const {
  //   globalState: { cart },
  //   setGlobalState,
  // } = useContext(GlobalContext);
  // const deselectPackage = () => {
  //   setGlobalState((prev) => ({
  //     ...prev,
  //     cart: {
  //       ...prev.cart,
  //       package: {},
  //     },
  //     globalDialog: {
  //       isOpen: false,
  //       title: "",
  //       content: <></>,
  //     },
  //   }));
  // };
  // const openDialog = () => {
  //   setGlobalState((prev) => ({
  //     ...prev,
  //     globalDialog: {
  //       isOpen: true,
  //       title: "Are you sure you want to deselect?",
  //       content: (
  //         <>
  //           <p>
  //             Enrolling in a package will save you upto 30% on drug tests...
  //           </p>
  //           <div className="btn" onClick={deselectPackage}>
  //             Confirm
  //           </div>
  //         </>
  //       ),
  //     },
  //   }));
  // };
  return (
    <>
      <h1 className="text-center">
        Enroll in DOT Random Consortium Management
      </h1>
      <div
        className="row align-items-center"
        style={{
          paddingTop: "1rem",
        }}
      >
        <div className="col-md-6 mb-30">
          <div
            className={`pricing-style-one card`}
            style={{
              backgroundImage: `url(/assets/img/shape/15.webp)`,
            }}
          >
            <div className="pricing-header">
              <h4>DOT Owner Operator Consortium</h4>
            </div>
            <div className="pricing-content">
              <span className="price-icon-circle">
                <i class="fas fa-user"></i>
              </span>
              <div
                className={`btn mt-25 animation btn-dark`}
                style={{
                  width: "100%",
                }}
                onClick={() => {
                  router.push(
                    "/pricing/random-consortium-package/owner-operator"
                  );
                }}
              >
                Join Now
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-30">
          <div
            className={`pricing-style-one card`}
            style={{
              backgroundImage: `url(/assets/img/shape/15.webp)`,
            }}
          >
            <div className="pricing-header">
              <h4>DOT Fleet Consortium</h4>
            </div>
            <div className="pricing-content">
              <span className="price-icon-circle">
                <i class="fas fa-users"></i>
              </span>
              <div
                className={`btn mt-25 animation btn-dark`}
                style={{
                  width: "100%",
                }}
                onClick={() => {
                  router.push("/pricing/random-consortium-package/fleet");
                }}
              >
                Join Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagePricing;
