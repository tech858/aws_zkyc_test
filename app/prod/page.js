"use client";

import { useState } from "react";

/* =========================
   MAIN FUNCTION
========================= */

async function ZKYCProcess(config) {
  const { apiKey, callbackUrl, userId, platformApiUrl } = config;

  if (!apiKey || !callbackUrl || !userId) {
    throw new Error("apiKey, callbackUrl, and userId are required");
  }

  const platformUrl =
    platformApiUrl || process.env.NEXT_PUBLIC_PLATFORM_URL;

  const tokenEndpoint = `${platformUrl}/api/kyc/generate-token`;

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apikey: apiKey }),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || !result || !result.success) {
    throw new Error(
      `Token generation failed: ${
        result?.error || response.statusText
      }`
    );
  }

  const token = result.data?.token;

  if (!token) {
    throw new Error("No token received");
  }

  const sdkUrl = new URL("https://sdk.zkyc.tech/");
  sdkUrl.searchParams.set("apiKey", token);
  sdkUrl.searchParams.set("userId", userId);
  sdkUrl.searchParams.set("callbackUrl", callbackUrl);
  sdkUrl.searchParams.set("platForm", "EVG");

  openZKYCPopup(sdkUrl.toString());
}

/* =========================
   POPUP FUNCTION
========================= */

function openZKYCPopup(url) {
  const width = 500;
  const height = 650;

  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  const popup = window.open(
    url,
    "ZKYC_Popup",
    `width=${width},height=${height},left=${left},top=${top},
     resizable=yes,scrollbars=yes,toolbar=no,menubar=no,status=no`
  );

  if (!popup) {
    throw new Error("Popup blocked. Please allow popups.");
  }

  const handleMessage = (event) => {
    // 🔒 Security check
    if (event.origin !== "https://evg.zkyc.tech") return;

    if (event.data?.type === "KYC_SUBMITTED") {
      popup.close();
      window.removeEventListener("message", handleMessage);
      console.log("KYC completed");
    }

    if (event.data?.type === "KYC_ERROR") {
      popup.close();
      window.removeEventListener("message", handleMessage);
      console.error("KYC failed");
    }
  };

  window.addEventListener("message", handleMessage);
  popup.focus();
}

/* =========================
   PAGE COMPONENT
========================= */

export default function KycPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStartKYC = async () => {
    setLoading(true);
    setError(null);

    try {
      await ZKYCProcess({
        apiKey: "prod_jFWcBtJdfbVhRTfnSElwaINHyMikDpFMYaMDledHdXLujdpdKUEnLPklullyyMPr", // replace with real key
        userId: "USER_001",
        callbackUrl: `${window.location.origin}/kyc-failed`,
      });
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 24, marginBottom: 20 }}>
        ZKYC Verification
      </h1>

      <button
        onClick={handleStartKYC}
        disabled={loading}
        style={{
          padding: "12px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Starting..." : "Start KYC"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: 20 }}>
          {error}
        </p>
      )}
    </div>
  );
}