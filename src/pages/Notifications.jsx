import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Notifications = () => {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("notifications"); // State to manage active tab
  const { history } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [history]);
  const notification = [
    {
      title: "New Sindh Police Job Announcement",
      detail: "Details of the job of Sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "SSU",
      detail: "Details of the job of Sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "SSU",
      detail: "Details of the job of Sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "SSU",
      detail: "Details of the job of Sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    // Other notifications
  ];

  const orders = [
    {
      title: "Order 1",
      detail: "Details of order 1",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "Order 2",
      detail: "Details of order 2",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "Order 2",
      detail: "Details of order 2",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "Order 2",
      detail: "Details of order 2",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    // Other orders
  ];

  const items = activeTab === "notifications" ? notification : orders; // List based on active tab

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="py-8">
      <h1 className="text-center text-3xl text-white font-medium ">
        {activeTab === "notifications" ? "Notifications" : "Orders"}
      </h1>

      <div className="flex justify-center items-center gap-5 p-4 w-full mx-auto">
        <button
          onClick={() => setActiveTab("notifications")}
          className={`p-4 ${
            activeTab === "notifications"
              ? "bg-red-600 text-white"
              : "bg-slate-200 text-slate-700"
          } rounded-lg font-semibold shadow-xl lg:text-xl text-white lg:min-w-48 md:min-w-48 sm:min-w-48`}
        >
          Notifications
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`p-4 ${
            activeTab === "orders"
              ? "bg-red-600 text-white"
              : "bg-slate-200 text-slate-700"
          } rounded-lg font-semibold shadow-xl lg:text-xl text-white lg:min-w-48   md:min-w-48 sm:min-w-48`}
        >
          Orders
        </button>
      </div>

      {/* Search */}
      <div className="flex w-full justify-center py-8">
        <input
          id="search"
          type="text"
          placeholder="Search Notification or Order"
          value={query}
          onChange={handleSearch}
          className="w-1/2 p-4 border border-gray-800 rounded-md focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* List */}
      <ul className="flex flex-col items-center gap-4">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className="shadow-lg py-4 px-8 rounded-lg bg-slate-50 w-1/2"
          >
            <p className="font-bold text-xl">{item.title}</p>
            <p>{item.detail}</p>
            <div className=" mt-2">
              <p className="font-light text-sm">{item.date}</p>
              <p className="font-light text-sm">{item.time}</p>
            </div>
            <div className=" float-end">
              <button className="p-4 text-sm rounded-lg font-semibold text-white bg-slate-800 hover:bg-red-600 hover:text-white min-w-32">
                Download
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
