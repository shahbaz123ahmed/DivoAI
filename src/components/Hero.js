import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            {/* Background blur circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div data-aos="fade-up">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold tracking-wide mb-6 border border-blue-500/30 backdrop-blur-sm">
                            🚀 Next-Gen IT Powerhouse
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                            Future-proof <span className="gradient-text">IT Solutions</span> <br />for digital leaders
                        </h1>
                        <p className="text-gray-300 text-lg mt-6 max-w-lg leading-relaxed">
                            We engineer performance, security & innovation — transforming your business with elite DevOps, cloud, and AI-driven platforms.
                        </p>
                        <div className="flex flex-wrap gap-5 mt-10">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full font-bold text-white overflow-hidden transition-all hover:shadow-xl hover:scale-105">
                                <span className="relative z-10">Start Project →</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </button>
                            <button className="px-8 py-4 rounded-full border border-blue-500/50 backdrop-blur-sm font-semibold hover:bg-blue-500/20 transition-all hover:scale-105">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div data-aos="fade-left" className="relative flex justify-center">
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] float-animation">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <i className="fas fa-cogs text-8xl text-blue-400 opacity-80"></i>
                            </div>
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-600/30 rounded-full backdrop-blur-md flex items-center justify-center">
                                <i className="fas fa-robot text-3xl"></i>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-600/30 rounded-full backdrop-blur-md flex items-center justify-center">
                                <i className="fas fa-cloud-upload-alt text-3xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;