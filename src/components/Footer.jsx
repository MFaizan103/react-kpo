import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-8" style={{ backgroundColor: "#0F0030" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="flex-1">
            <Link to="/Home" className="text-white text-lg font-bold flex items-center mb-4">
              <img className="pr-2" src="/logo.png" width="52px" alt="Karachi Police Office" />
              Karachi Police Office
            </Link>
            <p className="text-left md:text-left">
              Karachi Police Office, Shahrah-e-Faisal, Karachi
            </p>
            <p className="text-left md:text-left">
              Contact: +92 213 569369
            </p>
            <p className="text-left md:text-left">
              Email: karachipoliceoffice301@gmail.com
            </p>
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <nav className="flex flex-col space-y-2">
              <Link to="/Home" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/Notifications" className="text-white hover:text-gray-300">Notifications</Link>
              <Link to="/Jobs" className="text-white hover:text-gray-300">Jobs</Link>
              <Link to="/AboutUs" className="text-white hover:text-gray-300">About Us</Link>
            </nav>
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">Find Us</h2>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="200"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=KPO&t=k&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 py-4 mt-8">
        <div className="container mx-auto text-xs text-center">
          <p>&copy; 2024 Karachi Police Office</p>
          <p>Developed By IT Team KPO</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
