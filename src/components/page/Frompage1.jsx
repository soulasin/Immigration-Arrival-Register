// import React, { useState } from "react";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     passportNumber: "",
//     visaType: "",
//     arrivalDate: "",
//   });

//   const handleNext = () => setStep(prev => prev + 1);
//   const handlePrev = () => setStep(prev => prev - 1);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted: " + JSON.stringify(formData, null, 2));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-6">Visa Application Form</h2>

//       {/* Step Indicator */}
//       <div className="flex justify-between mb-6">
//         {[1, 2, 3].map((s) => (
//           <div
//             key={s}
//             className={`w-1/3 h-2 rounded-full ${step >= s ? "bg-blue-900" : "bg-gray-300"}`}
//           ></div>
//         ))}
//       </div>

//       <form onSubmit={handleSubmit}>

//         {/* Step 1 */}
//         {step === 1 && (
//           <div className="space-y-4">
//             <label className="block">
//               <span className="text-gray-700">First Name</span>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-2 border rounded-lg"
//                 required
//               />
//             </label>
//             <label className="block">
//               <span className="text-gray-700">Last Name</span>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-2 border rounded-lg"
//                 required
//               />
//             </label>
//           </div>
//         )}

//         {/* Step 2 */}
//         {step === 2 && (
//           <div className="space-y-4">
//             <label className="block">
//               <span className="text-gray-700">Passport Number</span>
//               <input
//                 type="text"
//                 name="passportNumber"
//                 value={formData.passportNumber}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-2 border rounded-lg"
//                 required
//               />
//             </label>
//             <label className="block">
//               <span className="text-gray-700">Visa Type</span>
//               <select
//                 name="visaType"
//                 value={formData.visaType}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-2 border rounded-lg"
//                 required
//               >
//                 <option value="">Select Type</option>
//                 <option value="Tourist">Tourist</option>
//                 <option value="Business">Business</option>
//               </select>
//             </label>
//           </div>
//         )}

//         {/* Step 3 */}
//         {step === 3 && (
//           <div className="space-y-4">
//             <label className="block">
//               <span className="text-gray-700">Arrival Date</span>
//               <input
//                 type="date"
//                 name="arrivalDate"
//                 value={formData.arrivalDate}
//                 onChange={handleChange}
//                 className="mt-1 block w-full p-2 border rounded-lg"
//                 required
//               />
//             </label>
//             <p className="text-gray-600">ตรวจสอบข้อมูลก่อนส่ง</p>
//             <pre className="bg-gray-100 p-2 rounded-lg">{JSON.stringify(formData, null, 2)}</pre>
//           </div>
//         )}

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-6">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={handlePrev}
//               className="px-6 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
//             >
//               Previous
//             </button>
//           )}
//           {step < 3 && (
//             <button
//               type="button"
//               onClick={handleNext}
//               className="ml-auto px-6 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800"
//             >
//               Next
//             </button>
//           )}
//           {step === 3 && (
//             <button
//               type="submit"
//               className="ml-auto px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MultiStepForm;
