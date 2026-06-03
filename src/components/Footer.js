import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-12 bg-[#05070a]">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <div className="flex flex-wrap justify-center gap-8 mb-6">
                    <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-linkedin text-xl"></i></a>
                    <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-twitter text-xl"></i></a>
                    <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-github text-xl"></i></a>
                    <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-instagram text-xl"></i></a>
                </div>
                <p>© 2026 DivoAI IT Solutions — Innovation Without Limits. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;