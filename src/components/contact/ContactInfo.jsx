import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <h2>Contact Information</h2>
        {/* <p>
                    Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.
                </p> */}
        <ul>
          <li className="wow fadeInUp">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="content">
              <h5 className="title">Call Us Today</h5>
              <a href="tel:+12094176300">+1 (209) 417-6300</a>
            </div>
          </li>
          {/* <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <h5 className="title">Our Location</h5>
              <p>
                55 Main Street, The Grand Avenue 2nd Block, <br /> New York City
              </p>
            </div>
          </li> */}
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="info">
              <h5 className="title">Email Us</h5>
              <a href="mailto:lathrop@drugtestingsites.com">
                lathrop@drugtestingsites.com
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
