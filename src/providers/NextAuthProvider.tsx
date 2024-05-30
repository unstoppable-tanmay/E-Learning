// mark as client component
"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        {children}
        <ToastContainer />
      </NextUIProvider>
    </SessionProvider>
  );
};

export default SessionWrapper;
