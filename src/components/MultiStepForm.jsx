import React, { useState } from "react";

export default function MultiStepForm({ onBack }) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <section className="form-section py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8"><i className="fas fa-plane-arrival mr-2"></i> laosvisa</h2>
      <div className="text-center mb-6">
        <button onClick={onBack} className="btn bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">
          <i className="fas fa-times mr-2"></i> Discard and Return
        </button>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between mb-10">
        {["Personal Info", "Trip & Accommodation", "Payment"].map((title, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 ${
                step === index + 1 ? "bg-blue-900 text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            <div className={`text-sm font-medium ${step === index + 1 ? "text-blue-900" : "text-gray-500"}`}>{title}</div>
          </div>
        ))}
      </div>

      {/* Form Pages */}
      <div className="form-pages">
        {step === 1 && (
          <div className="fade-in">
            {/* Personal Information form fields here */}
            <p className="text-gray-600">Page 1: Personal Information form content...</p>
          </div>
        )}
        {step === 2 && (
          <div className="fade-in">
            <p className="text-gray-600">Page 2: Trip & Accommodation form content...</p>
          </div>
        )}
        {step === 3 && (
          <div className="fade-in">
            <p className="text-gray-600 text-center">Page 3: Payment & summary...</p>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        {step > 1 && <button onClick={prevStep} className="btn bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-400">Back</button>}
        {step < 3 && <button onClick={nextStep} className="ml-auto btn bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">Next</button>}
      </div>
    </section>
  );
}
