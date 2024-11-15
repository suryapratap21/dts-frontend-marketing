import React from "react";

const Loading = () => {
  return (
    <>
      <div id="preloader">
        <div id="consua-preloader" className="consua-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="C" className="letters-loading">
                D
              </span>
              <span data-text-preloader="O" className="letters-loading">
                T
              </span>
              <span data-text-preloader="N" className="letters-loading">
                S
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
