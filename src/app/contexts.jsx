"use client";

import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

const Contexts = ({ children }) => {
  const [globalState, setGlobalState] = useState(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("globalState");
      return savedData
        ? JSON.parse(savedData)
        : {
            cart: {
              package: {},
              education: [],
              drugTests: [],
            },
          };
    }
    return {
      cart: {
        package: {},
        education: [],
        drugTests: [],
      },
    };
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("globalState", JSON.stringify(globalState));
    }
  }, [globalState]);
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Contexts;
