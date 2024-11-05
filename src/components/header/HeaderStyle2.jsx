"use client";
import React from "react";
import MainMenu from "./MainMenu";
import HeaderLogo from "./HeaderLogo";
import Image from "next/image";
import logo from "@/assets/new-img/dts-logo-v1.webp";
import useStickyMenu from "../hooks/useStickyMenu";
import useSubMenuToggle from "../hooks/useSubMenuToggle";
import useSidebarMenu from "../hooks/useSidebarMenu";

const HeaderStyle2 = () => {
  const isMenuSticky = useStickyMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark on menu-center no-full ${
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
              <div className="collapse-header">
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
              </div>
              <MainMenu
                navbarPlacement="navbar-center"
                isOpen={isOpen}
                closeMenu={closeMenu}
                toggleSubMenu={toggleSubMenu}
              />
            </div>
            <div className="attr-right">
              <div className="attr-nav">
                <ul>
                  <li className="contact">
                    <div className="call">
                      <div className="icon">
                        <i className="fas fa-comments-alt-dollar"></i>
                      </div>
                      <div className="info">
                        <p>Have any Questions?</p>
                        <h5>
                          <a href="mailto:info@crysta.com">info@bestup.com</a>
                        </h5>
                      </div>
                    </div>
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

export default HeaderStyle2;
