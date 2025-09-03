import React from "react";
import { FaPlane, FaCamera, FaEdit, FaUpload } from "react-icons/fa";

export default function HomePage({ onNavigate }) {
  return (
    <>
      <div className="text-center mb-12">
        <FaPlane className="text-5xl text-blue-900 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
          Immigration Arrival Register
        </h1>
        <h2 className="text-2xl text-blue-900 mb-3">LAO Visa Service</h2>
        <p className="text-gray-600">ບໍລິການວີຊ່າອອນລາຍປອດໄພ ແລະ ສະດວກ</p>
        <p className="text-gray-600">Fast, Secure and Convenient Online Visa Service</p>
      </div>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center hover:shadow-2xl transition">
          <div className="text-5xl text-blue-900 mb-4">
            <FaCamera />
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Passport OCR Upload
          </h3>
          <p className="text-gray-600 mb-4">
            ອັບໂຫລດຮູບພາບ Passport ແລ້ວລະບົບຈະດຶງຂໍ້ມູນອັດຕະໂນມັດ
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Upload passport photo for automatic data extraction
          </p>
          <button
            onClick={() => onNavigate("upload")}
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            <FaUpload className="inline mr-2" />
            Upload Passport
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-10 text-center hover:shadow-2xl transition">
          <div className="text-5xl text-blue-900 mb-4">
            <FaEdit />
          </div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Manual Entry
          </h3>
          <p className="text-gray-600 mb-4">
            ກໍລະນີເພີ່ມຂໍ້ມູນດ້ວຍຕົນເອງ
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Fill information manually
          </p>
          <button
            onClick={() => onNavigate("form")}
            className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            <FaEdit className="inline mr-2" />
            Fill Arrival Card
          </button>
        </div>
      </section>
    </>
  );
}