import React from 'react';
import { services } from '../data/data';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#07090e]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
                    <span className="text-blue-400 font-semibold tracking-wider">CORE EXPERTISE</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Precision-crafted <span className="gradient-text">IT Services</span>
                    </h2>
                    <p className="text-gray-400 mt-4">End-to-end digital solutions that drive real business momentum.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="glass-card rounded-2xl p-8 transition-all"
                            data-aos="fade-up"
                            data-aos-delay={100 + idx * 50}
                        >
                            <div className={`service-icon text-5xl mb-5 ${service.iconColor}`}>
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                            <div className={`mt-6 flex items-center ${service.linkColor} group cursor-pointer`}>
                                Learn More <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;