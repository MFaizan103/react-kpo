import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0F0030" }}>
      <Header />
      <div className="flex-1">

      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
