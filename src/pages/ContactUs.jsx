import React from "react";
import CardList from "../components/CardList";
import { FaBuilding } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";

const ContactUs = () => {
  const cardList =[
    {
      title: "Find Police Stations",
      icon: <FaBuilding size={"48px"} />,
      link: "/PoliceStations",
    },
    {
      title: "Find Police Offices",
      icon: <BsBuildingsFill size={"48px"} />,
      link: "/PoliceOffices",
    },
    {
      title: "Contact Directory",
      icon: <FaPhone size={"48px"} />,
      link: "/Directory",
    },
    {
      title: "Complaints",
      icon: <MdEditDocument size={"48px"} />,
      link: "/ComplaintForm",
    },
  ]
  return (
    <div className="">
      <CardList  data={cardList} heading={"Contact Us"}/>
    </div>
  );
};

export default ContactUs;
