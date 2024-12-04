"use client";

import React, { useContext } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { GlobalContext } from "./contexts";

const GlobalDialog = () => {
  const {
    globalState: { globalDialog },
    setGlobalState,
  } = useContext(GlobalContext);
  const close = () => {
    setGlobalState((prev) => ({
      ...prev,
      globalDialog: {
        isOpen: false,
        title: "",
        content: <></>,
      },
    }));
  };
  return (
    <>
      <div
        id="global-dialog-overlay"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 10000,
          display: globalDialog.isOpen ? "block" : "none",
          transition: "all 200ms ease",
        }}
      ></div>
      <Dialog
        open={globalDialog.isOpen}
        as="div"
        style={{ position: "relative", zIndex: 10001 }}
        onClose={close}
      >
        <div
          style={{
            overflowY: "auto",
            position: "fixed",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            zIndex: 10,
            width: "100vw",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "1rem",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100%",
            }}
          >
            <DialogPanel
              transition
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                width: "100%",
                maxWidth: "28rem",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                backdropBlur: "blur(40px)",
                backgroundColor: "#fff",
              }}
            >
              <DialogTitle as="h3" style={{ fontWeight: 500, color: "#000" }}>
                {globalDialog.title || "Title"}
              </DialogTitle>
              {globalDialog.content}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default GlobalDialog;
