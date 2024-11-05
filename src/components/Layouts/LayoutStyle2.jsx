import React from 'react';
import FooterStyle1 from '../footer/FooterStyle1';
import HeaderStyle2 from '../header/HeaderStyle2';

const LayoutStyle2 = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <HeaderStyle2 />
                {children}
                <FooterStyle1 />
            </div>
        </>
    );
};

export default LayoutStyle2;