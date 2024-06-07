import React from "react";

const Navbar2 = () => {
  return (
    <div>
      {" "}
      <nav className="py-4 mx-auto" style={{ backgroundColor: "#0F0030" }}>
        <div className="flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white text-sm font-bold flex items-center"
            >
              <img className="pr-2" src="/logo.png" width="52px" alt="" />
              Karachi Police Office
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`flex-col md:flex-row md:flex md:items-center space-x-0 md:space-x-5 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link
                to="/Notifications"
                className="text-white hover:text-gray-300"
              >
                Notification
              </Link>
              <Link to="" className="text-white hover:text-gray-300">
                Jobs
              </Link>
              <Link to="" className="text-white hover:text-gray-300">
                About Us
              </Link>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 mt-2 md:mt-0">
              <Link to="" className="text-white text-sm flex items-center">
                Login
              </Link>
              <Link to="" className="text-white text-sm flex items-center">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
