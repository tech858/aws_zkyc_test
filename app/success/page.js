export default function Success() {
    return (
        <main className="min-h-screen py-12 hero-bg px-4 flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-white z-10">
                
                {/* Success Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-white/5  border-white/10 rounded-full flex items-center justify-center border border-white-500/20 backdrop-blur-sm">
                        <svg 
                            className="w-12 h-12 text-white-400" 
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
                </div>

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-light mb-2">
                        Verification Complete
                    </h1>
                    <p className="text-gray-400">Your identity has been successfully verified</p>
                </div>

                {/* Success Card */}
                <div className="rounded-lg shadow-xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 mb-8">
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl font-light text-white">
                            KYC Process Completed
                        </h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Your KYC verification has been successfully processed and approved. 
                            You can now access all features and services.
                        </p>
                        
                        {/* Status indicators */}
                        <div className="pt-6 border-t border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-10 h-10 bg-white-500/10 rounded-full flex items-center justify-center border border-white-500/20">
                                        <svg className="w-5 h-5 text-white-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400">Identity Verified</span>
                                </div>
                                
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-10 h-10 bg-white-500/10 rounded-full flex items-center justify-center border border-white-500/20">
                                        <svg className="w-5 h-5 text-white-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400">Documents Approved</span>
                                </div>
                                
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="w-10 h-10 bg-white-500/10 rounded-full flex items-center justify-center border border-white-500/20">
                                        <svg className="w-5 h-5 text-white-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400">Account Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps Card */}
                <div className="rounded-lg shadow-xl bg-white/5 backdrop-blur-2xl border border-white/10 p-8 mb-8">
                    <h3 className="text-lg font-medium text-white mb-6">What's Next?</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">You can now access all platform features</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">Your verification status has been updated</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">A confirmation email has been sent to you</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-white text-black font-medium py-4 px-6 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/30">
                    Continue to Dashboard
                </button>
            </div>
        </main>
    );
}