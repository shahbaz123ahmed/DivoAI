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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/10 ${isScrolled ? 'bg-[#0a0c10]/95 backdrop-blur-xl shadow-lg' : 'bg-[#0a0c10]/90 backdrop-blur-xl'
            }`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer group">
                  {/* SVG Logo Icon */}
                  <svg viewBox="0 0 100 100" className="w-7 h-7 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="divoai-logo-grad-leg" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M26 80 L50 28 L74 80" 
                      stroke="url(#divoai-logo-grad-leg)" 
                      strokeWidth="15" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <circle cx="50" cy="74" r="8" fill="url(#divoai-logo-grad-leg)" />
                  </svg>
                  {/* Brand Text */}
                  <div className="text-2xl font-extrabold tracking-tight transition flex items-center text-white">
                    <span>Divo</span>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">AI</span>
                  </div>
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full group-hover:animate-pulse"></div>
                  <span className="text-xs font-light tracking-wider text-gray-400">IT SOLUTIONS</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-200 font-medium">
                    {['Home', 'Services', 'Blog', 'About', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="nav-link text-white hover:text-blue-400 transition"
                        >
                            {item === 'Home' ? 'Home' : item === 'Services' ? 'Our Services' : item}
                        </button>
                    ))}
                </div>

                {/* Desktop CTA */}
                <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm btn-glow transition-all hover:scale-105">
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
                            className="block hover:text-blue-400"
                        >
                            {item === 'Home' ? 'Home' : item === 'Services' ? 'Our Services' : item}
                        </button>
                    ))}
                    <button className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 w-full">
                        Get Quote
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;