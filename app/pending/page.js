import React, { useEffect, useState } from "react";

export default function VerificationPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your real API key
  const key = "YOUR_API_KEY";

  useEffect(() => {
    const fetchVerification = async () => {
      try {
        const userID = new URL(window.location.href).searchParams.get("id");
        if (!userID) {
          setError("Missing user ID in URL");
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://z-kyc-sdk.vercel.app/api/kyc/verifications/${userID}`,
          {
            method: "GET",
            headers: {
              "x-user-id": userID,
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
