import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <img
                            src="https://placehold.co/600x500/0a0c1a/3B82F6?text=Innovation+Hub&font=montserrat"
                            alt="about team"
                            className="rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <span className="text-blue-400 font-semibold tracking-wider">WHO WE ARE</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">
                            Global <span className="gradient-text">IT Architects</span> since 2018
                        </h2>
                        <p className="text-gray-300 mt-6 leading-relaxed">
                            DivoAI delivers bleeding-edge solutions to 150+ enterprises worldwide. Our elite engineers, designers, and strategists merge creativity with high-performance engineering. We don't just build software — we build digital empires.
                        </p>
                        <div className="grid grid-cols-2 gap-5 mt-8">
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-check-circle text-blue-500 text-xl"></i>
                                <span>99% client retention</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-check-circle text-blue-500 text-xl"></i>
                                <span>ISO 27001 Certified</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-check-circle text-blue-500 text-xl"></i>
                                <span>Global delivery centers</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <i className="fas fa-check-circle text-blue-500 text-xl"></i>
                                <span>24/7 mission-critical ops</span>
                            </div>
                        </div>
                        <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold flex items-center gap-2 btn-glow">
                            Meet the leadership <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;