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
     userID , // customer id
      Key, // test key
      selections.kycType || null, // selected KYC type
     "https://zkycsite.vercel.app/failure", // redirect url
      "https://z-kyc-sdk.vercel.app/pending" // pending url
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl  flex flex-col items-center justify-between font-mono gap-5 text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-4">KYC Process playground</h1>
       <div className="mb-10 flex flex-row gap-6">
        {/* First selection: KYC type */}
          <input
        type="text"
        value={userID} // controlled by state
        onChange={(e) => setuserID(e.target.value)}
        className="border border-white text-white" // updates state
        placeholder="User ID"
      />
         <input
        type="text"
        value={Key} // controlled by state
        onChange={(e) => setkey(e.target.value)} // updates state
        className="border border-white text-white" 
        placeholder="Key"
      />
        <select
          name="kycType"
          value={selections.kycType}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="OCR">OCR</option>
          <option value="Liveliness">Liveliness</option>
          <option value="all">All</option>
          <option value="">Basic IDV</option>
        </select>

        {/* Second selection: Redirect URL */}
 
      </div>

      </div>

    
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div
          onClick={startKYC}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors 
          hover:border-gray-300 hover:bg-gray-100 
          hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 cursor-pointer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Start KYC Process{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Click here to start the KYC process.
          </p>
        </div>
      </div>
    </main>
  );
}
