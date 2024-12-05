"use client";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Select,
} from "@headlessui/react";
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
};

const ContactForm = () => {
  const selectRef = React.useRef(null);
  const [selected, setSelected] = React.useState("");
  const handleForm = async (event) => {
    event.preventDefault();
    if (selected === "") {
      toast.error("Please select a topic", {
        position: "bottom-right",
      });
      if (selectRef.current) {
        selectRef.current.focus();
      }
      return;
    }
    const payload = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      companyName: event.target.companyName.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      driver: event.target.driver.value,
      topic: selected,
      notes: event.target["other-notes"]?.value,
    };
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
          <div className="col-lg-6">
            <Select
              ref={selectRef}
              name="status"
              aria-label="Project status"
              className="select-dropdown"
              onChange={(e) => setSelected(e.target.value)}
              value={selected}
              style={{
                ...(selected === "" && { color: "#212529" }),
              }}
            >
              <option
                style={{
                  color: "#d6d6d6",
                }}
                selected
                value=""
              >
                Select Topic
              </option>
              <option value="random-consortium">Random Consortium</option>
              <option value="driver-hiring-software">
                Driver Hiring Software
              </option>
              <option value="background-check">Background Check</option>
              <option value="drug-tests">Drug Tests</option>
              <option value="online-driver-education">
                Online Driver Education
              </option>
              <option value="compliance">Compliance</option>
              <option value="drug-and-alcohol-clearinghouse">
                Drug & Alcohol Clearinghouse
              </option>
              <option value="other">Other</option>
            </Select>
          </div>
          {selected === "other" && (
            <div className="col-lg-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="other-notes"
                  name="other-notes"
                  placeholder="Please specify your requirements"
                  type="text"
                  rows="1"
                />
              </div>
            </div>
          )}
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
