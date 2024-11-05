"use client"
import React from 'react';
import SocialShare from '../utilities/SocialShare';
import Link from 'next/link';
import logoLightBlue from "@/assets/img/logo-light-blue.png"
import { toast } from 'react-toastify';
import Image from 'next/image';

const SidebarInfo = ({ closeInfoBar, isInfoOpen, openInfoBar, searchOpen }) => {

    const handleSubscribe = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Subscribe")
    }

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav attr-box">
                    <ul>
                        <li className="search"><Link href="#" scroll={false} onClick={searchOpen}><i className="far fa-search"></i></Link></li>
                        <li className="side-menu">
                            <Link href="#" onClick={openInfoBar} scroll={false}>
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`side ${isInfoOpen ? "on" : ""}`}>
                <Link href="#" scroll={false} className="close-side" onClick={closeInfoBar}><i className="fa fa-times"></i></Link>
                <div className="widget">
                    <div className="logo">
                        <Image src={logoLightBlue} alt="Logo" />
                    </div>
                    <p>
                        Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p>
                                    <strong>California, TX 70240</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <a href="mailto:support@validtheme.com"><strong>support@validtheme.com</strong></a>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Contact</p>
                                    <a href="tel:+44-20-7328-4499"> <strong>+44-20-7328-4499</strong></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4 className="title">Get Subscribed!</h4>
                    <form onSubmit={handleSubscribe}>
                        <div className="input-group stylish-input-group">
                            <input type="email" placeholder="Enter your e-mail" className="form-control subscribe" name="email" />
                            <span className="input-group-addon">
                                <button type="submit">
                                    <i className="fal fa-long-arrow-right"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="widget social">
                    <ul className="link">
                        <SocialShare />
                    </ul>
                </div>
            </div>
            <div className={`overlay-screen ${isInfoOpen ? "opened" : ""}`} onClick={closeInfoBar}></div>
        </>
    );
};

export default SidebarInfo;