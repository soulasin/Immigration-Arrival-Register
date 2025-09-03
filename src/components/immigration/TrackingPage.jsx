import React, { useState, useEffect } from "react";
import { FaSearch, FaSpinner, FaCheckCircle, FaClock, FaExclamationTriangle } from "react-icons/fa";

export default function TrackingPage() {
  const [referenceId, setReferenceId] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get reference ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const refId = urlParams.get('ref');
    if (refId) {
      setReferenceId(refId);
      handleTrack(refId);
    }
  }, []);

  const handleTrack = async (refId = referenceId) => {
    if (!refId) {
      alert("Please enter a reference ID");
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      setTimeout(() => {
        // Mock tracking data
        setTrackingData({
          referenceId: refId,
          status: "processing",
          submittedDate: "2025-01-15",
          estimatedCompletion: "2025-01-17",
          steps: [
            { name: "Application Submitted", completed: true, date: "2025-01-15 14:30" },
            { name: "Payment Confirmed", completed: true, date: "2025-01-15 14:32" },
            { name: "Document Review", completed: false, date: null },
            { name: "Approval", completed: false, date: null },
            { name: "Ready for Pickup", completed: false, date: null }
          ]
        });
        setLoading(false);
      }, 2000);
      
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Error tracking application");
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FaCheckCircle className="text-green-500" />;
      case "processing":
        return <FaClock className="text-yellow-500" />;
      case "rejected":
        return <FaExclamationTriangle className="text-red-500" />;
      default:
        return <FaClock className="text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Track Your Application
          </h1>
          <p className="text-center text-gray-600 mb-8">
            ຕິດຕາມສະຖານະໃບສະຫມັກຂອງທ່ານ
          </p>

          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
              placeholder="Enter Reference ID (e.g., LAO-123456789)"
              className="flex-1 border-2 rounded-lg px-4 py-3 focus:border-blue-900 outline-none"
            />
            <button
              onClick={() => handleTrack()}
              disabled={loading}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? <FaSpinner className="animate-spin" /> : <FaSearch />}
              {loading ? " Tracking..." : " Track"}
            </button>
          </div>

          {trackingData && (
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">
                    Reference ID: {trackingData.referenceId}
                  </h3>
                  <p className="text-gray-600">
                    Status: <span className="font-semibold capitalize">{trackingData.status}</span>
                  </p>
                </div>
                <div className="text-4xl">
                  {getStatusIcon(trackingData.status)}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Submitted Date</p>
                  <p className="font-semibold">{trackingData.submittedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimated Completion</p>
                  <p className="font-semibold">{trackingData.estimatedCompletion}</p>
                </div>
              </div>

              <h4 className="text-lg font-bold text-blue-900 mb-4">Application Progress</h4>
              <div className="space-y-4">
                {trackingData.steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${
                      step.completed ? "bg-green-500" : "bg-gray-300"
                    }`} />
                    <div className="flex-1">
                      <p className={`font-semibold ${
                        step.completed ? "text-green-700" : "text-gray-600"
                      }`}>
                        {step.name}
                      </p>
                      {step.date && (
                        <p className="text-sm text-gray-500">{step.date}</p>
                      )}
                    </div>
                    {step.completed && (
                      <FaCheckCircle className="text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}