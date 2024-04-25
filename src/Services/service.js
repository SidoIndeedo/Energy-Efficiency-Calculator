import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './servics.css'



function Service() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, []);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contactNumber: '',
    appointmentDate: '',
    appointmentTime: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend service for processing
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      address: '',
      contactNumber: '',
      appointmentDate: '',
      appointmentTime: '',
      specialRequests: ''
    });
  };

  return (
    <div className="container">
      <h2 className="service-heading">Schedule an Appointment</h2>
      <p className="para">Let our engineers come to your home and calculate all appliance total output on the scheduled day. Please fill out the form below to schedule an appointment:</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Contact Number:</label>
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

        <label>Appointment Date:</label>
        <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />

        <label>Appointment Time:</label>
        <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required />

        <label>Special Requests:</label>
        <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange}></textarea>

        <button className="service-btn" type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
}

export default Service;
