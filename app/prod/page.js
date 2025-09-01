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
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-4xl font-bold mb-8">KYC Process (Dynamic Inputs)</h1>
      <div className="w-full max-w-lg space-y-4">
        <div className="">
      <h2 className="text-xl font-bold mb-4">pending page requirements</h2>
      <pre className="bg-black w-ful text-white p-4 rounded-lg overflow-x-auto">
        <code>
{`
Get your ID
const userID = new URL(window.location.href).searchParams.get("id");


//Check the state of the verification


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
      <div className="w-full max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          placeholder="API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full border rounded p-2"
        />

        <select
          value={processType}
          onChange={(e) => setProcessType(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="OCR">OCR</option>
          <option value="Liveliness">Liveliness</option>
          <option value="all">All</option>
          <option value="">Basic IDV</option>
        </select>

        <input
          type="text"
          placeholder="Failure URL"
          value={failureUrl}
          onChange={(e) => setFailureUrl(e.target.value)}
          className="w-full border rounded p-2"
        />

        <input
          type="text"
          placeholder="Pending URL"
          value={pendingUrl}
          onChange={(e) => setPendingUrl(e.target.value)}
          className="w-full border rounded p-2"
        />

        <button
          onClick={startKYC}
          className="w-full bg-black text-white p-3 mb-3 text-2xl font-semibold"
        >
          Start KYC Process →
        </button>
      </div>
    </main>
  );
}
