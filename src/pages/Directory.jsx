import React, { useState } from "react";

const Directory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const emergencyContacts = [
    { name: "Police", number: "15" },
    { name: "Ambulance/Emergency Medical Services", number: "115" },
    { name: "Fire Brigade", number: "16" },
    { name: "Rescue Services", number: "1122" },
    { name: "Edhi Foundation (Emergency Services)", number: "115" },
    { name: "Chhipa Welfare Association (Emergency Services)", number: "1020" },
    {
      name: "Pakistan Red Crescent Society (Emergency Services)",
      number: "+92 51 9260868",
    },
    { name: "Civil Defence", number: "111-000-117" },
    { name: "Pakistan Army Emergency Helpline", number: "1135" },
    { name: "National Highway Helpline", number: "130" },
    { name: "Anti-Narcotics Force Helpline", number: "1415" },
    { name: "Bomb Disposal Squad", number: "911" },
    { name: "Child Protection and Welfare Bureau Helpline", number: "1121" },
    {
      name: "National Disaster Management Authority (NDMA) Helpline",
      number: "051-9205037",
    },
  ];

  const filteredContacts = emergencyContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" flex flex-col py-8 items-center">
      <h2 className="text-2xl font-bold mb-4">Emergency Contact Directory</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-1/2 p-4 border border-gray-800 rounded-md focus:outline-none focus:border-cyan-500 mb-8"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="divide-y divide-gray-300 w-1/2">
        {filteredContacts.map((contact, index) => (
          <li key={index} className="p-4">
            <div className="flex justify-between p-4">
              <p className="font-semibold text-xl">{contact.name}</p>
              <p className="text-xl"> {contact.number}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directory;
