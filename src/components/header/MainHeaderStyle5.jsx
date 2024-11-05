"use client";
import React from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import logoLightSolid from "@/assets/img/logo-light-solid.png";
import logoSolar from "@/assets/img/logo-solar.png";
import logo from "@/assets/new-img/dts-logo-v1.webp";
import useStickyMenu from "../hooks/useStickyMenu";
import useSubMenuToggle from "../hooks/useSubMenuToggle";
import useSidebarMenu from "../hooks/useSidebarMenu";

const MainHeaderStyle5 = () => {
  const isMenuSticky = useStickyMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-style-three navbar-sticky navbar-default validnavs navbar-fixed white on no-full ${
            isMenuSticky ? "sticked" : "no-background"
          } ${isOpen ? "navbar-responsive" : ""}`}
        >
          <div className="container d-flex justify-content-between align-items-center">
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
                <Image
                  src={logoLightSolid}
                  className="logo logo-display"
                  alt="Logo"
                />
                <Image
                  src={logoSolar}
                  className="logo logo-scrolled"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="navbar-right-part">
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
                      <Link href="/contact-us">Request a Quote</Link>
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
        </nav>
      </header>
    </>
  );
};

export default MainHeaderStyle5;
