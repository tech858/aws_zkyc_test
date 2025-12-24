import React from 'react';
import { ZKYCProcess } from "zkyc-sdk-package";

export default function KYCButton() {
  const handleKYC = async () => {
    try {
      await ZKYCProcess({
        apiKey: "prod_bdhZewRkyHQpWNSHmDIMwwLgxOMuAXupzJivNMUONARXKhIWcLQGgiATjRIzpRNB",
        failurePage: `${window.location.origin}/kyc-failed`,
        pendingPage: `${window.location.origin}/kyc-pending`,
      });
    } catch (error) {
      console.error('KYC initiation failed:', error);
      alert('Failed to start KYC process. Please try again.');
    }
  };

  return <button onClick={handleKYC}>Start KYC Verification</button>;}