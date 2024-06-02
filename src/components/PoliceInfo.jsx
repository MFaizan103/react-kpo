import React, { useEffect } from "react";
import CardList from "./CardList";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaPersonFalling } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import Breadcrumbs from "./BreadCrumbs";
import { useLocation } from "react-router-dom";

const PoliceInfo = () => {
  // const { history } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [history]);

  const policeInfo = [
    {
      title: "Missing Person",
      icon: <FaPersonCircleQuestion size={"48px"} />,
      link: "/MissingPerson",
    },
    {
      title: "Dead Body ",
      icon: <FaPersonFalling size={"48px"} />,
      link: "/Traffic",
    },
    {
      title: "Mobile Snatching/Theft",
      icon: <FaMobile size={"48px"} />,
      link: "/MobileSnatching",
    },
    {
      title: "Vehicle Theft/Snatching",
      icon: <FaCar size={"48px"} />,
      link: "/Certificate",
    },
  ];

  // const breadcrumbs = [
  //   { name: "Home", url: "/Home" },
  //   { name: "Report Service", url: "/Report" },
  //   // { name: "Subcategory", url: "/category/subcategory" },
  //   // { name: "Current Page", url: "/category/subcategory/current" },
  // ];
  return <CardList data={policeInfo} heading={"Police Info"} />;
};

export default PoliceInfo;
