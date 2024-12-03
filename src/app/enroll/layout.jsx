"use client";

import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import { useRouter, usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const DotContext = createContext({});

const EnrollLayout = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dotInformation, setDotInformation] = useState({});

  const router = useRouter();
  const pathname = usePathname();

  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "We need your DOT number to get started",
    },
    {
      id: 2,
      title: "Step 2",
      description: `Welcome, ${
        dotInformation.dbaName || dotInformation.legalName
      }. Please select plans to get started!`,
    },
    { id: 3, title: "Step 3", description: "Review & Submit" },
  ];

  const getStep = () => {
    if (pathname === "/enroll/dot") {
      return 1;
    } else if (pathname === "/enroll/plans") {
      return 2;
    } else if (pathname === "/enroll/checkout") {
      return 3;
    }
  };

  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    if (getStep() === 1) {
      setIsNextDisabled(dotInformation.usdot ? false : true);
    } else if (getStep() === 2) {
      setIsNextDisabled(false);
    }
  }, [pathname, dotInformation]);
  //   const isNextDisabled = () => {
  //     if (getStep() === 1) {
  //       return     dotInformation.usdot ? false : true;
  //           } else {
  //       return false;
  //     }
  //   }

  useEffect(() => {
    if (!dotInformation.usdot) {
      router.push("/enroll/plans");
    }
  }, [dotInformation]);

  const nextStep = () => {
    if (getStep() === 1) {
      router.push("/enroll/plans");
    } else if (getStep() === 2) {
      router.push("/enroll/checkout");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <>
      <LayoutStyle7>
        <div className="container mt-5">
          {/* <h2 className="text-center mb-4">
            Step {currentStep} of {steps.length}
          </h2> */}

          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div
                  className={`rounded-pill ${
                    getStep() > 1 ? "bg-success" : "bg-secondary"
                  } text-white px-4 py-2 mx-2`}
                >
                  Basic Information
                </div>
                <div className="d-flex align-items-center mx-2">
                  <div
                    className="line bg-primary"
                    style={{ width: "50px", height: "2px" }}
                  />
                </div>
                <div
                  className={`rounded-pill ${
                    getStep() == 1
                      ? "bg-light"
                      : getStep() == 2
                      ? "bg-secondary text-white"
                      : "bg-success text-white"
                  } px-4 py-2 mx-2`}
                >
                  Select Package
                </div>
                <div className="d-flex align-items-center mx-2">
                  <div
                    className="line bg-secondary"
                    style={{ width: "50px", height: "2px" }}
                  />
                </div>
                <div
                  className={`rounded-pill ${
                    getStep() > 2
                      ? "bg-secondary text-white"
                      : "bg-light text-secondary"
                  } px-4 py-2 mx-2`}
                >
                  Checkout
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 mt-5">
            <DotContext.Provider value={{ dotInformation, setDotInformation }}>
              <h5>{steps[getStep() - 1].description}</h5>
              <div className="mt-4">{children}</div>
            </DotContext.Provider>
          </div>

          <div className="d-flex justify-content-end my-4">
            {/* <button
              className="btn btn-secondary"
              onClick={prevStep}
              disabled={getStep() === 1}
            >
              Previous
            </button> */}
            <button
              className="btn btn-primary"
              onClick={nextStep}
              disabled={isNextDisabled}
            >
              Next
            </button>
          </div>
        </div>
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

        {/* <ContactMap /> */}
      </LayoutStyle7>
    </>
  );
};

export default EnrollLayout;
