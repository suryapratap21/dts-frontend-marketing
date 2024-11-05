import React from 'react';
import shape37 from '@/assets/img/shape/37.png'
import shape36 from '@/assets/img/shape/36.png'
import Image from 'next/image';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactStyle2 = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden half-shape-top default-padding-bottom">
                <div className="contact-shape">
                    <Image src={shape37} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="contact-stye-one col-lg-5 pt-220 pt-md-120 pt-xs-50">
                            <div className="shape-animated-arrow">
                                <Image src={shape36} alt="Image Not Found" />
                            </div>
                            <ContactInfo />
                        </div>
                        <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15 mt-md-50">
                            <div className="contact-form-style-one">
                                <h5 className="sub-title">Have Questions?</h5>
                                <h2 className="heading">Send us a Massage</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactStyle2;