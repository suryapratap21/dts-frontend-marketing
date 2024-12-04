"use client";

import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

const Contexts = ({ children }) => {
  const [globalState, setGlobalState] = useState(() => {
    if (typeof window !== "undefined") {
      const cartData = localStorage.getItem("cartState");
      return cartData
        ? {
            cart: JSON.parse(cartData),
            globalDialog: {
              isOpen: false,
              title: "",
              content: <></>,
            },
          }
        : {
            cart: {
              package: {},
              education: [],
              drugTests: [],
            },
            globalDialog: {
              isOpen: false,
              title: "",
              content: <></>,
            },
          };
    }
    return {
      cart: {
        package: {},
        education: [],
        drugTests: [],
      },
      globalDialog: {
        isOpen: false,
        title: "",
        content: <></>,
      },
    };
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartState", JSON.stringify(globalState.cart));
    }
  }, [globalState.cart]);
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Contexts;
