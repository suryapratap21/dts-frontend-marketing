import Image from "next/image";
import React from "react";

const SingleProcess1 = ({ process }) => {
  const { thumb, steps, title, location, email, phone } = process;

  return (
    <>
      <div className={`process-style-one`}>
        <div className="thumb">
          <Image src={thumb} width={800} height={800} alt="Thumb" />
          {/* <span>{steps}</span> */}
        </div>
        <h4>{title}</h4>
        <p>
          <i class="fas fa-map-marker-alt"></i> {location}
        </p>
        <p>
          <i class="far fa-envelope"></i> {email}
        </p>
        {phone && (
          <p>
            <i class="fas fa-phone"></i> {phone}
          </p>
        )}
      </div>
    </>
  );
};

export default SingleProcess1;
