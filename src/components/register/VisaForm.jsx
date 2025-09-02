import React, { useState } from "react";
import {
  FaPlane,
  FaCamera,
  FaEdit,
  FaUpload,
  FaPassport,
  FaCloudUploadAlt,
  FaTimes,
  FaMagic,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie,
  FaHotel,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaGlobe,
  FaIdCard,
  FaCreditCard,
  FaReceipt,
} from "react-icons/fa";

export default function ImmigrationArrivalForm() {
  const [section, setSection] = useState("home"); // home | upload | form | payment | success
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

  const nextPage = () => page < 3 && setPage(page + 1);
  const prevPage = () => page > 1 && setPage(page - 1);

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

  const processPassportOCR = () => {
    // Simulate OCR processing
    alert("กำลังประมวลผลด้วย OCR...");
    
    // Simulate pre-filled data from OCR
    setTimeout(() => {
      setFormData({
        ...formData,
        familyName: "SMITH",
        firstName: "JOHN",
        middleName: "DAVID",
        passportNo: "AB1234567",
        nationality: "US",
        dateOfBirth: "1990-05-15",
      });
      setSection("form");
      alert("ข้อมูลจากหนังสือเดินทางถูกดึงเรียบร้อยแล้ว!");
    }, 1500);
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
      <div className="bg-white/95 rounded-2xl max-w-5xl mx-auto px-6 py-12 shadow-xl">
        
        {/* -------- Home Section -------- */}
        {section === "home" && (
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
                  onClick={() => setSection("upload")}
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
                  onClick={() => setSection("form")}
                  className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
                >
                  <FaEdit className="inline mr-2" />
                  Fill Arrival Card
                </button>
              </div>
            </section>
          </>
        )}

        {/* -------- Upload Section -------- */}
        {section === "upload" && (
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
                onClick={() => setSection("home")}
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
        )}

        {/* -------- Form Section -------- */}
        {section === "form" && (
          <section className="bg-white max-w-4xl mx-auto p-10 rounded-2xl shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                <FaPlane className="inline mr-2" /> Immigration Arrival Register
              </h2>
              <button
                onClick={() => setSection("home")}
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

            {/* Page 1: Personal Information */}
            {page === 1 && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
                  Personal Information In Passport
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Family Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="familyName"
                      value={formData.familyName}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">Middle Name</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Passport No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="passportNo"
                      value={formData.passportNo}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-blue-900 font-semibold mb-2">
                      Nationality/Citizenship <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Nationality</option>
                      <option value="TH">Thailand</option>
                      <option value="VN">Vietnam</option>
                      <option value="CN">China</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="JP">Japan</option>
                      <option value="KR">South Korea</option>
                      <option value="AU">Australia</option>
                      <option value="MY">Malaysia</option>
                      <option value="SG">Singapore</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Occupation <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Occupation</option>
                      <option value="businessman">Businessman/Businesswoman</option>
                      <option value="employee">Employee</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="engineer">Engineer</option>
                      <option value="doctor">Doctor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="FEMALE">FEMALE</option>
                      <option value="MALE">MALE</option>
                      <option value="UNDEFINED">UNDEFINED</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">Visa No.</label>
                    <input
                      type="text"
                      name="visaNo"
                      value={formData.visaNo}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Country/Territory of Residence <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="countryResidence"
                      value={formData.countryResidence}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="TH">Thailand</option>
                      <option value="VN">Vietnam</option>
                      <option value="CN">China</option>
                      <option value="US">United States</option>
                      <option value="GB">United Kingdom</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="JP">Japan</option>
                      <option value="KR">South Korea</option>
                      <option value="AU">Australia</option>
                      <option value="MY">Malaysia</option>
                      <option value="SG">Singapore</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      City/State of Residence <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="cityResidence"
                      value={formData.cityResidence}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      placeholder="Enter your city or state"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-blue-900 font-semibold mb-2">
                      Phone No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      placeholder="+1234567890"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Page 2: Trip & Accommodation */}
            {page === 2 && (
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
                  Arrival Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Date of Arrival <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Country/Territory where you Boarded <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="boardedCountry"
                      value={formData.boardedCountry}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="TH">Thailand</option>
                      <option value="VN">Vietnam</option>
                      <option value="CN">China</option>
                      <option value="US">United States</option>
                      <option value="SG">Singapore</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Purpose of Travel <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="purposeTravel"
                      value={formData.purposeTravel}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Purpose</option>
                      <option value="tourism">Tourism</option>
                      <option value="business">Business</option>
                      <option value="meeting">Meeting/Conference</option>
                      <option value="family">Visit Family/Friends</option>
                      <option value="medical">Medical Treatment</option>
                      <option value="education">Education</option>
                      <option value="transit">Transit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Mode of Travel <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="modeTravel"
                      value={formData.modeTravel}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Mode</option>
                      <option value="air">Air</option>
                      <option value="land">Land</option>
                      <option value="sea">Sea</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Mode of Transport <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="modeTransport"
                      value={formData.modeTransport}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Transport</option>
                      <option value="airplane">Airplane</option>
                      <option value="bus">Bus</option>
                      <option value="car">Private Car</option>
                      <option value="train">Train</option>
                      <option value="boat">Boat</option>
                      <option value="motorcycle">Motorcycle</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Flight No./Vehicle No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="flightVehicleNo"
                      value={formData.flightVehicleNo}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      placeholder="e.g. TG123 or ABC-1234"
                      required
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
                  Accommodation Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Type of Accommodation <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="accommodationType"
                      value={formData.accommodationType}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="hotel">Hotel</option>
                      <option value="guesthouse">Guesthouse</option>
                      <option value="hostel">Hostel</option>
                      <option value="resort">Resort</option>
                      <option value="homestay">Homestay</option>
                      <option value="friend_family">Friend/Family House</option>
                      <option value="rental">Rental Apartment/House</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                      Province <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      required
                    >
                      <option value="">Select Province</option>
                      <option value="vientiane">Vientiane Capital</option>
                      <option value="luangprabang">Luang Prabang</option>
                      <option value="champasak">Champasak</option>
                      <option value="savannakhet">Savannakhet</option>
                      <option value="khammouane">Khammouane</option>
                      <option value="bolikhamxai">Bolikhamxai</option>
                      <option value="xiengkhouang">Xieng Khouang</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">District, Area</label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      placeholder="Enter district or area"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">Post Code</label>
                    <input
                      type="text"
                      name="postCode"
                      value={formData.postCode}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      placeholder="Enter post code"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-blue-900 font-semibold mb-2">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                      rows="3"
                      placeholder="Enter full accommodation address"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

           {/* Page 3: Payment */}
            {page === 3 && (
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-900 mb-8">Payment</h3>
                
                <div className="mb-8">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0ijC0BqkNvS1WfNm4FDBhNp1pf6WbwnI4Q&s" 
                    alt="Payment Methods" 
                    className="max-w-full h-auto mx-auto mb-6 rounded-lg"
                  />
                  <h4 className="text-2xl font-bold text-blue-900 mb-4">Total Price: $50 USD</h4>
                  <p className="text-gray-600 mb-6">ລາຄາລວມ: $50 ໂດລາ</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Payment Summary</h4>
                  <div className="text-left space-y-2">
                    <div className="flex justify-between">
                      <span>Immigration Arrival Processing Fee:</span>
                      <span>$45.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Fee:</span>
                      <span>$5.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold">
                      <span>Total Amount:</span>
                      <span>$50.00</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition text-lg"
                >
                  <FaCreditCard className="inline mr-2" />
                  Proceed to Payment
                </button>
              </div>
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
        )}

        {/* -------- Success Section -------- */}
        {section === "success" && (
          <section className="bg-white max-w-3xl mx-auto p-10 rounded-2xl shadow-xl text-center">
            <div className="text-green-500 text-6xl mb-6">
              <FaCheck />
            </div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Payment Successful!
            </h2>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              ການຊຳລະເງິນສຳເລັດແລ້ວ!
            </h3>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold text-blue-900 mb-4">
                Your Reference ID / ລະຫັດອ້າງອີງຂອງທ່ານ:
              </h4>
              <div className="text-2xl font-bold text-blue-900 bg-white p-4 rounded border-2 border-dashed border-blue-300">
                {referenceId}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Please save this reference ID for tracking your application
              </p>
              <p className="text-sm text-gray-600">
                ກະລຸນາເກັບຮັກສາລະຫັດນີ້ໄວ້ເພື່ອຕິດຕາມໃບສະຫມັກຂອງທ່ານ
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
              <h4 className="font-semibold text-gray-800 mb-4">Next Steps:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Your application has been submitted successfully</li>
                <li>• Processing time: 1-3 business days</li>
                <li>• You will receive email confirmation shortly</li>
                <li>• Use your reference ID to track application status</li>
              </ul>
              <h4 className="font-semibold text-gray-800 mb-2 mt-4">ຂັ້ນຕອນຕໍ່ໄປ:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• ໃບສະຫມັກຂອງທ່ານຖືກສົ່ງສຳເລັດແລ້ວ</li>
                <li>• ເວລາດຳເນີນການ: 1-3 ວັນທຳການ</li>
                <li>• ທ່ານຈະໄດ້ຮັບອີເມວຢືນຢັນໃນໄວໆນີ້</li>
                <li>• ໃຊ້ລະຫັດອ້າງອີງເພື່ອຕິດຕາມສະຖານະ</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setSection("home");
                  setPage(1);
                  setFormData({
                    familyName: "", firstName: "", middleName: "", passportNo: "", nationality: "",
                    dateOfBirth: "", occupation: "", gender: "", visaNo: "", countryResidence: "",
                    cityResidence: "", phoneNo: "", arrivalDate: "", boardedCountry: "", purposeTravel: "",
                    modeTravel: "", modeTransport: "", flightVehicleNo: "", departureDate: "",
                    departureModeTravel: "", departureModeTransport: "", departureFlightVehicleNo: "",
                    accommodationType: "", province: "", district: "", subDistrict: "", postCode: "", address: ""
                  });
                }}
                className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                <FaPlane className="inline mr-2" />
                Submit Another Application
              </button>
              
              <button
                onClick={() => window.open(`/track?ref=${referenceId}`, '_blank')}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
              >
                <FaReceipt className="inline mr-2" />
                Track Application
              </button>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Print or screenshot this page for your records. 
                You can also track your application status anytime using your reference ID.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>ສຳຄັນ:</strong> ພິມ ຫຼື ຖ່າຍຮູບໜ້ານີ້ໄວ້ເປັນຫຼັກຖານ. 
                ທ່ານສາມາດຕິດຕາມສະຖານະໄດ້ທຸກເວລາດ້ວຍລະຫັດອ້າງອີງ.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}