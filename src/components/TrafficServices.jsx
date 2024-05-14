import React, { useEffect } from "react";
import { FaIdCard } from "react-icons/fa";
import { RiFileList2Fill } from "react-icons/ri";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FaReceipt } from "react-icons/fa";

import CardList from "./CardList";
import Breadcrumbs from "./BreadCrumbs";

import { useLocation } from "react-router-dom";

const TrafficServices = () => {
  // const { history } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [history]);

  const trafficServices = [
    {
      title: "Online License Verification",
      icon: <FaIdCard size={"48px"} />,
      link: "https://dls.gos.pk/online-verification.html",
    },
    {
      title: "Online Pre-Appointment ",
      icon: <BsFillPersonLinesFill size={"48px"} />,
      link: "https://dls.sindhpolice.gov.pk/home/app",
    },
    {
      title: "Fee Structure",
      icon: <RiFileList2Fill size={"48px"} />,
      link: "https://dls.gos.pk/FeeStructure.html",
    },
    {
      title: "How to Get You License",
      icon: <FaFileCircleQuestion size={"48px"} />,
      link: "https://dls.gos.pk/how-to-ob-dr-lic.html",
    },
  ];

  // const breadcrumbs = [
  //   { name: "Home", url: "/Home" },
  //   { name: "Traffic Services", url: "/Traffic" },
  //   // { name: "Subcategory", url: "/category/subcategory" },
  //   // { name: "Current Page", url: "/category/subcategory/current" },
  // ];
  return <CardList data={trafficServices} heading={"Traffic Services"} />;
};

export default TrafficServices;
