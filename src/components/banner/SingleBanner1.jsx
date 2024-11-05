import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBanner1 = ({ banner }) => {
  const { bgThumb, title, title1, title2, shapeThumb, btnText } = banner;

  return (
    <>
      <div
        className="banner-thumb bg-cover shadow dark"
        style={{ background: `url(/assets/new-img/${bgThumb})` }}
      ></div>
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-7 offset-xl-5">
            <div className="content">
              <h4>{title}</h4>
              <h2>
                <strong>{title1}</strong> {title2}
              </h2>
              <div className="button mt-40">
                <Link className="btn-animation" href="/services">
                  <i className="fas fa-arrow-right"></i> <span>{btnText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-bg">
        <Image
          src={`/assets/new-img/${shapeThumb}`}
          width={916}
          height={693}
          alt="Shape"
        />
      </div>
    </>
  );
};

export default SingleBanner1;
