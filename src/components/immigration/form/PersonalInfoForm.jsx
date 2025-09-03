import React from "react";

export default function PersonalInfoForm({ formData, onChange }) {
  return (
    <div>
      {/* Passport Info */}
      <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
        Personal Information In Passport
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Family / First / Middle */}
        <div>
          <label className="block text-blue-900 font-semibold mb-2">
            Family Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="familyName"
            value={formData.familyName}
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
          />
        </div>

        {/* Passport No */}
        <div>
          <label className="block text-blue-900 font-semibold mb-2">
            Passport No. <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="passportNo"
            value={formData.passportNo}
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
            required
          />
        </div>

        {/* Nationality */}
        <div className="md:col-span-2">
          <label className="block text-blue-900 font-semibold mb-2">
            Nationality/Citizenship <span className="text-red-500">*</span>
          </label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
            required
          >
            <option value="">Select Nationality</option>
            <option value="TH">Thailand</option>
            <option value="VN">Vietnam</option>
            <option value="CN">China</option>
            <option value="US">United States</option>
            <option value="JP">Japan</option>
            <option value="KR">South Korea</option>
          </select>
        </div>
      </div>

      {/* Personal Info */}
      <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
        Personal Information
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* DOB */}
        <div>
          <label className="block text-blue-900 font-semibold mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
            required
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="block text-blue-900 font-semibold mb-2">
            Occupation <span className="text-red-500">*</span>
          </label>
          <select
            name="occupation"
            value={formData.occupation}
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
            required
          >
            <option value="">Select Occupation</option>
            <option value="businessman">Business</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="engineer">Engineer</option>
          </select>
        </div>

        {/* Gender (radio) */}
        <div className="md:col-span-2">
          <label className="block text-blue-900 font-semibold mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            {["MALE", "FEMALE", "UNDEFINED"].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={onChange}
                  className="w-5 h-5 text-blue-900"
                  required
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Visa No */}
        <div>
          <label className="block text-blue-900 font-semibold mb-2">Visa No.</label>
          <input
            type="text"
            name="visaNo"
            value={formData.visaNo}
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
          />
        </div>

        {/* Residence */}
        <div>
          <label className="block text-blue-900 font-semibold mb-2">
            Country/Territory of Residence <span className="text-red-500">*</span>
          </label>
          <select
            name="countryResidence"
            value={formData.countryResidence}
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
            required
          >
            <option value="">Select Country</option>
            <option value="TH">Thailand</option>
            <option value="CN">China</option>
            <option value="US">United States</option>
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
            onChange={onChange}
            className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
            required
          />
        </div>

        {/* Phone with type */}
        <div className="md:col-span-2">
          <label className="block text-blue-900 font-semibold mb-2">
            Contact Info <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            <select
              name="contactType"
              value={formData.contactType}
              onChange={onChange}
              className="border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
              required
            >
              <option value="">Select Type</option>
              <option value="phone">Phone</option>
              <option value="gmail">Gmail</option>
              <option value="wechat">WeChat</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="kakao">Kakao</option>
            </select>
            <input
              type="text"
              name="contactValue"
              value={formData.contactValue}
              onChange={onChange}
              className="col-span-2 border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
              placeholder="Enter number or ID"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
