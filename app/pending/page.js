"use client";

import React, { useEffect, useState } from "react";

export default function VerificationPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your real API key and client id
  const clientid = "df232ee0-b0e9-479d-9d4e-bb97e4d77472";
  const key = "prod_a01a07c7bba7b2413c1186d6305636f8eb5c8a7d7b30a194";

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

  if (loading) return <p>Loading verification...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <h1 className="text-4xl font-bold mb-8">KYC Process (Pending Page)</h1>

      <div className="w-full max-w-lg space-y-4">
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
          <h1>Verification Result</h1>

          <div style={{ marginBottom: "10px" }}>
            <strong>Status:</strong>{" "}
            <span style={{ color: data?.data?.verified ? "green" : "red" }}>
              {data?.data?.status} (
              {data?.data?.verified ? "Verified" : "Not Verified"})
            </span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <strong>Applicant ID:</strong> {data?.data?.applicant_id}
          </div>

          <div style={{ marginBottom: "10px" }}>
            <strong>Verification ID:</strong> {data?.data?.verification_id}
          </div>

          <h2>Checks</h2>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {data?.data?.verifications &&
              Object.entries(data.data.verifications).map(([key, value]) => (
                <li
                  key={key}
                  style={{
                    marginBottom: "8px",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <strong style={{ textTransform: "capitalize" }}>{key}:</strong>{" "}
                  <span style={{ color: value.verified ? "green" : "red" }}>
                    {value.verified ? "Verified" : "Failed"}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
