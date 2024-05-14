import React, { useState } from "react";

function MobileSnatchingForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    imei: "",
    sim: "",
    numMobiles: "",
    date: "",
    time: "",
    location: "",
    victimName: "",
    contactNum: "",
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to the police or perform any necessary action
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      make: "",
      model: "",
      imei: "",
      sim: "",
      numMobiles: "",
      date: "",
      time: "",
      location: "",
      victimName: "",
      contactNum: "",
    });
  };

  // Function to handle changes in form fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">
        Report Mobile Snatching/Theft to Police
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="make" className="block text-sm font-semibold">
            Make:
          </label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="block text-sm font-semibold">
            Model:
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imei" className="block text-sm font-semibold">
            IMEI Number:
          </label>
          <input
            type="text"
            id="imei"
            name="imei"
            value={formData.imei}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sim" className="block text-sm font-semibold">
            SIM Number:
          </label>
          <input
            type="text"
            id="sim"
            name="sim"
            value={formData.sim}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="numMobiles" className="block text-sm font-semibold">
            Number of Mobiles:
          </label>
          <input
            type="number"
            id="numMobiles"
            name="numMobiles"
            value={formData.numMobiles}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold">
            Date of Incident:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-semibold">
            Time of Incident:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-semibold">
            Location of Incident:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="victimName" className="block text-sm font-semibold">
            Your Name:
          </label>
          <input
            type="text"
            id="victimName"
            name="victimName"
            value={formData.victimName}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNum" className="block text-sm font-semibold">
            Your Contact Number:
          </label>
          <input
            type="tel"
            id="contactNum"
            name="contactNum"
            value={formData.contactNum}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="e.g., 123-456-7890"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MobileSnatchingForm;
