import React from "react";
import { FaPassport, FaCloudUploadAlt, FaTimes, FaMagic } from "react-icons/fa";

export default function UploadPage({ onNavigate, onProcessOCR }) {
  const processPassportOCR = () => {
    alert("กำลังประมวลผลด้วย OCR...");
    
    setTimeout(() => {
      onProcessOCR({
        familyName: "SMITH",
        firstName: "JOHN",
        middleName: "DAVID",
        passportNo: "AB1234567",
        nationality: "US",
        dateOfBirth: "1990-05-15",
      });
      onNavigate("form");
      alert("ข้อมูลจากหนังสือเดินทางถูกดึงเรียบร้อยแล้ว!");
    }, 1500);
  };

  return (
    <section className="bg-white max-w-3xl mx-auto p-10 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-2">
        <FaPassport /> Upload Your Passport
      </h2>

      <div
        onClick={() => document.getElementById("passportFile").click()}
        className="border-4 border-dashed border-blue-900 rounded-xl p-12 text-center cursor-pointer hover:border-yellow-400 hover:bg-yellow-50 transition"
      >
        <FaCloudUploadAlt className="text-6xl text-blue-900 mb-4 mx-auto" />
        <h3 className="text-lg font-semibold mb-2">
          Click to Upload Passport Photo
        </h3>
        <p className="text-gray-600 mb-2">Support: JPG, PNG, PDF (Max: 5MB)</p>
        <p className="text-gray-500 text-sm">ຮອງຮັບ: JPG, PNG, PDF (ສູງສຸດ: 5MB)</p>
        <input
          type="file"
          id="passportFile"
          className="hidden"
          accept=".jpg,.jpeg,.png,.pdf"
        />
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => onNavigate("home")}
          className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition"
        >
          <FaTimes className="inline mr-2" />
          Discard and Return to Home
        </button>
        <button
          onClick={processPassportOCR}
          className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          <FaMagic className="inline mr-2" />
          Process with OCR
        </button>
      </div>
    </section>
  );
}