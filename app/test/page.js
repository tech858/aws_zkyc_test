"use client"
import { useState } from "react";
import { ZKYCProcess } from "zkyc-lfg";

export default function Home() {
  const [selections, setSelections] = useState({
    kycType: "",
  });
  const [userID, setuserID] = useState(""); // initial value
  const [Key, setkey] = useState(""); // initial value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelections((prev) => ({ ...prev, [name]: value }));
  };

  const startKYC = () => {
    ZKYCProcess(
      userID, // customer id
      Key, // test key
      selections.kycType || null, // selected KYC type
      "https://zkycsite.vercel.app/failure", // redirect url
      "https://z-kyc-sdk.vercel.app/pending" // pending url
    );
  };

  return (
    <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl flex flex-col items-center space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-3">
            KYC Process Playground
          </h1>
          <p className="text-gray-400 text-lg">
            Test and configure your verification workflow
          </p>
        </div>

        {/* Configuration Card */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 w-full max-w-2xl">
          <h2 className="text-xl font-medium text-white mb-6">Configuration</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  User ID
                </label>
                <input
                  type="text"
                  value={userID}
                  onChange={(e) => setuserID(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                  placeholder="Enter user identifier"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  API Key
                </label>
                <input
                  type="password"
                  value={Key}
                  onChange={(e) => setkey(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                  placeholder="Enter your API key"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Verification Type
              </label>
              <select
                name="kycType"
                value={selections.kycType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              >
                <option value="">Basic IDV</option>
                <option value="OCR">Document verification + OCR</option>
                <option value="Liveliness">Document verification + Liveliness</option>
                <option value="all">Complete verification suite</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="w-full max-w-2xl">
          <div
            onClick={startKYC}
            className="group bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-lg p-8 transition-all duration-200 cursor-pointer"
          >
            <div className="text-center">
              <h2 className="text-2xl font-medium text-white mb-3 flex items-center justify-center">
                Start KYC Process
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 text-gray-400">
                  →
                </span>
              </h2>
              <p className="text-gray-400 text-base">
                Initialize the verification process with your configured settings
              </p>
            </div>
          </div>
        </div>

        {/* Configuration Info */}
        <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 w-full max-w-2xl">
          <h3 className="text-lg font-medium text-white mb-4">Current Configuration</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Failure URL:</span>
              <span className="text-gray-300">zkycsite.vercel.app/failure</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Pending URL:</span>
              <span className="text-gray-300">z-kyc-sdk.vercel.app/pending</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Verification Type:</span>
              <span className="text-gray-300">
                {selections.kycType || "Basic IDV"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}