"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const SingleServices3 = ({ service }) => {
  const { description, title, serialNo, employmentLife } = service;

  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState();
  const contentRef = useRef(null);

  const toggleExpand = () => {
    // setMaxHeight(isExpanded ? "0px" : `${contentRef.current.scrollHeight}px`);
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  useEffect(() => {
    setMaxHeight(`${contentRef.current.scrollHeight}px`);
  }, [isExpanded]);

  return (
    <>
      <div className="swiper-slide">
        <div className="services-style-three">
          <div className="info">
            <div
              onClick={toggleExpand}
              style={{
                display: "flex",
                cursor: "pointer",
              }}
              className="heading"
            >
              <h4 className="">{title}</h4>{" "}
              <div>
                <h4
                  className={`course-pricing-toggler ${isExpanded && "active"}`}
                >
                  <i className="fas fa-angle-down"></i>
                </h4>
              </div>
            </div>
            <div
              ref={contentRef}
              //   className="info"
              style={{
                maxHeight: maxHeight,
                overflow: "hidden",
                transition: "all 0.3s ease-out",
              }}
            >
              <p>{isExpanded ? description : truncateText(description, 100)}</p>
              {/* {isExpanded && (
                <ul className="disc-style-type">
                  {course.list.map((item, index) => (
                    <li key={index}>
                      <i
                        className="fas fa-circle"
                        style={{
                          fontSize: "0.5rem",
                          paddingRight: "0.5rem",
                        }}
                      ></i>
                      {item}
                    </li>
                  ))}
                </ul>
              )} */}
            </div>
            {serialNo && serialNo.length && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  marginTop: "1rem",
                }}
              >
                {serialNo.map((item, index) => (
                  <Link key={index} href={item.link}>
                    {" "}
                    {item.no}{" "}
                  </Link>
                ))}
              </div>
            )}
            {employmentLife && (
              <p className="mt-2 text-danger">{employmentLife}</p>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "1rem",
              }}
            >
              <button className="transparent-btn" onClick={toggleExpand}>
                {isExpanded ? "Collapse" : "Expand"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleServices3;
