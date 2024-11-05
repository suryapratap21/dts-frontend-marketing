import React from 'react';
import dashboard1 from '@/assets/img/dashboard/1.jpg'
import dashboard3 from '@/assets/img/dashboard/3.jpg'
import illustration12 from '@/assets/img/illustration/12.png'
import Image from 'next/image';

const AboutStyle6 = () => {
    return (
        <>
            <div className="about-style-six-area default-padding">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <div className="about-style-six-thumb">
                                <Image src={dashboard3} alt="Image not Found" />
                                <Image src={illustration12} alt="Image not Found" />
                                <div className="shape">
                                    <Image src={dashboard1} alt="Image Not found" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="about-style-six-info">
                                <h4 className="sub-heading secondary">About the Software</h4>
                                <h2 className="title">Enhance workflow and improve your productivity</h2>
                                <p>
                                    Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.
                                </p>
                                <ul className="list-regular">
                                    <li>Improve seller effectiveness by streamlining your sales process.</li>
                                    <li>No training or maintenance needed.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle6;