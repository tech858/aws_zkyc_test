export default function Failure() {
    const handleRetry = () => {
        // Navigate back or to the KYC start page
        window.history.back();
    };

    const handleSupport = () => {
        // Redirect to support or contact page
        window.location.href = "mailto:support@yourcompany.com";
    };

    return (
        <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
                
                {/* Failure Icon */}
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center border border-red-700">
                    <svg 
                        className="w-10 h-10 text-red-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </div>

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-light text-white mb-3">
                        Verification Failed
                    </h1>
                    <p className="text-gray-400 text-lg">
                        We encountered an issue with your identity verification
                    </p>
                </div>

                {/* Failure Details Card */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 w-full text-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-medium text-white">
                            KYC Process Failed
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            There was an issue completing your KYC verification process. 
                            This could be due to document quality, information mismatch, or technical difficulties.
                        </p>
                        
                        {/* Common Issues */}
                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <h3 className="text-lg font-medium text-white mb-4">Common Issues</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="flex items-start space-x-3 text-left">
                                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300">Document image quality too low</span>
                                </div>
                                <div className="flex items-start space-x-3 text-left">
                                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300">Information doesn't match records</span>
                                </div>
                                <div className="flex items-start space-x-3 text-left">
                                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300">Document expired or invalid</span>
                                </div>
                                <div className="flex items-start space-x-3 text-left">
                                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-gray-300">Technical processing error</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps Card */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 w-full">
                    <h3 className="text-lg font-medium text-white mb-4">What You Can Do</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">Ensure your documents are clear and well-lit</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">Double-check that all information is accurate</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">Use a valid, non-expired government ID</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">Contact support if issues persist</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="w-full flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={handleRetry}
                        className="flex-1 bg-white hover:bg-gray-100 text-gray-900 font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Try Again
                    </button>
                    <button 
                        onClick={handleSupport}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Contact Support
                    </button>
                </div>

                {/* Additional Help */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        Need immediate assistance? 
                        <a href="mailto:support@yourcompany.com" className="text-gray-300 hover:text-white ml-1 underline">
                            Email our support team
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}