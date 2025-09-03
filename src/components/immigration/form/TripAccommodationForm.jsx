import React, { useState } from "react";

const flightsData = [
    { id: 1, airline: "Lao Airlines QV456", origin: "Thailand", time: "Morning" },
    { id: 2, airline: "Thai Airways TG123", origin: "Thailand", time: "Evening" },
    { id: 3, airline: "Vietnam Airlines VN789", origin: "Vietnam", time: "Morning" },
    { id: 4, airline: "AirAsia FD222", origin: "Thailand", time: "Morning" },
    { id: 5, airline: "China Southern CZ555", origin: "China", time: "Night" },
];

export default function TripAccommodationForm({ formData, onChange }) {
    const [time, setTime] = useState("");
    const [origin, setOrigin] = useState("");
    const [flight, setFlight] = useState("");

    const filteredFlights = flightsData.filter(
        (f) =>
            (time ? f.time === time : true) &&
            (origin ? f.origin === origin : true)
    );

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
                Arrival Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                        Date of Arrival <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={onChange}
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
                        value={origin}
                        onChange={(e) => {
                            setOrigin(e.target.value);
                            onChange({ target: { name: "boardedCountry", value: e.target.value } });
                        }}
                        className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                        required
                    >
                        <option value="">Select Country</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="China">China</option>
                        <option value="US">United States</option>
                        <option value="Singapore">Singapore</option>
                    </select>
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                        Purpose of Travel <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="purposeTravel"
                        value={formData.purposeTravel}
                        onChange={onChange}
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
                        onChange={onChange}
                        className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                        required
                    >
                        <option value="">Select Mode</option>
                        <option value="air">Air</option>
                        <option value="land">Land</option>
                    </select>
                </div>

                <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                        Mode of Transport <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="modeTransport"
                        value={formData.modeTransport}
                        onChange={onChange}
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

                {/* ช่วงเวลา */}
                <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                        Travel time <span className="text-red-500">*</span>
                    </label>
                    <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                    >
                        <option value="">-- Select Time--</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        <option value="Night">Night</option>
                    </select>
                </div>

                {/* Flight Dropdown */}
                <div>
                    <label className="block text-blue-900 font-semibold mb-2">
                        Flight No./Vehicle No. <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="flightVehicleNo"
                        value={formData.flightVehicleNo || ""}
                        onChange={(e) => onChange(e)} // ส่ง event ปกติ
                        className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                        disabled={filteredFlights.length === 0} // ถ้าไม่มีเที่ยวบินที่ตรงเงื่อนไข จะ disable
                        required
                    >
                        <option value="">-- Select flight   --</option>
                        {filteredFlights.map((f) => (
                            <option key={f.id} value={f.airline}>
                                {f.airline}
                            </option>
                        ))}
                    </select>

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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
                        className="w-full border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
                        rows="3"
                        placeholder="Enter full accommodation address"
                        required
                    />
                </div>
            </div>
        </div>
    );
}
