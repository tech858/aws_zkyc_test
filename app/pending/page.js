"use client";

import React, { useEffect, useState } from "react";

export default function VerificationPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your real API key and client id
  const clientid = "6e1ec942-5990-4674-af0d-628b556e1331";
  const key = "prod_a0250caaadea9e59608db5e61714f5fd2b9d5246c3e0e212";

  useEffect(() => {
    async function fetchVerification() {
      try {
        const userID = new URL(window.location.href).searchParams.get("id");
        console.log("UserID:", userID);

        if (!userID) {
          setError("Missing user ID in URL");
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://z-kyc-sdk-mocha.vercel.app/api/kyc/verifications/${userID}`,
          {
            method: "GET",
            headers: {
              "x-user-id": clientid,
              "x-api-key": key,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        console.log("Verification data:", result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVerification();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-600 border-t-white rounded-full animate-spin mb-4"></div>
          <p className="text-black text-lg">Loading verification status...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="bg-red-900 border border-red-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-black mb-2">Verification Error</h2>
            <p className="text-red-200">{error}</p>
          </div>
        </div>
      </main>
    );
  }

  // Decide color for text
  const getStatusColor = (status, verified) => {
    if (status === "pending") return "text-orange-400";
    if (status === "completed" && verified) return "text-green-400";
    if (status === "completed" && !verified) return "text-red-400";
    return "text-gray-400"; // fallback
  };

  // Decide background/border
  const getStatusBgColor = (status, verified) => {
    if (status === "pending") return "bg-orange-900 border-orange-700";
    if (status === "completed" && verified) return "bg-green-900 border-green-700";
    if (status === "completed" && !verified) return "bg-red-900 border-red-700";
    return "bg-gray-800 border-gray-700"; // fallback
  };

console.log(data)
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-black mb-3">
            Verification Status
          </h1>
          <p className="text-gray-400 text-lg">
            Review your KYC verification results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Status Overview Card */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
            <h2 className="text-2xl font-medium text-black mb-6">Overview</h2>
            
            <div className="space-y-6">
              <div
  className={`p-4 rounded-lg border ${getStatusBgColor(
    data?.data?.status,
    data?.data?.verified
  )}`}
>
  <div className="flex items-center space-x-3">
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusBgColor(
        data?.data?.status,
        data?.data?.verified
      ).split(" ")[0]}`}
    >
      {data?.data?.status === "completed" && data?.data?.verified ? (
        <svg
          className="w-4 h-4 text-green-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 
            12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : data?.data?.status === "pending" ? (
        <svg
          className="w-4 h-4 text-orange-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <circle cx="10" cy="10" r="5" />
        </svg>
      ) : (
        <svg
          className="w-4 h-4 text-red-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 
            1 0 111.414 1.414L11.414 10l4.293 
            4.293a1 1 0 01-1.414 1.414L10 
            11.414l-4.293 4.293a1 1 0 
            01-1.414-1.414L8.586 10 4.293 
            5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
    <div>
      <p className="text-lg font-medium text-black">
        Status:{" "}
        <span
          className={getStatusColor(
            data?.data?.status,
            data?.data?.verified
          )}
        >
          {data?.data?.status}
        </span>
      </p>
      <p
        className={`text-sm ${getStatusColor(
          data?.data?.status,
          data?.data?.verified
        )}`}
      >
        {data?.data?.verifications?.document?.comment}
      </p>
    </div>
  </div>
</div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-md border border-gray-600">
                  <p className="text-sm text-gray-400 mb-1">Applicant ID</p>
                  <p className="text-black font-mono text-sm">{data?.data?.applicant_id}</p>
                </div>

                <div className="bg-white p-4 rounded-md border border-gray-600">
                  <p className="text-sm text-gray-400 mb-1">Verification ID</p>
                  <p className="text-black font-mono text-sm">{data?.data?.verification_id}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Checks Card */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-8">
            <h2 className="text-2xl font-medium text-black mb-6">Verification Checks</h2>
            
            <div className="space-y-4">
              {data?.data?.verifications ? (
                Object.entries(data.data.verifications).map(([key, value]) => (
                  <div
                    key={key}
                    className={`p-4 rounded-lg border ${getStatusBgColor(value.verified)}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${value.verified ? 'bg-green-800' : 'bg-red-800'}`}>
                          {value.verified ? (
                            <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className="text-black font-medium capitalize">
                          {key.replace(/_/g, ' ')}
                        </span>
                      </div>
                      <span className={`text-sm font-medium ${getStatusColor(value.verified)}`}>
                        {value.verified ? "Passed" : "Failed"}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400">No verification checks available</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-black rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Refresh Status
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
