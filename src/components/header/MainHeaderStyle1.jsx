"use client";
import React from "react";
import MainMenu from "./MainMenu";
import HeaderLogo from "./HeaderLogo";
import Link from "next/link";
import useStickyMenu from "../hooks/useStickyMenu";
import useSubMenuToggle from "../hooks/useSubMenuToggle";
import useSidebarMenu from "../hooks/useSidebarMenu";
import Image from "next/image";
import logo from "@/assets/new-img/dts-logo-v1.webp";

const MainHeaderStyle1 = () => {
  const isMenuSticky = useStickyMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs white navbar-fixed on menu-center no-full ${
            isMenuSticky ? "sticked" : "no-background"
          } ${isOpen ? "navbar-responsive force-sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-center">
              <div className="col-xl-2 col-lg-3 col-md-2 col-sm-1 col-1">
                <HeaderLogo openMenu={openMenu} />
              </div>
              <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-4 col-sm-4 col-4">
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
                    navbarPlacement="navbar-center"
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                    toggleSubMenu={toggleSubMenu}
                  />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-7 col-7">
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
            </div>
            <div
              className={`overlay-screen ${isOpen ? "opened" : ""}`}
              onClick={closeMenu}
            ></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MainHeaderStyle1;
