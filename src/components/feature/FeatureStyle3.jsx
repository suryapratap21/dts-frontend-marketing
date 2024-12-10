import React from "react";
import Feature3Data from "@/assets/jsonData/feature/Feature3Data.json";
import SingleFeature3 from "./SingleFeature3";
import Link from "next/link";

const FeatureStyle3 = () => {
  return (
    <>
      <div className="feature-style-three-area bottom-less">
        <div className="container">
          <div
            className="text-center"
            style={{
              paddingBottom: "1rem",
            }}
          >
            <h5 className="sub-title">Got Any Questions?</h5>
            <h2 className="heading">Send us a Message</h2>
          </div>
          <div className="row">
            {Feature3Data.map((feature) => (
              <div className="col-lg-4 col-md-6 mb-30" key={feature.id}>
                <Link href={feature.link}>
                  <SingleFeature3 feature={feature} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureStyle3;
