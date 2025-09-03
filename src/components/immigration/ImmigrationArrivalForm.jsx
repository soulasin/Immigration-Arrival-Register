import React, { useState } from "react";
import HomePage from "./HomePage";
import UploadPage from "./UploadPage";
import FormPage from "./FormPage";
import SuccessPage from "./SuccessPage";

export default function ImmigrationArrivalForm() {
  const [section, setSection] = useState("home"); // home | upload | form | success
  const [page, setPage] = useState(1);
  const [referenceId, setReferenceId] = useState("");
  const [formData, setFormData] = useState({
    // Personal Information In Passport
    familyName: "",
    firstName: "",
    middleName: "",
    passportNo: "",
    nationality: "",
    
    // Personal Information
    dateOfBirth: "",
    occupation: "",
    gender: "",
    visaNo: "",
    countryResidence: "",
    cityResidence: "",
    phoneNo: "",

    // Arrival Information
    arrivalDate: "",
    boardedCountry: "",
    purposeTravel: "",
    modeTravel: "",
    modeTransport: "",
    flightVehicleNo: "",

    // Departure Information
    departureDate: "",
    departureModeTravel: "",
    departureModeTransport: "",
    departureFlightVehicleNo: "",

    // Accommodation Information
    accommodationType: "",
    province: "",
    district: "",
    subDistrict: "",
    postCode: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNavigate = (newSection) => {
    setSection(newSection);
    if (newSection === "form") {
      setPage(1);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleProcessOCR = (ocrData) => {
    setFormData({ ...formData, ...ocrData });
  };

  const generateReferenceId = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `LAO-${timestamp}${random}`;
  };

  const handlePayment = async () => {
    try {
      // Generate reference ID
      const refId = generateReferenceId();
      setReferenceId(refId);
      
      // Simulate payment processing
      setSection("success");
      
      // In real implementation, you would call payment API here
      // const res = await fetch("/api/create-payment", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ amount: 50, formData, referenceId: refId }),
      // });
      
    } catch (err) {
      console.error(err);
      alert("Payment failed ❌");
    }
  };

  const handleReset = () => {
    setPage(1);
    setFormData({
      familyName: "", firstName: "", middleName: "", passportNo: "", nationality: "",
      dateOfBirth: "", occupation: "", gender: "", visaNo: "", countryResidence: "",
      cityResidence: "", phoneNo: "", arrivalDate: "", boardedCountry: "", purposeTravel: "",
      modeTravel: "", modeTransport: "", flightVehicleNo: "", departureDate: "",
      departureModeTravel: "", departureModeTransport: "", departureFlightVehicleNo: "",
      accommodationType: "", province: "", district: "", subDistrict: "", postCode: "", address: ""
    });
  };

  const backgroundStyle = {
    backgroundImage:
      "url('https://www.asiakingtravel.com/cuploads/files/Laos/Vang%20Vieng/0927-0357_vangvieng.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div style={backgroundStyle} className="py-16">
      <div className="bg-white/95 rounded-2xl max-w-5xl mx-auto px-12 py-12 shadow-xl">
        
        {section === "home" && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {section === "upload" && (
          <UploadPage 
            onNavigate={handleNavigate} 
            onProcessOCR={handleProcessOCR} 
          />
        )}

        {section === "form" && (
          <FormPage 
            page={page}
            formData={formData}
            onNavigate={handleNavigate}
            onPageChange={handlePageChange}
            onFormDataChange={handleChange}
            onPayment={handlePayment}
          />
        )}

        {section === "success" && (
          <SuccessPage 
            referenceId={referenceId}
            onNavigate={handleNavigate}
            onReset={handleReset}
          />
        )}
        
      </div>
    </div>
  );
}