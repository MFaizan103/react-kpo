import React from "react";
// import CardList from "../components/CardList";
import Message from "../components/Message";
import ImageSlider from "../components/ImageSlider";
import { FaSearch } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { MdTraffic } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import Reporting from "../components/Reporting";
import TrafficServices from "../components/TrafficServices";
import SearchPage from "../components/SearchPage";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      {/* <CardList data={services} heading={"Services"} /> */}

      <div className="flex flex-col  items-center h-full">
        <div className="text-center mt-8 flex flex-col justify-center items-center p-8">
          <img src="/logo.png" alt="logo" width={"150"} />
          <h1 className="text-2xl text-white font-bold p-8">
            Welcome to Karachi Police Official Website
          </h1>
        </div>
        <h2 className="text-3xl text-white">Our Services</h2>
        <ContactUs />
        <Reporting/>
        <TrafficServices />
        <SearchPage />
        <Message />
      </div>
    </>
  );
};

export default Home;
