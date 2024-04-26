"use client";
import "./InquireForm.css";
import { useState } from "react";

export default function InquireForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    itemsOfInterest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar los datos del formulario a tu API o realizar otras acciones
  };

  return (
    <main className="inquire-main">
      <h1>Inquire</h1>
      <p>
        All of our products are made to order and can be customized. Please
        provide the following information:
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
          />
        </div>
        <div>
          <div>
            <label htmlFor="email">E-mail address</label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="name@email.com"
          />
        </div>
        <div>
          <div>
            <label htmlFor="itemsOfInterest">Item(s) of interest</label>
          </div>
          <textarea
            id="itemsOfInterest"
            name="itemsOfInterest"
            value={formData.itemsOfInterest}
            onChange={handleChange}
            required
            placeholder="Choose items"
          ></textarea>
        </div>
        <div>
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
