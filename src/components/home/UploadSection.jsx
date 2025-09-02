import React from "react";

export default function UploadSection({ onProcess, onBack }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onProcess();
    }
  };

  return (
    <section className="p-6 bg-gray-50 rounded-lg" id="uploadSection">
      <h2 className="text-2xl font-bold text-center mb-6">
        <i className="fas fa-passport mr-2"></i> Upload Your Passport
      </h2>
      <div
        className="border-2 border-dashed border-gray-300 p-8 text-center rounded-lg cursor-pointer hover:bg-gray-100"
        onClick={() => document.getElementById("passportFile").click()}
      >
        <i className="fas fa-cloud-upload-alt text-4xl mb-2"></i>
        <h3 className="text-lg font-semibold">Click to Upload Passport Photo</h3>
        <p className="text-gray-500">Support: JPG, PNG, PDF (Max: 5MB)</p>
        <input
          type="file"
          id="passportFile"
          className="hidden"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button className="btn btn-danger bg-red-500 text-white py-2 px-4 rounded" onClick={onBack}>
          <i className="fas fa-times mr-2"></i> Discard and Return to Home
        </button>
        <button className="btn bg-blue-900 text-white py-2 px-4 rounded" onClick={onProcess}>
          <i className="fas fa-magic mr-2"></i> Process with OCR
        </button>
      </div>
    </section>
  );
}
