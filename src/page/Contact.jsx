import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ຂໍ້ຄວາມຂອງທ່ານຖືກສົ່ງແລ້ວ!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">ຕິດຕໍ່ພວກເຮົາ</h1>
          <p>ຖ້າທ່ານມີຄໍາຖາມ ຫຼື ຄໍາແນະນຳ, ກະລຸນາຕິດຕໍ່ຜ່ານຟອມນີ້</p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <main className="max-w-6xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-900 text-2xl mr-3" />
            <p>123 ຖະໜົນຕົວຢ່າງ, ວຽງຈັນ, ສປປ ລາວ</p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-blue-900 text-2xl mr-3" />
            <p>+856 20 1234 5678</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-900 text-2xl mr-3" />
            <p>info@bphservice.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">ຊື່</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">ຂໍ້ຄວາມ</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            ສົ່ງຂໍ້ຄວາມ
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
