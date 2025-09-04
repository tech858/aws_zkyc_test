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
          <h1 className="text-4xl font-light text-white mb-3">
            KYC Dynamic Configuration
          </h1>
          <p className="text-gray-400 text-lg">
            Configure and test your verification process with custom parameters
          </p>
        </div>
        
        {/* Integration Guide Card */}
        {/*
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-8 order-2 lg:order-1">
          <h2 className="text-xl font-medium text-white mb-6">
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

          <div className="mt-6 p-4 bg-gray-900 rounded-md border border-gray-600">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Implementation Notes:</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Ensure the pending URL matches your implementation</li>
              <li>• Use the same API key for both initialization and status checks</li>
              <li>• Handle loading states while checking verification status</li>
            </ul>
          </div>
        </div>
        */}

        {/* Configuration Form Card */}
        <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Client ID
              </label>
              <input
                type="text"
                placeholder="Enter your client identifier"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                API Key
              </label>
              <input
                type="password"
                placeholder="Test or production key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Verification Type
              </label>
              <select
                value={processType}
                onChange={(e) => setProcessType(e.target.value)}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors"
              >
                <option value="">Basic Document Verification</option>
                <option value="OCR">Document verification + OCR</option>
                <option value="Liveliness">Document verification + Liveliness</option>
                <option value="all">Complete verification suite</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Failure Redirect URL
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com/failure"
                  value={failureUrl}
                  onChange={(e) => setFailureUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">
                  Pending Redirect URL
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com/pending"
                  value={pendingUrl}
                  onChange={(e) => setPendingUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:border-slate-400 transition-colors"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={startKYC}
                className="w-full bg-white hover:bg-gray-100 text-slate-900 font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-800"
              >
                Initialize KYC Process
              </button>
            </div>
          </div>
        </div>

        {/* Current Configuration Summary */}
        <div className="mt-8 bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h3 className="text-lg font-medium text-white mb-4">Current Configuration Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="block text-slate-400 mb-1">Client ID:</span>
              <span className="text-slate-300">{clientId || "Not set"}</span>
            </div>
            <div>
              <span className="block text-slate-400 mb-1">API Key:</span>
              <span className="text-slate-300">{apiKey ? "••••••••" : "Not set"}</span>
            </div>
            <div>
              <span className="block text-slate-400 mb-1">Verification Type:</span>
              <span className="text-slate-300">{processType || "Basic IDV"}</span>
            </div>
            <div>
              <span className="block text-slate-400 mb-1">Failure URL:</span>
              <span className="text-slate-300 break-all">{failureUrl || "Not set"}</span>
            </div>
            <div>
              <span className="block text-slate-400 mb-1">Pending URL:</span>
              <span className="text-slate-300 break-all">{pendingUrl || "Not set"}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}