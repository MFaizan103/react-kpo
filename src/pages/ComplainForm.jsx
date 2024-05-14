import React, { useState } from "react";

const ComplaintForm = () => {
  const [complainData, setComplainData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplainData({
      ...complainData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submit logic here, like sending the complaint data to your server
    console.log("Complaint Data:", complainData);
    // Reset the form after submission
    setComplainData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto w-96 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Complaint Form</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={complainData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-cyan-500 mb-4 "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={complainData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-cyan-500 mb-4 "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-semibold mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={complainData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-cyan-500 mb-4 "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-semibold mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={complainData.subject}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-cyan-500 mb-4 "
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold mb-1 ">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={complainData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2 w-full h-32 focus:outline-none focus:border-cyan-500 mb-8 " 
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ComplaintForm;
