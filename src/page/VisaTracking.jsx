import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearch, FaDownload, FaPrint, FaQuestionCircle } from "react-icons/fa";

export default function VisaTracking() {
  const [referenceCode, setReferenceCode] = useState("");
  const [result, setResult] = useState(null);

 
  const mockData = {
    refId: "LAO-789654",
    status: "Processing",
    passportInfo: {
      familyName: "SMITH",
      firstName: "JOHN",
      middleName: "-",
      passportNumber: "AB1234567",
      nationality: "United States"
    },
    personalInfo: {
      dob: "1990-05-15",
      occupation: "Software Engineer",
      gender: "MALE",
      visaNo: "LA-V-123456",
      countryResidence: "United States",
      cityResidence: "New York, NY",
      phoneNo: "+1-123-456-7890"
    },
    paymentInfo: {
      amount: "$150.00",
      status: "Paid",
      method: "Credit Card",
      transactionId: "TXN-789456123"
    },
    note: "Your application is currently being processed. The standard processing time is 3-5 business days. You will receive an email notification once a decision has been made."
  };

  const handleTrack = (e) => {
    e.preventDefault();
    setResult(mockData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto py-10 px-4">
        <section className="bg-white rounded-xl shadow p-10">
          <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
            ຕິດຕາມສະຖານະວີຊາ
          </h1>
          <p className="text-gray-700 text-center mb-6">
            Track Your Visa Application Status
          </p>

          {/* Form */}
          <form onSubmit={handleTrack} className="flex flex-col items-center mb-8">
            <input
              type="text"
              placeholder="Enter your reference code (e.g. LAO-123456)"
              value={referenceCode}
              onChange={(e) => setReferenceCode(e.target.value)}
              className="w-full max-w-md border-2 border-gray-300 rounded px-4 py-3 mb-4 focus:outline-none focus:border-blue-900"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-800 transition"
            >
              <FaSearch /> Track Application
            </button>
          </form>

          {/* Result */}
          {result && (
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div className="text-blue-900 font-bold text-xl">{result.refId}</div>
                <div className={`px-4 py-1 rounded-full font-bold ${
                  result.status === "Processing" ? "bg-blue-100 text-blue-900" :
                  result.status === "Approved" ? "bg-green-100 text-green-700" :
                  result.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-800"
                }`}>
                  {result.status}
                </div>
              </div>

              {/* Passport Info */}
              <div className="mb-4">
                <h2 className="text-blue-900 font-semibold mb-2 cursor-pointer">Personal Information In Passport</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(result.passportInfo).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-gray-500 font-bold text-sm">{key}</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="mb-4">
                <h2 className="text-blue-900 font-semibold mb-2 cursor-pointer">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(result.personalInfo).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-gray-500 font-bold text-sm">{key}</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Info */}
              <div className="mb-4">
                <h2 className="text-blue-900 font-semibold mb-2 cursor-pointer">Payment Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(result.paymentInfo).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-gray-500 font-bold text-sm">{key}</span>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-yellow-100 p-4 rounded mb-4">
                <span className="font-bold text-blue-900">Note: </span>
                <span className="text-gray-700">{result.note}</span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="btn bg-blue-900 text-white px-6 py-2 rounded flex items-center gap-2">
                  <FaDownload /> Download Application
                </button>
                <button className="btn bg-yellow-500 text-blue-900 px-6 py-2 rounded flex items-center gap-2">
                  <FaPrint /> Print Status
                </button>
                <button className="btn bg-blue-700 text-white px-6 py-2 rounded flex items-center gap-2">
                  <FaQuestionCircle /> Get Help
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
