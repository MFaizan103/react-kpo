import React, { useEffect } from "react";
import CardList from "./CardList";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaPersonFalling } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import Breadcrumbs from "./BreadCrumbs";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  // const { history } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [history]);

  const searchList = [
    {
      title: "Missing Person",
      icon: <FaPersonCircleQuestion size={"48px"} />,
      link: "",
    },
    {
      title: "Dead Body",
      icon: <FaPersonFalling size={"48px"} />,
      link: "",
    },
    {
      title: "Recovered Mobile",
      icon: <FaMobile size={"48px"} />,
      link: "",
    },
    {
      title: "Recovered Vehicle",
      icon: <FaCar size={"48px"} />,
      link: "",
    },
  ];

  // const breadcrumbs = [
  //   { name: "Home", url: "/Home" },
  //   { name: "Search", url: "/Search" },
  //   // { name: "Subcategory", url: "/category/subcategory" },
  //   // { name: "Current Page", url: "/category/subcategory/current" },
  // ];

  return <CardList data={searchList} heading={"Search For"} />;
};

export default SearchPage;
