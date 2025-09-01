"use client";

import React, { useEffect, useState } from "react";

export default function VerificationPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your real API key
    const clientid = "df232ee0-b0e9-479d-9d4e-bb97e4d77472";

  const key = "prod_a01a07c7bba7b2413c1186d6305636f8eb5c8a7d7b30a194";

  useEffect(() => {
    const fetchVerification = async () => {
      try {
        const userID = new URL(window.location.href).searchParams.get("id");
                  console.log(userID)

        if (!userID) {
          setError("Missing user ID in URL");
          console.log(userID)
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

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const result = await res.json();
        console.log("Verification data:", result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVerification();
  }, []);

  if (loading) return <p>Loading verification...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Verification Result</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
