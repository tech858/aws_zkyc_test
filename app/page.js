"use client"
import { ZKYCProcess } from 'zkyc-slt'
export default function Home() {
  const id = 'e85e49a2-7de3-45da-b724-c57eb9e22fc2'
  // component that show the customer that he need to kyc himself
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">KYC Process</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div onClick={() => ZKYCProcess(id, null, "http://localhost:3001/success", "http://localhost:3001/failure" )}
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
