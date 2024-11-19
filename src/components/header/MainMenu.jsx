import React from "react";
import Link from "next/link";

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
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
              <Link href="/#">DOT Drug Testing</Link>
            </li>
            <li>
              <Link href="/#">Drug & Alcohol Clearinghouse</Link>
            </li>
            <li>
              <Link href="/#">Driver Qualification File Management System</Link>
            </li>
            <li>
              <Link href="/#">Background Check</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
