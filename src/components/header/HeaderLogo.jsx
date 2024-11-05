"use client";
import React from "react";
import logo from "@/assets/new-img/dts-logo-v1.webp";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = ({ openMenu }) => {
  return (
    <>
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
          onClick={openMenu}
        >
          <i className="fa fa-bars"></i>
        </button>
        <Link className="navbar-brand" href="/">
          <Image src={logo} className="logo" alt="Logo" />
        </Link>
      </div>
    </>
  );
};

export default HeaderLogo;
