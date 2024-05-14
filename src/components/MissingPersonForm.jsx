import React, { useState } from "react";
import CheckBox from "./CheckBox";

const MissingPersonForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    description: "",
    contact: "",
    dateMissing: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the functionality to submit the form data
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      age: "",
      gender: "",
      description: "",
      contact: "",
      dateMissing: "",
      photo: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-semibold mb-4">Report a Missing Person</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <CheckBox/>
          <label htmlFor="healthStatus" className="block mb-1">
            Health Status of the Missing Person
          </label>
          <select
            name="healthStatus"
            
            id="healthStatus"
            className="w-full border rounded-md px-4 py-2"
          >
            <option value="none">Select</option>
            <option value="none">Normal</option>
            <option value="none">Mental Health Issues</option>
            <option value="none">Select</option>
          </select>
          <label htmlFor="name" className="block mb-1">
            Name of the Missing Person
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Physical Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-md px-4 py-2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block mb-1">
            Contact Information
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateMissing" className="block mb-1">
            Date Missing
          </label>
          <input
            type="date"
            id="dateMissing"
            name="dateMissing"
            value={formData.dateMissing}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block mb-1">
            Upload Photo (optional)
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handlePhotoChange}
            accept="image/*"
            className="w-full border rounded-md px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MissingPersonForm;
