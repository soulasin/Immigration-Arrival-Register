import React from "react";
import { FaPlane, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PersonalInfoForm from "./form/PersonalInfoForm";
import TripAccommodationForm from "./form/TripAccommodationForm";
import PaymentForm from "./form/PaymentForm";

export default function FormPage({ 
  page, 
  formData, 
  onNavigate, 
  onPageChange, 
  onFormDataChange,
  onPayment 
}) {
  const nextPage = () => page < 3 && onPageChange(page + 1);
  const prevPage = () => page > 1 && onPageChange(page - 1);

  return (
    <section className="bg-white max-w-4xl mx-auto p-10 rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          <FaPlane className="inline mr-2" /> Immigration Arrival Register
        </h2>
        <button
          onClick={() => onNavigate("home")}
          className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm"
        >
          <FaTimes className="inline mr-1" />
          Discard and Return to Home
        </button>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full font-bold ${
                page === num
                  ? "bg-blue-900 text-white"
                  : page > num
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {num}
            </div>
            <div className="mx-2 text-center">
              <div className={`text-sm ${page === num ? "text-blue-900 font-bold" : "text-gray-600"}`}>
                {num === 1 && "Personal Info"}
                {num === 2 && "Trip & Accommodation"}
                {num === 3 && "Payment"}
              </div>
            </div>
            {num < 3 && <div className="w-8 h-[2px] bg-gray-300 mx-2"></div>}
          </div>
        ))}
      </div>

      {/* Form Pages */}
      {page === 1 && (
        <PersonalInfoForm 
          formData={formData} 
          onChange={onFormDataChange} 
        />
      )}

      {page === 2 && (
        <TripAccommodationForm 
          formData={formData} 
          onChange={onFormDataChange} 
        />
      )}

      {page === 3 && (
        <PaymentForm onPayment={onPayment} />
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-12 pt-8 border-t">
        {page > 1 ? (
          <button
            onClick={prevPage}
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition"
          >
            <FaArrowLeft className="inline mr-2" /> Previous
          </button>
        ) : <div></div>}

        {page < 3 && (
          <button
            onClick={nextPage}
            className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Next <FaArrowRight className="inline ml-2" />
          </button>
        )}
      </div>
    </section>
  );
}