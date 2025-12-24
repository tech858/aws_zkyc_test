"use client"
import { useState } from "react";
import KYCButton from "./components/KYCbutton";
export default function Home() {
  // State for inputs
  const [apiKey, setApiKey] = useState("");
  const [failureUrl, setFailureUrl] = useState("");
  const [pendingUrl, setPendingUrl] = useState("");
  const [platformApiUrl, setPlatformApiUrl] = useState(process.env.NEXT_PUBLIC_PLATFORM_API_URL || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  // START: Link generation logic (easy to remove later)
  const generateLink = async () => {
    // Reset error and link
    setError("");
    setGeneratedLink("");
    setLoading(true);

    try {
      // Validate required fields
      if (!apiKey || !failureUrl || !pendingUrl) {
        setError("Please fill in all required fields (API Key, Failure URL, and Pending URL)");
        setLoading(false);
        return;
      }

      // Default to production platform API URL if not provided
      const platformUrl = platformApiUrl || "http://localhost:3000";
      const tokenEndpoint = `${platformUrl}/api/sdk-token`;

      // Generate token from API key
      const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apikey: apiKey }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(`Token generation failed: ${errorData.error || response.statusText}`);
      }

      const { token } = await response.json();

      if (!token) {
        throw new Error("Token generation failed: No token received");
      }

      // Build SDK URL with token
      const sdkUrl = new URL("http://sdk.app.zkyc/");
      sdkUrl.searchParams.set("apikey", token);
      sdkUrl.searchParams.set("failurePage", failureUrl);
      sdkUrl.searchParams.set("pending", pendingUrl);

      // Store the generated link instead of redirecting
      setGeneratedLink(sdkUrl.toString());
    } catch (err) {
      setError(err.message || "An error occurred while generating the link");
    } finally {
      setLoading(false);
    }
  };
  // END: Link generation logic (easy to remove later)
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light text-black mb-2">
            KYC Verification Setup
          </h1>
          <p className="text-gray-400">Configure your identity verification process</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-lg shadow-xl border border-gray-700 p-8 mb-8">
          <div className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                API Key <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="test_xxx or prod_xxx"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              />
              <p className="text-xs text-gray-500 mt-1">Your zKYC API key with test_ or prod_ prefix</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Failure Redirect URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com/failure"
                  value={failureUrl}
                  onChange={(e) => setFailureUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Pending Redirect URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  placeholder="https://yoursite.com/pending"
                  value={pendingUrl}
                  onChange={(e) => setPendingUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
                />
              </div>
            </div>
            <KYCButton />
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Platform API URL (Optional)
              </label>
              <input
                type="url"
                placeholder="https://api.zkyc.tech (default)"
                value={platformApiUrl}
                onChange={(e) => setPlatformApiUrl(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-600 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              />
              <p className="text-xs text-gray-500 mt-1">Optional: Custom platform API URL (defaults to https://api.zkyc.tech)</p>
            </div>

            {/* START: Link generation section (easy to remove later) */}
            <div className="pt-4">
              <button
                onClick={generateLink}
                disabled={loading}
                className="w-full bg-black hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                {loading ? "Generating Link..." : "Generate KYC Link"}
              </button>
            </div>

            {generatedLink && (
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-black mb-2">
                  Generated KYC Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={generatedLink}
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-black text-sm font-mono focus:outline-none"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedLink)}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-md transition-colors"
                  >
                    Copy
                  </button>
                </div>
                <a
                  href={generatedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800"
                >
                  Open Link →
                </a>
              </div>
            )}
            {/* END: Link generation section (easy to remove later) */}
          </div>
        </div>

        {/* Integration Guide Card */}
        {/*
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-8">
          <h2 className="text-lg font-medium text-black mb-4">
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