// failure page just to display everything is not good 
export default function Failure() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <h1 className="text-4xl font-bold">Failure Page</h1>
        </div>
    
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                KYC Process Failed{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                There was an issue completing your KYC process. Please try again.
            </p>
            </div>
        </div>
        </main>
    );
}