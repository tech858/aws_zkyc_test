"use client"
import { ZKYCProcess } from 'zkyc-lfg'
export default function Home() {
  // component that show the customer that he need to kyc himself
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">KYC Process</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div onClick={
          () => ZKYCProcess(
          "df232ee0-b0e9-479d-9d4e-bb97e4d77472",
          "test_f891b652bbf3005a23fffc8b3f78ada4ee8424eca4bf553d",
          "Liveliness",  //the values are OCR, Liveliness, all. and null is basic idv
          "https://zkycsite.vercel.app/failure",  //change as you like
          "https://z-kyc-sdk.vercel.app/pending",  //change as you like)
          )}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Start KYC Process{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Click here to start the KYC process.
          </p>
          </div>
      </div>
    </main>
  );
}
