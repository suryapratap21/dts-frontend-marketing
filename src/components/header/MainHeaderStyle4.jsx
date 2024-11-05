"use client"
import React from 'react';
import MainMenu from './MainMenu';
import useStickyMenu from '../hooks/useStickyMenu';
import useSubMenuToggle from '../hooks/useSubMenuToggle';
import useSidebarMenu from '../hooks/useSidebarMenu';
import Link from 'next/link';
import logoLightSolid from "@/assets/img/logo-light-solid.png"
import logoBlue from "@/assets/img/logo-blue.png"
import Image from 'next/image';
import useSidebarInfo from '../hooks/useSidebarInfo';
import SidebarInfo from './SidebarInfo';
import useSearchBar from '../hooks/useSearchBar';

const MainHeaderStyle4 = () => {

    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const { openSearch, searchOpen, searchClose } = useSearchBar();

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <header className='adjust-height'>
                <nav className={`navbar mobile-sidenav navbar-theme-secodnary navbar-common navbar-sticky navbar-default validnavs on no-full ${isMenuSticky ? 'sticked' : ''} ${isOpen ? "navbar-responsive" : ""} ${isInfoOpen ? "pause-sticked" : ""} ${openSearch ? "pause-sticked" : ""}`}>
                    <div className="top-search">
                        <div className="container-xl">
                            <form onSubmit={handleSearch}>
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <span className="input-group-addon close-search" onClick={searchClose}><i className="fa fa-times"></i></span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container nav-box d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src={logoLightSolid} className="logo logo-display" alt="Logo" />
                                <Image src={logoBlue} className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>
                        <div className="main-nav-content">
                            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                                <Image src={logoBlue} alt="Logo" />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                    <i className="fa fa-times"></i>
                                </button>
                                <MainMenu navbarPlacement="navbar-right" isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                            </div>
                            <SidebarInfo openInfoBar={openInfoBar} closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} searchOpen={searchOpen} />
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                </nav>
            </header>
        </>
    );
};

export default MainHeaderStyle4;