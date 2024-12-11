"use client";

import React from "react";
import Link from "next/link";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
  const router = useRouter();
  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link
            href="/#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Services
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/services/dot-drug-testing">DOT Drug Testing</Link>
            </li>
            <li>
              <Link href="/services/clearinghouse">
                Drug & Alcohol Clearinghouse
              </Link>
            </li>
            <li>
              <Link href="/services/dq-file-management">
                Driver Qualification File Management System
              </Link>
            </li>
            <li>
              <Link href="/services/random-management">
                Random Consortium Management
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={(e) => toggleSubMenu(e, router.push("/pricing"))}
          >
            Pricing
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link href="/pricing/random-consortium-package">
                DOT Random Consortium
              </Link>
            </li>
            <li>
              <Link href="/pricing/driver-education">Driver Education</Link>
            </li>
            <li>
              <Link href="/pricing/drug-test">Immediate Drug Test</Link>
            </li>
          </ul>
        </li>
        {/* <li>
          <Link href="/pricing">Pricing</Link>
        </li> */}
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
