"use client"
import React, { useEffect } from 'react';

const SolarBodyClass = () => {

    useEffect(() => {
        document.body.classList.add('home-solar');

        return () => {
            document.body.classList.remove('home-solar');
        };
    }, []);

    return (
        <>

        </>
    );
};

export default SolarBodyClass;