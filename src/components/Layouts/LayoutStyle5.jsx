import React from 'react';
import FooterStyle1 from '../footer/FooterStyle1';
import shape38 from '@/assets/img/shape/38.png';
import logoLightSolid from '@/assets/img/logo-light-solid.png';
import SolarBodyClass from '../solar/SolarBodyClass';
import HeaderStyle5 from '../header/HeaderStyle5';

const LayoutStyle5 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle5 />
                <SolarBodyClass />
                {children}
                <FooterStyle1 shape={shape38} shapeClass="bottom" logo={logoLightSolid} formStyle="secondary" />
            </div>
        </>
    );
};

export default LayoutStyle5;