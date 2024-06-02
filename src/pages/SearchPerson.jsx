import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchableList from "../components/Test";
import { FaSearch } from "react-icons/fa";
import location from "../data/policeStationsData";
import { useLocation } from "react-router-dom";

const SearchPerson = () => {
  const [query, setQuery] = useState("");

  const [items, setItems] = useState(location);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const searchResults = items.filter((item) =>
    item.psName.toLowerCase().includes(query.toLowerCase())
  );

  const { history } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  return (
    <div className="flex flex-col items-center container mx-auto px-4">
      <h1 className="text-3xl my-4 text-white font-semibold text-center">
        Search Missing Person
      </h1>
      <div className="flex w-full justify-center mb-4">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search Location To Find Police Stations"
          value={query}
          onChange={handleSearch}
          className="w-full md:w-1/2 p-4 border border-gray-800 rounded-md focus:outline-none focus:border-cyan-500"
        />
      </div>

      <ul className="w-full">
        {searchResults.map((item, index) => (
          <li
            key={index}
            className="shadow-md rounded-lg p-8 my-4 bg-white max-w-full md:max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-9">
              <div className="flex justify-center md:justify-start">
                <img
                  className="object-contain w-36 h-36 md:w-48 md:h-48"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col w-full">
                <h2 className="text-2xl font-bold mb-2"> {item.psName}</h2>
                <p className="text-xl">
                  Missing Person Name:{" "}
                  <span className="font-bold">{item.rank}</span>
                </p>
                <p className="text-xl">
                  Missing Person CNIC/B-Form:{" "}
                  <span className="font-bold">{item.mobileNo}</span>
                </p>
                <p className="text-xl">
                  Missing Person Father Name:{" "}
                  <span className="font-bold">{item.hmName}</span>
                </p>
                <p className="text-xl">
                  Contact No#:{" "}
                  <span className="font-bold">{item.hmCellNo}</span>
                </p>
                <p className="text-xl">
                  Address: <span className="font-bold">{item.address}</span>
                </p>
                <a
                  className="bg-slate-900 text-white p-4 mt-4 rounded w-full md:w-40 text-center"
                  target="_blank"
                  href={item.location}
                  rel="noopener noreferrer"
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

export default SearchPerson;
