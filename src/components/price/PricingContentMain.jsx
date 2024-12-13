"use client";

import React, { useContext } from "react";
import PackagePricing from "./PackagePricing";
import EmployeeTrainingPricing from "./EmployeeTrainingPricing";
import { GlobalContext } from "@/app/contexts";
import DrugTestsPricing from "./DrugTestsPricing";

const PricingContentMain = () => {
  const [selected, setSelected] = React.useState("packages");

  const {
    globalState: { cart },
  } = useContext(GlobalContext);

  const renderPricingContent = (selected) => {
    switch (selected) {
      case "packages":
        return <PackagePricing />;
      case "employee-training":
        return <EmployeeTrainingPricing />;
      case "drug-tests":
        return <DrugTestsPricing />;
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-md-4">
          <div className="single-widget services-list-widget">
            <h4 className="widget-title">Pricing Model</h4>
            <div className="content">
              <ul>
                {["packages", "drug-tests", "employee-training"].map(
                  (service) => (
                    <li
                      className={`cursor-pointer ${
                        selected === service ? "current-item" : ""
                      }`}
                      onClick={() => {
                        setSelected(service);
                      }}
                      key={service}
                    >
                      {service
                        .replace(/-/g, " ")
                        .replace(/^\w/, (c) => c.toUpperCase())}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-md-8">
          {renderPricingContent(selected)}
        </div>
      </div>
    </div>
  );
};

export default PricingContentMain;
