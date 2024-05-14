import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white min-w-full">
      <div className="flex justify-evenly place-items-start p-4 flex-wrap">
        <div>
          <Link
            to={"/Home"}
            className="text-white text-sm font-bold flex items-center"
          >
            <img className="pr-2" src="/logo.png" width={"52px"} alt="" />
            Karachi Police Office
          </Link>
        </div>

        <div className="flex flex-col justify-evenly gap-5 px-5">
          <Link to={"/Home"} className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to={"/Services"} className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link
            to={"/Notifications"}
            className="text-white hover:text-gray-300"
          >
            Notifications
          </Link>
          <Link to={"/Jobs"} className="text-white hover:text-gray-300">
            Jobs
          </Link>

          <Link to={"/AboutUs"} className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to={"/ContactUs"} className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col gap-5 px-5">
          <div className="">
            <p>Address:</p>
            <p>Karachi Police Office, Shahrah-e-Faisal, Karachi</p>
          </div>
          <div className="">
            <p>Contact:</p>
            <p>+92 213 569369</p>
          </div>
          <div className="">
            <p>Email:</p>
            <p>karachipoliceoffice301@gmail.com</p>
          </div>
        </div>

        {/* Map */}
        <div className="pr-5 mx-5">
          <div className="mapouter ">
            <div className="gmap_canvas ">
              <iframe
                width={367}
                height={220}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=KPO&t=k&z=15&ie=UTF8&iwloc=&output=embed"
              />
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;height:220px;width:376px;}",
                }}
              />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".gmap_canvas {overflow:hidden;background:none!important;height:220px;width:376px;}",
                }}
              />
            </div>
          </div>
        </div>
        {/* Map */}
      </div>

      <div className="text-xs text-center pr-5 py-2 bg-slate-900 gap-2 flex flex-col  mx-auto ">
        <p>Copyright © Karachi Police Office</p>
        <p>Developed By IT Team KPO</p>
      </div>
    </footer>
  );
};

export default Footer;
