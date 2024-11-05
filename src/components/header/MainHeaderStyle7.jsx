"use client";
import React from "react";
import MainMenu from "./MainMenu";
import useStickyMenu from "../hooks/useStickyMenu";
import useSidebarMenu from "../hooks/useSidebarMenu";
import HeaderLogo from "./HeaderLogo";
import useSubMenuToggle from "../hooks/useSubMenuToggle";
import Link from "next/link";
import logo from "@/assets/new-img/dts-logo-v1.webp";
import Image from "next/image";

const MainHeaderStyle7 = () => {
  const isMenuSticky = useStickyMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs ${
            isMenuSticky ? "sticked" : "no-background"
          } ${isOpen ? "navbar-responsive" : ""}`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <HeaderLogo openMenu={openMenu} />
            <div
              className={`collapse navbar-collapse collapse-mobile ${
                isOpen ? "show" : ""
              }`}
              id="navbar-menu"
            >
              <Image src={logo} alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={closeMenu}
              >
                <i className="fa fa-times"></i>
              </button>
              <MainMenu
                navbarPlacement="navbar-right"
                isOpen={isOpen}
                closeMenu={closeMenu}
                toggleSubMenu={toggleSubMenu}
              />
            </div>
            <div className="attr-right">
              <div className="attr-nav">
                <ul>
                  <li className="button">
                    <Link href="/contact-us">Schedule Appointment</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
          ></div>
        </nav>
      </header>
    </>
  );
};

export default MainHeaderStyle7;
