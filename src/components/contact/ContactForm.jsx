"use client";
import React from "react";
import { toast } from "react-toastify";

const submitContactForm = async (payload) => {
  const rawResponse = await fetch(
    `https://dts-test-api.upforks.com/admin/contact`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const content = await rawResponse.json();
};

const ContactForm = () => {
  const handleForm = async (event) => {
    event.preventDefault();
    console.log("values: ", event.target.lastName.value);
    const payload = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      companyName: event.target.companyName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      driver: event.target.driver.value,
    };
    console.log("payload: ", payload);
    try {
      await submitContactForm(payload);
      event.target.reset();
      toast.success(
        "Thank you for contacting us. We'll get back to you shortly!"
      );
    } catch (error) {
      toast.error(
        "Something went wrong. Please contact administrator if this issue persists."
      );
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="companyName"
                name="companyName"
                placeholder="Company Name"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
                type="number"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="driver"
                name="driver"
                placeholder="Driver"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-lg-12">
            <div className="d-flex align-items-center">
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
              <span className="lh-sm">
                You may use my number to text me back**
              </span>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-12">
            <div className="d-flex align-items-center">
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
              <span className="lh-sm">
                Send me text messages with offers and promotions**
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Get in Touch
            </button>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-lg-12">
            **Standard carrier rates may apply. Text 'stop' to cancel.
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
