import React from "react";
import Footer from "./components/Footer.tsx";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import './index.css'

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <div className="w-full relative items-center right-0 flex-grow h-[calc(100dvh-100px)] md:h-[83dvh] flex-col">
        <Outlet />
        <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
