import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchableList from "../components/Test";
import { FaSearch } from "react-icons/fa";
import location from "../data/policeStationsData";

const PoliceStations = () => {
  const [query, setQuery] = useState("");

  const [items, setItems] = useState(location);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const searchResults = items.filter((item) =>
    item.psName.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="flex flex-col items-center container mx-auto">
      <h1 className="text-3xl my-4 text-white font-semibold text-white">
        Search Police Station
      </h1>
      <div className="flex w-full justify-center ">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          placeholder="Search Location To Find Police Stations"
          value={query}
          onChange={handleSearch}
          className="w-1/2 p-4 border border-gray-800 rounded-md focus:outline-none focus:border-cyan-500"
        />
      </div>

      <ul className="">
        {searchResults.map((item, index) => (
          <li key={index} className="shadow-md rounded-lg p-8 my-4 max-w-3xl bg-white">
            <div className="flex gap-9">
              <div className="w-50 flex items-center">
                <img
                  className="object-cover"
                  src={item.image}
                  width={"150px"}
                  alt=""
                />
              </div>
              {/* Text */}
              <div className="flex flex-col w-full">
                <h2 className="text-2xl font-bold mb-2"> {item.psName}</h2>
                <p className="text-xl"> SHO Name & Rank: {item.rank}</p>
                <p className="text-xl"> SHO Contact : {item.mobileNo}</p>
                <p className="text-xl"> Head Muharir Name : {item.hmName}</p>
                <p className="text-xl">Head Muharir Contact: {item.hmCellNo}</p>
                <p className="text-xl"> Address: {item.address}</p>
                <a
                  className="bg-slate-900 text-white p-4 my-4 rounded" style={{width:"150px"}}
                  target="_blank"
                  href={item.location}
                >
                  Find on Map
                </a>
              </div>
              {/* Text */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PoliceStations;
