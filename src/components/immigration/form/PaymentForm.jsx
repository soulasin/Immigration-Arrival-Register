import React from "react";
import { FaCreditCard } from "react-icons/fa";

export default function PaymentForm({ onPayment }) {
  return (
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
            <span>$5.01</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total Amount:</span>
            <span>$50.00</span>
          </div>
        </div>
      </div>

      <button
        onClick={onPayment}
        className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition text-lg"
      >
        <FaCreditCard className="inline mr-2" />
        Proceed to Payment
      </button>
    </div>
  );
}