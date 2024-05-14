import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchableList from "../components/Test";
import { FaSearch } from "react-icons/fa";

const PoliceOffices = () => {
  const [query, setQuery] = useState("");

  const location = [
    {
      psName: "DIG East",
      psImage:
        "https://pbs.twimg.com/ext_tw_video_thumb/1740772276692475904/pu/img/S706vriBuo38NtlM?format=jpg&name=large",
      contact: "+92 213 856963",
      digpName: "Ghulam Sarwar, PSP",
      address:
        "Saddar Traffic Section, V25X+7M7, Shahrah-e-Faisal Rd, Fowler Lines Karachi Cantonment, Karachi, Karachi City, Sindh, Pakistan",
      location:
        "https://www.google.com/maps/dir/24.8643584,67.0564352/V25X%2B7M7+Saddar+Traffic+Section,+Shahrah-e-Faisal+Rd,+Fowler+Lines+Karachi+Cantonment,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8602088,67.0492554,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33e80cdc0ae55:0x42cffdb07a73dac5!2m2!1d67.0491582!2d24.8581653?entry=ttu",
    },
    {
      psName: "DIG West",
      psImage:
      "https://pbs.twimg.com/ext_tw_video_thumb/1740772276692475904/pu/img/S706vriBuo38NtlM?format=jpg&name=large",
      contact: "+92 213 856963",
      digpName: "Ghulam Sarwar, PSP",
      address:
        "Saddar Traffic Section, V25X+7M7, Shahrah-e-Faisal Rd, Fowler Lines Karachi Cantonment, Karachi, Karachi City, Sindh, Pakistan",
      location:
        "https://www.google.com/maps/dir/24.8643584,67.0564352/V25X%2B7M7+Saddar+Traffic+Section,+Shahrah-e-Faisal+Rd,+Fowler+Lines+Karachi+Cantonment,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8602088,67.0492554,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33e80cdc0ae55:0x42cffdb07a73dac5!2m2!1d67.0491582!2d24.8581653?entry=ttu",
    },
    {
      psName: "DIG South",
      psImage:
      "https://pbs.twimg.com/ext_tw_video_thumb/1740772276692475904/pu/img/S706vriBuo38NtlM?format=jpg&name=large",
      contact: "+92 213 856963",
      digpName: "Ghulam Sarwar, PSP",
      address:
        "Saddar Traffic Section, V25X+7M7, Shahrah-e-Faisal Rd, Fowler Lines Karachi Cantonment, Karachi, Karachi City, Sindh, Pakistan",
      location:
        "https://www.google.com/maps/dir/24.8643584,67.0564352/V25X%2B7M7+Saddar+Traffic+Section,+Shahrah-e-Faisal+Rd,+Fowler+Lines+Karachi+Cantonment,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8602088,67.0492554,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3eb33e80cdc0ae55:0x42cffdb07a73dac5!2m2!1d67.0491582!2d24.8581653?entry=ttu",
    },
    
  ];
  const [items, setItems] = useState(location);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const searchResults = items.filter((item) =>
    item.psName.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="flex flex-col items-center container mx-auto ">
      <h1 className="text-3xl my-4 font-semibold">Search Police Office</h1>
      <div className="flex w-full justify-center ">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          placeholder="Search Location To Find Police Office"
          value={query}
          onChange={handleSearch}
          className="w-1/2 p-4 border border-gray-800 rounded-md focus:outline-none focus:border-cyan-500"
        />
     
      </div>

      <ul className="rounded-lg px-8 py-4 w-full my-8 flex flex-col justify-evenly ">
        {searchResults.map((item, index) => (
          <li key={index} className="shadow-md rounded-lg p-8 my-4 bg-white">
            <div className="flex gap-9">
              <div className="w-60">
                <img className="object-cover" src={item.psImage} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2"> {item.psName}</h2>
                <p className="text-xl"> Contact: {item.contact}</p>
                <p className="text-xl"> DIGP Name : {item.digpName}</p>
                <p className="text-xl"> Address: {item.address}</p>
                <a
                  className="text-indigo-800 float-right"
                  target="_blank"
                  href={item.location}
                >
                  Find on Map
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PoliceOffices;
