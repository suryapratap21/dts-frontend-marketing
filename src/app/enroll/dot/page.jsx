"use client";

import React, { useContext, useState } from "react";
import { searchDot } from "./searchDot";
import { DotContext } from "../layout";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const { dotInformation, setDotInformation } = useContext(DotContext);
  return (
    <>
      <div className="dot-search-form">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="form-group">
              <input
                className="form-control"
                id="dotNumber"
                name="dotNumber"
                placeholder="Enter DOT number"
                type="text"
                autoComplete="off"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <button
              className="btn"
              disabled={loading || number.length < 5}
              onClick={async () => {
                setLoading(true);
                try {
                  const response = await searchDot(number);

                  setDotInformation(response);
                } catch (error) {
                  setError("Error fetching DOT information");
                }
                setLoading(false);
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>

        {!dotInformation?.usdot ? (
          <></>
        ) : dotInformation?.operatingStatus !== "ACTIVE" ? (
          <h3>This DOT number is not valid</h3>
        ) : dotInformation?.entityType !== "CARRIER" ? (
          <h3>This DOT number does not belong to a Carrier</h3>
        ) : (
          <DotDisplay data={dotInformation} />
        )}
      </div>
    </>
  );
};

const DotDisplay = ({ data }) => {
  return (
    <div>
      <h1>DOT Information</h1>
      <p>DOT Number: {data.usdot}</p>
      <p>Legal Name: {data.legalName}</p>
      {data.dbaName && <p>DBA Name: {data.dbaName}</p>}
      <p>Address: {data.physicalAddress}</p>
      <p>Phone: {data.phone}</p>
      <p>Operating Status: {data.operatingStatus}</p>
      <p>Power Units: {data.power_units_count}</p>
      <p>Drivers: {data.driver_count}</p>
    </div>
  );
};

export default ContactUs;
