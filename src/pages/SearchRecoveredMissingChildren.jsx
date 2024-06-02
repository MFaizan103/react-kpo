import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import SearchableList from "../components/Test";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import missingChildren from "../data/missingChildrednData";

const SearchRecoveredMissingChildren = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(missingChildren);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const searchResults = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const { history } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);

  const showOverlay = (image) => {
    setCurrentImage(image);
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
    setCurrentImage(null);
  };

  return (
    <div className="flex flex-col items-center container mx-auto px-4">
      <h1 className="text-3xl my-4 text-white font-semibold text-center">
        Search Recovered Missing Children
      </h1>

      {/* Search Field */}
      <div className="flex w-full justify-center mb-4">
        <input
          id="search"
          type="text"
          placeholder="Search Missing Children Name"
          value={query}
          onChange={handleSearch}
          className="max-w-full md:w-1/2 p-4 border border-gray-800 rounded-md focus:outline-none focus:border-cyan-500"
        />
      </div>
      {/* Search Field */}
      {/* Card */}
      <ul className="w-full">
        {searchResults.map((item, index) => (
          <li
            key={index}
            className="shadow-md rounded-lg p-8 my-4 bg-white lg:max-w-xl md:max-w-xl mx-auto"
          >
            <div className="flex flex-col justify-evenly gap-9">
              <div className="flex justify-center">
                <img
                  className="object-cover max-w-50  cursor-pointer"
                  src={item.image}
                  alt=""
                  onClick={() => showOverlay(item.image)}
                />
              </div>

              <div className="flex flex-col w-full">
                <p className="text-xl">
                  Child Name: <span className="font-bold">{item.name}</span>
                </p>
                <p className="text-xl">
                  Gender: <span className="font-bold">{item.gender}</span>
                </p>
                <p className="text-xl">
                  Age: <span className="font-bold">{item.age}</span>
                </p>
                <p className="text-xl">
                  B-Form No# (If known):
                  <span className="font-bold">{item.b_form}</span>
                </p>
                <p className="text-xl">
                  Father/Guardian Name:{" "}
                  <span className="font-bold">{item.fatherName} </span>
                </p>
                <p className="text-xl">
                  Father/Guardian CNIC:{" "}
                  <span className="font-bold">{item.fatherCNIC} </span>
                </p>
                <p className="text-xl">
                  Father/Guardian Contact No#:{" "}
                  <span className="font-bold">{item.fatherContact}</span>
                </p>
                <p className="text-xl">
                  Child Address:{" "}
                  <span className="font-bold">{item.address}</span>
                </p>
                <p className="text-xl">
                  FIR: <span className="font-bold">{item.fir}</span>
                </p>
                <p className="text-xl">
                  Under Section:{" "}
                  <span className="font-bold">{item.underSection}</span>
                </p>
                <p className="text-xl">
                  District: <span className="font-bold">{item.district}</span>
                </p>
                <p className="text-xl">
                  Police Station:{" "}
                  <span className="font-bold">{item.policeStation}</span>
                </p>
                {/* <a
                  className="bg-slate-900 text-white p-4 mt-4 rounded w-full md:w-40 text-center"
                  target="_blank"
                  href={item.location}
                  rel="noopener noreferrer"
                >
                  Check Details
                </a> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Card */}

      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={hideOverlay}
        >
          <img
            src={currentImage}
            alt="Large View"
            className="max-w-3xl p-8 border border-solid"
          />
        </div>
      )}
    </div>
  );
};

export default SearchRecoveredMissingChildren;
