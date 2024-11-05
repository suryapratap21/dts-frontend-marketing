"use client"
import React, { useEffect } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';

const Dependency = () => {

  useEffect(() => {
    {

      // Bootstrap Js 
      require('bootstrap/dist/js/bootstrap.bundle.js')

      // WowJs 
      const WOW = require('wowjs/dist/wow.js');
      window.wow = new WOW.WOW({
        live: false
      })

      window.wow.init();

    }
  }, []);

  return (
    <>
      <ScrollToTop symbol={<i className="fal fa-long-arrow-up"></i>} />
    </>
  );
};

export default Dependency;