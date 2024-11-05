import Image from "next/image";
import React from "react";

const SingleProcess1 = ({ process }) => {
  const { thumb, steps, title, location, email } = process;

  return (
    <>
      <div className={`process-style-one`}>
        <div className="thumb">
          <Image src={thumb} width={800} height={800} alt="Thumb" />
          {/* <span>{steps}</span> */}
        </div>
        <h4>{title}</h4>
        <p>{location}</p>
        <p>{email}</p>
      </div>
    </>
  );
};

export default SingleProcess1;
