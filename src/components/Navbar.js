import React, { useState, useEffect } from 'react';

const Navbar = ({ scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            id="services-navbar"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer group">
                  <img src="/logo.png" alt="DivoAI Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 scale-[2.5] md:scale-[3] origin-left group-hover:scale-[2.6] md:group-hover:scale-[3.1]" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-200 font-medium">
                    {['Home', 'Services', 'Blog', 'About', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="nav-link text-white hover:text-[#D90429] transition"
                        >
                            {item === 'Home' ? 'Home' : item === 'Services' ? 'Our Services' : item}
                        </button>
                    ))}
                </div>

                {/* Desktop CTA */}
                <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-[#D90429] to-[#B50321] text-white font-semibold text-sm btn-glow transition-all hover:scale-105">
                    Get Quote
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden bg-[#0f1117]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'
                }`}>
                <div className="flex flex-col py-6 px-6 space-y-5 text-center text-lg font-medium">
                    {['Home', 'Services', 'Blog', 'About', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                scrollToSection(item.toLowerCase());
                                setIsMobileMenuOpen(false);
                            }}
                            className="block hover:text-[#D90429]"
                        >
                            {item === 'Home' ? 'Home' : item === 'Services' ? 'Our Services' : item}
                        </button>
                    ))}
                    <button className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#D90429] to-[#B50321] w-full">
                        Get Quote
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;