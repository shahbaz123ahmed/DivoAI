import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-[#0f121b] rounded-3xl border border-gray-800 p-8 md:p-12 backdrop-blur-sm shadow-2xl" data-aos="zoom-in">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold">
                            <span className="gradient-text">Let's talk business</span>
                        </h2>
                        <p className="text-gray-400 mt-2">Ready to elevate your IT infrastructure? Get in touch.</p>
                    </div>
                    <form className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-[#1a1f2a] border border-gray-700 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-[#1a1f2a] border border-gray-700 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition"
                        />
                        <input
                            type="text"
                            placeholder="Phone (optional)"
                            className="bg-[#1a1f2a] border border-gray-700 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition"
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            className="bg-[#1a1f2a] border border-gray-700 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition"
                        />
                        <textarea
                            rows="4"
                            placeholder="How can we help?"
                            className="col-span-full bg-[#1a1f2a] border border-gray-700 rounded-xl p-4 text-white focus:border-blue-500 outline-none transition"
                        ></textarea>
                        <div className="col-span-full flex justify-center">
                            <button
                                type="button"
                                className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-lg w-full md:w-auto btn-glow transition-all hover:scale-105"
                            >
                                Send Message →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;