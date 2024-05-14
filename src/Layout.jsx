import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="bg-slate-100  h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
