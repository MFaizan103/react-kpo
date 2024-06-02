import React, { useState } from "react";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [query, setQuery] = useState("");

  const notification = [
    {
      title: "New Sindh Police Job Annoucement",
      detail: "Details of the job of sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "SSU",
      detail: "Details of the job of sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "ASI Jobs",
      detail: "Details of the job of sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "New Sindh Police Job Annoucement",
      detail: "Details of the job of sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
    {
      title: "New Sindh Police Job Annoucement",
      detail: "Details of the job of sindh police for the position of ASI",
      date: "20-05-2024",
      time: "12:00 PM",
    },
  ];

  const [items, setItems] = useState(notification);
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const resullt = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="py-8 ">
      <h1 className="text-center text-3xl text-white font-medium">
        Notifications
      </h1>

      <div className="flex justify-center  items-center gap-5 p-4  max-w-fit mx-auto ">
        <button className="p-4 bg-red-600 rounded-lg font-semibold shadow-xl text-xl text-white min-w-48">
          Notifications
        </button>
        <button className="p-4 rounded-lg font-semibold bg-slate-200 hover:bg-red-600 hover:text-white text-xl min-w-48">
          Orders
        </button>
      </div>

      {/* Search */}

      <div className="flex w-full justify-center py-8">
        <label htmlFor="search"></label>
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
        {resullt.map((item) => (
          <Link className="shadow-lg py-4 px-8 rounded-lg bg-slate-50 w-1/2">
            <li key={item.title}>
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
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
