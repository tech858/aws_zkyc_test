import React from 'react';
import { ZKYCProcess } from "zkyc-sdk-package";

export default function KYCButton(apiKey) {
  const handleKYC = async () => {
    try {
      await ZKYCProcess({
        apiKey: apiKey.apiKey,
        failurePage: apiKey.failurePage,
        successPage: apiKey.successPage,
      });
    } catch (error) {
      console.error('KYC initiation failed:', error);
      alert('Failed to start KYC process. Please try again.');
    }
  };

  return <button className="w-full bg-white text-black rounded-xl py-3"onClick={handleKYC}>Start KYC Verification</button>;}