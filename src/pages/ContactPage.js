import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './ContactPage.css';

// Web3Forms Access Key: Using your active key from the homepage form
const WEB3FORMS_ACCESS_KEY = "3371ed5c-8e86-42d8-b49d-998f6fedd9f0";

const servicesOptions = [
  'Web Development',
  'Custom Software',
  'SaaS Solutions',
  'Automation & AI',
  'IT Infrastructure',
  'Other'
];

const budgetRanges = [
  '<$5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+'
];

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClickCount, setMobileMenuClickCount] = useState(0);

  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [selectedService, setSelectedService] = useState('Web Development');
  const [selectedBudget, setSelectedBudget] = useState('$5,000 - $15,000');
  const [formStatus, setFormStatus] = useState('idle'); // idle | submitting | success | error

  useEffect(() => {
    // Scroll to top instantly on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize/refresh AOS
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, mirror: true, offset: 80 });
      window.AOS.refresh();
    }

    // Register GSAP ScrollTrigger and run animations
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Footer Animations
      window.gsap.fromTo('.con-footer-col-1',
        { opacity: 0, x: -120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.1, ease: 'power4.out',
          scrollTrigger: { trigger: '.con-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.con-footer-col-2',
        { opacity: 0, y: -100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.3, ease: 'power4.out',
          scrollTrigger: { trigger: '.con-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.con-footer-col-3',
        { opacity: 0, y: 100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.5, ease: 'power4.out',
          scrollTrigger: { trigger: '.con-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.con-footer-col-4',
        { opacity: 0, x: 120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.7, ease: 'power4.out',
          scrollTrigger: { trigger: '.con-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.con-footer-bottom-bar',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 2.8, delay: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.con-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
    }

    // Navbar Scroll Listener
    const handleScroll = () => {
      const navbar = document.getElementById('services-navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
          setScrolled(true);
        } else {
          navbar.classList.remove('scrolled');
          setScrolled(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New DivoAI Specs Inquiry from ${formData.name}`,
          from_name: 'DivoAI IT Solutions',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          company: formData.company || 'N/A',
          service: selectedService,
          budget: selectedBudget,
          message: formData.message
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setFormStatus('success');
      } else {
        console.error('Web3Forms Error:', data);
        setFormStatus('error');
      }
    } catch (err) {
      console.error('Form submission network error:', err);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 overflow-hidden">

      {/* ── NAVBAR ── */}
      <nav
        id="services-navbar"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            {/* SVG Logo Icon */}
            <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="divoai-logo-grad-con" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path 
                d="M26 80 L50 28 L74 80" 
                stroke="url(#divoai-logo-grad-con)" 
                strokeWidth="15" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="50" cy="74" r="8" fill="url(#divoai-logo-grad-con)" />
            </svg>
            
            {/* Brand Name */}
            <div className="logo-text text-2xl font-extrabold tracking-tight transition group-hover:opacity-90 flex items-center text-white">
              <span>Divo</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">AI</span>
            </div>
            
            {/* Divider and Subtitle */}
            <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full group-hover:scale-y-110 transition duration-300" />
            <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase hidden sm:inline">IT Solutions</span>
          </Link>

          <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
            <Link to="/" className="nav-link hover:text-white transition">Home</Link>
            <Link to="/services" className="nav-link hover:text-white transition">Services</Link>
            <Link to="/insights" className="nav-link hover:text-white transition">Insights</Link>
            <Link to="/about" className="nav-link hover:text-white transition">About</Link>
            <Link to="/contact" className="nav-link text-blue-400 hover:text-white transition">Contact</Link>
          </div>

          <Link
            to="/contact"
            className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-[1.03]"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-xl cursor-pointer text-slate-300 hover:text-white transition" onClick={() => {
            if (!mobileMenuOpen) {
              setMobileMenuClickCount(prev => prev + 1);
            }
            setMobileMenuOpen(!mobileMenuOpen);
          }}>
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden mobile-menu-container mobile-menu-anim-style-${mobileMenuClickCount === 0 ? 1 : ((mobileMenuClickCount - 1) % 5) + 1} ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-menu-link group">
            <span>Home</span>
            <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"></i>
          </Link>
          <Link to="/services" className="mobile-menu-link group">
            <span>Services</span>
            <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"></i>
          </Link>
          <Link to="/insights" className="mobile-menu-link group">
            <span>Insights</span>
            <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"></i>
          </Link>
          <Link to="/about" className="mobile-menu-link group">
            <span>About</span>
            <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"></i>
          </Link>
          <Link to="/contact" className="mobile-menu-link group text-blue-400 font-semibold">
            <span>Contact</span>
            <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"></i>
          </Link>
          <div className="mobile-menu-cta pt-2">
            <Link
              to="/contact"
              className="block w-full py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-center text-sm shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO HEADER ── */}
      <section className="relative pt-44 pb-14 overflow-hidden">
        {/* Glow Elements */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide mb-6"
            data-aos="fade-down"
          >
            <i className="fas fa-headset animate-pulse"></i> DivoAI Support Portal
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's Engineer Your <br />
            <span className="gradient-text font-black">Digital Enterprise.</span>
          </h1>
          <p
            className="text-slate-300 text-base max-w-lg mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Have a project timeline, custom platform requirements, or infrastructure questions? Connect with our engineering architects today.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY SECTION ── */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Column - Details */}
            <div className="lg:col-span-5 space-y-8" data-aos="fade-right">

              {/* Main Contact Card */}
              <div className="contact-detail-card p-8 rounded-3xl space-y-6 text-left">
                <h3 className="text-xl font-extrabold text-white tracking-tight">Direct Connections</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Skip the lines and talk directly to our solutions specialists. We monitor system inquiries 24/7 to guarantee rapid responses.
                </p>

                <div className="space-y-4 pt-2">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <i className="fas fa-map-location-dot text-sm" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">Office Headquarters</h5>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">Bengaluru, India</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center flex-shrink-0 text-purple-400">
                      <i className="fas fa-envelope text-sm" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">Email Inquiry</h5>
                      <a href="mailto:hello@divoai.com" className="text-slate-400 text-xs mt-1 block hover:text-purple-400 transition-colors">
                        hello@divoai.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center flex-shrink-0 text-cyan-400">
                      <i className="fas fa-phone-volume text-sm" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">Phone Call</h5>
                      <a href="tel:+917260912860" className="text-slate-400 text-xs mt-1 block hover:text-cyan-400 transition-colors">
                        +91 72609 12860
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Widget inside details card */}
                <div className="pt-4 border-t border-white/5">
                  <h6 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Sync Socially</h6>
                  <div className="flex gap-3">
                    {['linkedin', 'instagram', 'twitter', 'github'].map((s) => (
                      <a
                        key={s}
                        href={`https://${s}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                      >
                        <i className={`fab fa-${s} text-sm`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trust badges list */}
              <div className="space-y-4 text-left">
                <div className="contact-trust-badge p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fas fa-check" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">150+ Projects Delivered</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">High-performance React/Next.js and Cloud SaaS products.</p>
                  </div>
                </div>

                <div className="contact-trust-badge p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-lg flex-shrink-0">
                    <i className="fas fa-shield" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">ISO 27001 Certified</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">Zero-trust security compliance parameters integrated.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="contact-form-panel p-8 md:p-12 rounded-3xl shadow-2xl text-left">

                {formStatus === 'success' ? (
                  <div className="text-center py-12 px-4 space-y-6 animate-fade-in-up">
                    <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg">
                      <i className="fas fa-check-circle" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                      <p className="text-slate-400 max-w-md mx-auto text-xs leading-relaxed">
                        Thank you for coordinating with DivoAI IT Solutions. We have locked in your project specifications, and a principal systems architect will reach out within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                        setSelectedService('Web Development');
                        setSelectedBudget('$5,000 - $15,000');
                        setFormStatus('idle');
                      }}
                      className="btn-primary px-8 py-3 rounded-full font-bold text-xs transition hover:scale-[1.02] text-white cursor-pointer"
                    >
                      Submit Another Spec
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">Project Specifications Form</h3>

                    {/* Basic Grid Inputs */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Jenkins"
                          className="contact-field-input rounded-xl p-4 text-xs"
                          required
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. sarah@vektor.ai"
                          className="contact-field-input rounded-xl p-4 text-xs"
                          required
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone (optional)</label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 019-2834"
                          className="contact-field-input rounded-xl p-4 text-xs"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. VektorAI"
                          className="contact-field-input rounded-xl p-4 text-xs"
                        />
                      </div>
                    </div>

                    {/* Services Selector */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Select Service Area</label>
                      <div className="flex flex-wrap gap-2">
                        {servicesOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedService(opt)}
                            className={`service-option-btn text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/5 bg-slate-900/40 text-slate-400 hover:text-white hover:border-white/10 cursor-pointer ${selectedService === opt ? 'active' : ''}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Selector */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Estimated Project Budget</label>
                      <div className="flex flex-wrap gap-2">
                        {budgetRanges.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedBudget(opt)}
                            className={`budget-option-btn text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/5 bg-slate-900/40 text-slate-400 hover:text-white hover:border-white/10 cursor-pointer ${selectedBudget === opt ? 'active' : ''}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Outline / Timeline</label>
                      <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Outline your application stack, scaling issues, or project timeline..."
                        className="contact-field-input rounded-xl p-4 text-xs"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="btn-primary px-12 py-4 rounded-full font-bold text-xs w-full md:w-auto hover:scale-[1.02] transition flex items-center justify-center gap-2 text-white disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            Syncing Spec... <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          </>
                        ) : (
                          <>
                            Submit Inquiry <i className="fas fa-paper-plane text-[10px]" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="con-footer bg-[#07090e] text-slate-400 relative z-10 pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Col 1 — Brand */}
            <div className="space-y-5 con-footer-col-1 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* SVG Logo Icon */}
                  <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="divoai-con-footer-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M26 80 L50 28 L74 80" 
                      stroke="url(#divoai-con-footer-gradient)" 
                      strokeWidth="15" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <circle cx="50" cy="74" r="8" fill="url(#divoai-con-footer-gradient)" />
                  </svg>
                  {/* Brand Text */}
                  <div className="text-2xl font-black transition flex items-center text-white tracking-tight">
                    <span>Divo</span>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">AI</span>
                  </div>
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">IT Solutions</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                DivoAI IT Solutions delivers modern websites, powerful software tools, and intelligent IT systems tailored for today’s businesses. Every solution we create is designed to be fast, secure, scalable, and user-focused.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 pt-1">
                {['linkedin', 'instagram', 'twitter', 'github'].map((s) => (
                  <a
                    key={s}
                    href={`https://${s}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
                  >
                    <i className={`fab fa-${s} text-sm`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="con-footer-col-2 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h5>
              </div>
              <ul className="space-y-3.5">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Our Services', to: '/services' },
                  { label: 'Insights & Blog', to: '/insights' },
                  { label: 'About Us', to: '/about' },
                  { label: 'Contact Us', to: '/contact' },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-[10px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:translate-x-0.5 transition-all duration-200" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Our Services */}
            <div className="con-footer-col-3 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Our Services</h5>
              </div>
              <ul className="space-y-3.5">
                {[
                  { label: 'Web Development', id: 'web-development' },
                  { label: 'Custom Software', id: 'custom-software' },
                  { label: 'SaaS Solutions', id: 'saas-products' },
                  { label: 'Automation', id: 'automation' },
                  { label: 'IT Support', id: 'it-infrastructure' }
                ].map(({ label, id }) => (
                  <li key={label}>
                    <Link to={`/services#${id}`} className="text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-[10px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:translate-x-0.5 transition-all duration-200" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact Us */}
            <div className="con-footer-col-4 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Contact Us</h5>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-map-marker-alt text-xs text-blue-400" />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">Bengaluru, India</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-xs text-purple-400" />
                  </div>
                  <a href="mailto:hello@divoai.com" className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200">
                    hello@divoai.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-xs text-blue-400" />
                  </div>
                  <a href="tel:+917260912860" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200">
                    +91 72609 12860
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="con-footer-bottom-bar border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2026 <span className="text-slate-200 font-semibold">DivoAI IT Solutions</span> — Building Digital Products That Scale. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
              <span className="text-slate-500">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
