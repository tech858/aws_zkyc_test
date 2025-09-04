export default function Success() {
    return (
        <main className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-2xl flex flex-col items-center space-y-8">
                
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-900 rounded-full flex items-center justify-center border border-green-700">
                    <svg 
                        className="w-10 h-10 text-green-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                        />
                    </svg>
                </div>

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-light text-white mb-3">
                        Verification Complete
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Your identity has been successfully verified
                    </p>
                </div>

                {/* Success Card */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 w-full text-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-medium text-white">
                            KYC Process Completed
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Your KYC verification has been successfully processed and approved. 
                            You can now access all features and services.
                        </p>
                        
                        {/* Status indicators */}
                        <div className="mt-6 pt-6 border-t border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400">Identity Verified</span>
                                </div>
                                
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400">Documents Approved</span>
                                </div>
                                
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-400">Account Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps Card */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 w-full">
                    <h3 className="text-lg font-medium text-white mb-4">What is Next?</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">You can now access all platform features</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">Your verification status has been updated</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">A confirmation email has been sent to you</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="w-full">
                    <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-4 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Continue to Dashboard
                    </button>
                </div>
            </div>
        </main>
    );
}