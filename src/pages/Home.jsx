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

const Home = () => {
  // const services = [
  //   {
  //     title: "Report Service",
  //     icon: <MdEditDocument size={"48px"} />,
  //     link: "/Report",
  //   },
  //   {
  //     title: "Traffic Service ",
  //     icon: <MdTraffic size={"48px"} />,
  //     link: "/Traffic",
  //   },
  //   {
  //     title: "Search Your Valuables",
  //     icon: <FaSearch size={"48px"} />,
  //     link: "/Search",
  //   },
  //   {
  //     title: "Certificate Service",
  //     icon: <AiFillSafetyCertificate size={"48px"} />,
  //     link: "/Certificate",
  //   },
  // ];

  return (
    <>
      {/* <CardList data={services} heading={"Services"} /> */}
      <ImageSlider />

      <div className="flex flex-col  items-center">
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold">Our Services</h2>
        </div>
        <Reporting />
        <TrafficServices />
        <SearchPage />
        <Message />
      </div>
    </>
  );
};

export default Home;
