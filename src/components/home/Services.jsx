import React from "react";

export default function ServiceOptions({ onShowUpload, onShowForm }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            ບໍລິການວີຊາຂອງພວກເຮົາ
          </h2>
          <p className="text-gray-600">
            ບໍລິການວີຊາທີ່ສົມບູນ ແລະ ມີຄຸນນະພາບ
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Passport OCR Upload */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="text-blue-600 text-5xl mb-4">
              <i className="fas fa-camera"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              Passport OCR Upload
            </h3>
            <p className="text-gray-600 mb-1">
              ອັບໂຫລດຮູບພາບ Passport ແລ້ວລະບົບຈະດຶງຂໍ້ມູນອັດຕະໂນມັດ
            </p>
            <p className="text-gray-600 mb-6">
              Upload passport photo for automatic data extraction
            </p>
            <button
              onClick={onShowUpload}
              className="inline-block bg-yellow-400 text-blue-900 font-bold py-2 px-8 rounded-full hover:bg-yellow-500 transition"
            >
              <i className="fas fa-upload mr-2"></i> Upload Passport
            </button>
          </div>

          {/* Manual Entry */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="text-blue-600 text-5xl mb-4">
              <i className="fas fa-edit"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-blue-900">
              Manual Entry
            </h3>
            <p className="text-gray-600 mb-1">
              ກໍລະນີເພີ່ມຂໍ້ມູນດ້ວຍຕົນເອງ
            </p>
            <p className="text-gray-600 mb-6">Fill information manually</p>
            <button
              onClick={onShowForm}
              className="inline-block bg-blue-600 text-white font-bold py-2 px-8 rounded-full hover:bg-blue-700 transition"
            >
              <i className="fas fa-pen mr-2"></i> Fill Arrival Card
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
