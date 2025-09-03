"use client"
import { useState } from "react";
import { ZKYCProcess } from "zkyc-lfg";

export default function Home() {
  // State for inputs
  const [clientId, setClientId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [processType, setProcessType] = useState("");
  const [failureUrl, setFailureUrl] = useState("");
  const [pendingUrl, setPendingUrl] = useState("");

  const startKYC = () => {
    ZKYCProcess(clientId, apiKey, processType, failureUrl, pendingUrl);
  };

  return (
    <main className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-white mb-2">
            KYC Verification Setup
          </h1>
          <p className="text-gray-400">Configure your identity verification process</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Client ID
              </label>
              <input
                type="text"
                placeholder="Enter your client identifier"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                API Key
              </label>
              <input
                type="password"
                placeholder="Test or production key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Verification Type
              </label>
              <select
                value={processType}
                onChange={(e) => setProcessType(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              >
                <option value="">Basic IDV</option>
                <option value="OCR">Document verification + OCR</option>
                <option value="Liveliness">Document verification + Liveliness</option>
                <option value="all">Complete verification suite</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Failure Redirect URL
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com/failure"
                  value={failureUrl}
                  onChange={(e) => setFailureUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pending Redirect URL
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com/pending"
                  value={pendingUrl}
                  onChange={(e) => setPendingUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={startKYC}
                className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Initialize KYC Process
              </button>
            </div>
          </div>
        </div>

        {/* Integration Guide Card */}
        {/*
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-8">
          <h2 className="text-lg font-medium text-white mb-4">
            Pending Page Integration
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Implement this code on your pending page to check verification status:
          </p>
          
          <div className="bg-black rounded-md p-4 overflow-x-auto border border-gray-700">
            <pre className="text-sm text-gray-100">
              <code>
{`// Extract user ID from URL parameters
const userID = new URL(window.location.href).searchParams.get("id");

// Check verification status
const res = await fetch(\`https://z-kyc-sdk.vercel.app/api/kyc/verifications/\${userID}\`, {
  method: "GET",
  headers: {
    "x-user-id": userID,
    "x-api-key": key,
  },
});

const data = await res.json(); 
console.log("Verification data:", data);`}
              </code>
            </pre>
          </div>
        </div>
        */}
      </div>
    </main>
  );
}