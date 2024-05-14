import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" sticky top-0 z-10 min-w-full  ">
      <nav className="bg-gray-950 py-4 mx-auto">
        <div className="flex justify-evenly items-center">
          <div className="flex items-center">
            <Link
              to={"/Home"}
              className="text-white text-sm font-bold flex items-center"
            >
              <img className="pr-2" src="/logo.png" width={"52px"} alt="" />
              Karachi Police Office
            </Link>
          </div>

          <div className="flex space-x-5">
            <Link to={"/Home"} className="text-white hover:text-gray-300">
              Home
            </Link>

            <Link
              to={"/Notifications"}
              className="text-white hover:text-gray-300"
            >
              Notification
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
          <div className="flex  space-x-5">
            <Link
              to={"/Login"}
              className="text-white text-sm  flex items-center"
            >
              Login
            </Link>
            <Link
              to={"/Signup"}
              className="text-white text-sm  flex items-center"
            >
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
