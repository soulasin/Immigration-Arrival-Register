import React, { useState } from "react";

export default function FormSection({ onBack, ocrData = {} }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 3;
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="p-6 bg-gray-50 rounded-lg" id="formSection">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold"><i className="fas fa-plane-arrival mr-2"></i> laosvisa</h2>
        <button className="btn btn-danger bg-red-500 text-white py-1 px-3 rounded mt-2" onClick={onBack}>
          <i className="fas fa-times mr-1"></i> Discard and Return to Home
        </button>
      </div>

      {/* Steps */}
      <div className="flex justify-center gap-4 mb-6">
        {[1,2,3].map((step) => (
          <div key={step} className={`flex flex-col items-center ${currentPage===step?"text-blue-900":"text-gray-400"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentPage===step?"border-blue-900":"border-gray-400"}`}>
              {step}
            </div>
            <span className="text-sm mt-1">{step===1?"Personal":"Trip/Pay"}{step===3?"ment":""}</span>
          </div>
        ))}
      </div>

      <form>
        {currentPage === 1 && (
          <div className="space-y-4">
            <h3 className="font-semibold">Personal Information In Passport</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Family Name" defaultValue={ocrData.familyName || ""} required className="border p-2 rounded w-full"/>
              <input type="text" placeholder="First Name" defaultValue={ocrData.firstName || ""} required className="border p-2 rounded w-full"/>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Middle Name" defaultValue={ocrData.middleName || ""} className="border p-2 rounded w-full"/>
              <input type="text" placeholder="Passport No." defaultValue={ocrData.passportNo || ""} required className="border p-2 rounded w-full"/>
            </div>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <h3 className="font-semibold">Trip & Accommodation Information</h3>
            <p>Page 2 content here...</p>
          </div>
        )}

        {currentPage === 3 && (
          <div>
            <h3 className="font-semibold">Payment</h3>
            <p>Total Price: 50$</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button type="button" onClick={prevPage} className={`btn bg-gray-300 px-4 py-2 rounded ${currentPage===1?"hidden":""}`}>
            <i className="fas fa-arrow-left mr-2"></i> Previous
          </button>
          {currentPage < totalPages ? (
            <button type="button" onClick={nextPage} className="btn bg-blue-900 text-white px-4 py-2 rounded">
              Next <i className="fas fa-arrow-right ml-2"></i>
            </button>
          ) : (
            <button type="button" onClick={() => alert("Form submitted!")} className="btn bg-green-600 text-white px-4 py-2 rounded">
              <i className="fas fa-check mr-2"></i> Submit Application
            </button>
          )}
        </div>
      </form>
    </section>
  );
}