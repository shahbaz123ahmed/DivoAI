import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import ServicesPage from './pages/ServicesPage';
import InsightsPage from './pages/InsightsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClickCount, setMobileMenuClickCount] = useState(0);
  const closeMobileMenu = () => setTimeout(() => setMobileMenuOpen(false), 150);

  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [whatsAppActive, setWhatsAppActive] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState('');

  const chatBodyRef = useRef(null);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (showWhatsAppPopup && !hasAnimated) {
      setHasAnimated(true);

      const typeMessage = async (messageText, messageId) => {
        // Add the message container with empty text first
        setVisibleMessages(prev => [...prev, { id: messageId, text: "" }]);

        // Type character by character, handling emojis properly
        let currentText = "";
        const characters = Array.from(messageText);

        for (let i = 0; i < characters.length; i++) {
          currentText += characters[i];
          setVisibleMessages(prev =>
            prev.map(m => (m.id === messageId ? { ...m, text: currentText } : m))
          );
          // Wait 25ms per character for natural-feeling speed
          await new Promise(resolve => setTimeout(resolve, 25));
        }
      };

      const runAnimation = async () => {
        setVisibleMessages([]);

        // Phase 1: Wait 500ms, show typing indicator for message 1
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsTyping(true);

        // Phase 2: Wait 1000ms, hide indicator, type message 1 letter-by-letter
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsTyping(false);
        await typeMessage("Hey there! 👋 I'm DivoAI's Support Architect.", 1);

        // Phase 3: Wait 800ms, show typing indicator for message 2
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsTyping(true);

        // Phase 4: Wait 1500ms, hide indicator, type message 2 letter-by-letter
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsTyping(false);
        await typeMessage(
          "Planning your next website or software? Let’s build it together 🚀\n\nTell us your idea — we’ll turn it into a scalable product. Need a website or custom software? You’re in the right place.\n\nJust drop your idea below and let’s get started 💡",
          2
        );
      };

      runAnimation();
    }
  }, [showWhatsAppPopup, hasAnimated]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWhatsAppActive(true);
      setShowWhatsAppPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const accessKey = "3371ed5c-8e86-42d8-b49d-998f6fedd9f0";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          subject: "New DivoAI Contact Form Submission"
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus('error');
    }
  };

  const headlines = [
    "Build the Future with Cloud & AI",
    "Powering Ideas with Cloud & Code",
    "Where Innovation Meets Infrastructure",
    "Engineering Scalable Digital Experiences",
    "Modern Cloud. Smarter Code."
  ];
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [headlineStatus, setHeadlineStatus] = useState('active');

  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Exit current headline
      setHeadlineStatus('exit');

      // 2. Wait for exit animation to finish (1000ms), then switch content and move text to starting enter position
      setTimeout(() => {
        setHeadlineIdx((prev) => (prev + 1) % headlines.length);
        setHeadlineStatus('enter');

        // 3. Immediately trigger entering transition (slides in)
        setTimeout(() => {
          setHeadlineStatus('active');
        }, 50);
      }, 1000);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  // Slideshow for Who We Are section
  const whoWeAreSlides = [
    {
      src: '/wer/slide1.jpg',
      title: 'Enterprise Solutions',
      subtitle: 'Architecting secure, cloud-native infrastructures at scale',
      type: 'fade-zoom'
    },
    {
      src: '/wer/slide2.jpg',
      title: 'AI-Driven Innovation',
      subtitle: 'Intelligent workflow automations and context-aware agents',
      type: 'slide-horizontal'
    },
    {
      src: '/wer/slide3.jpg',
      title: 'Next-Gen Platforms',
      subtitle: 'High-performance Web & SaaS solutions built for efficiency',
      type: 'slide-vertical'
    },
    {
      src: '/wer/slide4.jpg',
      title: 'Modern Tech Stacks',
      subtitle: 'Bleeding-edge tools and frameworks tailored for scalability',
      type: 'wipe-diagonal'
    },
    {
      src: '/wer/slide5.jpg',
      title: 'Collaborative Design',
      subtitle: 'Intuitive, gorgeous, and interactive user experiences',
      type: 'blur-fade'
    },
    {
      src: '/wer/slide6.jpg',
      title: 'Mission-Critical Ops',
      subtitle: '24/7 proactive monitoring and system telemetry',
      type: 'fade-zoom'
    }
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(activeSlide);
      setActiveSlide((prev) => (prev + 1) % whoWeAreSlides.length);
    }, 6000); // 6s duration per slide (nice and slow)
    return () => clearInterval(timer);
  }, [activeSlide]);

  // Slideshow for Why Nexify (Features) section
  const chooseUsSlides = [
    {
      src: '/dashboard/slide7.jpg',
      title: 'Infrastructure Metrics',
      type: 'fade-zoom'
    },
    {
      src: '/dashboard/slide8.jpg',
      title: 'Node Overview',
      type: 'slide-horizontal'
    },
    {
      src: '/dashboard/slide9.jpg',
      title: 'Security Insights',
      type: 'slide-vertical'
    },
    {
      src: '/dashboard/slide10.jpg',
      title: 'Resource Allocation',
      type: 'wipe-diagonal'
    }
  ];
  const [activeChooseUs, setActiveChooseUs] = useState(0);
  const [prevChooseUs, setPrevChooseUs] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevChooseUs(activeChooseUs);
      setActiveChooseUs((prev) => (prev + 1) % chooseUsSlides.length);
    }, 6000); // 6s duration per slide (nice and slow)
    return () => clearInterval(timer);
  }, [activeChooseUs]);


  useEffect(() => {
    // Scroll to top instantly on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize/refresh AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 80,
      });
      window.AOS.refresh();
    }

    // Initialize Swiper
    if (window.Swiper) {
      new window.Swiper('.mySwiper', {
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }
      });
    }

    // Initialize GSAP
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Hero Animations
      window.gsap.fromTo(".hero-animate-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
      );
      window.gsap.fromTo(".hero-animate-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" }
      );
      window.gsap.fromTo(".hero-animate-ctas",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }
      );
      window.gsap.fromTo(".hero-animate-visual",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
      );

      // Footer Animations via ScrollTrigger (GSAP Master level entry from all directions - Slower & Staggered)
      window.gsap.fromTo(".footer-col-1",
        { opacity: 0, x: -120 },
        {
          opacity: 1,
          x: 0,
          duration: 2.4,
          delay: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            toggleActions: "restart reverse restart reverse"
          }
        }
      );

      window.gsap.fromTo(".footer-col-2",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          duration: 2.4,
          delay: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            toggleActions: "restart reverse restart reverse"
          }
        }
      );

      window.gsap.fromTo(".footer-col-3",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2.4,
          delay: 0.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            toggleActions: "restart reverse restart reverse"
          }
        }
      );

      window.gsap.fromTo(".footer-col-4",
        { opacity: 0, x: 120 },
        {
          opacity: 1,
          x: 0,
          duration: 2.4,
          delay: 0.7,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            toggleActions: "restart reverse restart reverse"
          }
        }
      );

      window.gsap.fromTo(".footer-bottom-bar",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 2.8,
          delay: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "footer",
            start: "top 95%",
            toggleActions: "restart reverse restart reverse"
          }
        }
      );
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const targetRect = target.getBoundingClientRect().top;
        const targetPosition = targetRect - bodyRect;
        const offsetPosition = targetPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-100 bg-[#0B0F19] overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5" id="navbar">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            {/* SVG Logo Icon */}
            <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="divoai-logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path
                d="M26 80 L50 28 L74 80"
                stroke="url(#divoai-logo-gradient)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="74" r="8" fill="url(#divoai-logo-gradient)" />
            </svg>

            {/* Brand Name */}
            <div className="logo-text text-2xl font-extrabold tracking-tight transition group-hover:opacity-90 flex items-center text-white">
              <span>Divo</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">AI</span>
            </div>

            {/* Divider and Subtitle */}
            <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full group-hover:scale-y-110 transition duration-300"></div>
            <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase hidden sm:inline">IT Solutions</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
            <a href="#home" className="nav-link hover:text-white transition">Home</a>
            <Link to="/services" className="nav-link hover:text-white transition">Services</Link>
            <Link to="/insights" className="nav-link hover:text-white transition">Insights</Link>
            <Link to="/about" className="nav-link hover:text-white transition">About</Link>
            <Link to="/contact" className="nav-link hover:text-white transition">Contact</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-[1.03]"
            >
              Get Started
            </Link>
          </div>

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
          <a href="#home" className="mobile-menu-link group" onClick={closeMobileMenu}>
            <span>Home</span>
            <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"></i>
          </a>
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
          <Link to="/contact" className="mobile-menu-link group">
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

      {/* HERO SECTION */}
      <section id="home" className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F19]">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Designed Image Container */}
        <div className="w-full h-full flex items-center justify-center z-10 mt-[72px] lg:mt-0">
          <img
            src="/images/herosection.jpg"
            alt="DivoAI Brand Hero"
            className="w-full h-full min-h-[60vh] md:min-h-[80vh] lg:min-h-screen object-cover select-none pointer-events-none"
          />
        </div>
      </section>

      {/* CORE SERVICES SECTION (Light Theme) */}
      <section id="services" className="py-28 bg-[#F8FAFC] text-slate-900 relative">
        {/* Soft shadow transition from dark to light */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0B0F19] to-transparent pointer-events-none opacity-10"></div>

        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block">
              Core Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight text-slate-900">
              Future-proof digital <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              We design and construct bleeding-edge tech solutions to scale your product, improve security, and lead your industry.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="service-card-light p-8 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="service-icon-container h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-2xl mb-6">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Build High-Converting Websites</h3>
                <p className="text-slate-600 leading-relaxed">
                  Stunning, lightning-fast, and SEO-optimized web experiences designed to engage your visitors, drive sales, and establish a premium brand presence.
                </p>
              </div>
              <div className="mt-8 flex items-center text-blue-600 font-semibold group cursor-pointer text-sm">
                Explore <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1.5 transition"></i>
              </div>
            </div>

            {/* Card 2 */}
            <div className="service-card-light p-8 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="service-icon-container h-14 w-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 text-2xl mb-6">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Develop Powerful Custom Software</h3>
                <p className="text-slate-600 leading-relaxed">
                  Tailored digital solutions built from the ground up to solve your unique operational challenges, automate key workflows, and scale alongside your business.
                </p>
              </div>
              <div className="mt-8 flex items-center text-purple-600 font-semibold group cursor-pointer text-sm">
                Explore <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1.5 transition"></i>
              </div>
            </div>

            {/* Card 3 */}
            <div className="service-card-light p-8 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="service-icon-container h-14 w-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 text-2xl mb-6">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Launch Scalable SaaS Products</h3>
                <p className="text-slate-600 leading-relaxed">
                  Turn your ideas into profitable software platforms with secure multi-tenant architectures, flexible subscription billing, and robust API frameworks.
                </p>
              </div>
              <div className="mt-8 flex items-center text-cyan-600 font-semibold group cursor-pointer text-sm">
                Explore <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1.5 transition"></i>
              </div>
            </div>

            {/* Card 4 */}
            <div className="service-card-light p-8 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="150">
              <div>
                <div className="service-icon-container h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl mb-6">
                  <i className="fas fa-bezier-curve"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Design Experiences Users Love</h3>
                <p className="text-slate-600 leading-relaxed">
                  User-centric UI/UX design research, wireframing, and interactive prototypes that turn complex systems into clean, highly intuitive, and memorable journeys.
                </p>
              </div>
              <div className="mt-8 flex items-center text-indigo-600 font-semibold group cursor-pointer text-sm">
                Explore <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1.5 transition"></i>
              </div>
            </div>

            {/* Card 5 */}
            <div className="service-card-light p-8 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="250">
              <div>
                <div className="service-icon-container h-14 w-14 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 text-2xl mb-6">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Automate & Optimize Your Business</h3>
                <p className="text-slate-600 leading-relaxed">
                  Eliminate manual work by integrating smart APIs, cloud-based workflows, and automated databases that save hours of team labor daily.
                </p>
              </div>
              <div className="mt-8 flex items-center text-pink-600 font-semibold group cursor-pointer text-sm">
                Explore <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1.5 transition"></i>
              </div>
            </div>

            {/* Card 6 */}
            <div className="service-card-light p-8 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="350">
              <div>
                <div className="service-icon-container h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-2xl mb-6">
                  <i className="fas fa-headset"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Complete IT Solutions & Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Proactive server maintenance, security auditing, daily backups, and rapid-response technical troubleshooting to keep your operations run flawlessly.
                </p>
              </div>
              <div className="mt-8 flex items-center text-emerald-600 font-semibold group cursor-pointer text-sm">
                Explore <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1.5 transition"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / FEATURES SECTION (Light Theme) */}
      <section id="why-choose-us" className="py-28 bg-white text-slate-900 relative border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-8" data-aos="fade-right">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
                  Why DivoAI
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Build Smart. Scale Fast.
                </h2>
                <p className="text-slate-600 mt-6 text-lg leading-relaxed">
                  We don’t just develop software — we create high-performing websites, scalable SaaS products, and smart digital solutions designed to grow your business faster.
                </p>
              </div>

              {/* Trust Checkmarks */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">High-Performance Development</h4>
                    <p className="text-slate-600 text-sm mt-0.5">Fast, secure, and scalable websites and software built with modern technologies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">End-to-End Product Engineering</h4>
                    <p className="text-slate-600 text-sm mt-0.5">From idea to deployment, we handle design, development, and scaling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">User-Centered Design Approach</h4>
                    <p className="text-slate-600 text-sm mt-0.5">Clean, intuitive interfaces that improve engagement and user experience.</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="stat-card-light p-6">
                  <div className="text-4xl font-extrabold text-blue-600">99.9%</div>
                  <div className="text-sm font-semibold text-slate-700 mt-2">Network Uptime Guarantee</div>
                </div>
                <div className="stat-card-light p-6">
                  <div className="text-4xl font-extrabold text-purple-600">24/7</div>
                  <div className="text-sm font-semibold text-slate-700 mt-2">Enterprise Customer Support</div>
                </div>
              </div>
            </div>

            {/* Right Column Visual / Illustration Slideshow */}
            <div className="lg:col-span-6 relative flex justify-center" data-aos="fade-left">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/50 shadow-xl bg-slate-50 group">
                {/* Slides */}
                {chooseUsSlides.map((slide, idx) => {
                  let statusClass = 'slide-inactive';
                  if (idx === activeChooseUs) {
                    statusClass = 'slide-active';
                  } else if (idx === prevChooseUs) {
                    statusClass = 'slide-exiting';
                  }
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 w-full h-full who-we-are-slide slide-${slide.type} ${statusClass}`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}

                {/* Glass stat chip */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 border border-white/20 backdrop-blur-md flex justify-between items-center shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center">
                      <i className="fas fa-check-circle text-lg animate-pulse"></i>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {chooseUsSlides[activeChooseUs].title}
                      </div>
                      <div className="text-[10px] text-slate-500">Latency: 28ms globally</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-full">
                    SLA Active
                  </div>
                </div>

                {/* Dots indicator */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  {chooseUsSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPrevChooseUs(activeChooseUs);
                        setActiveChooseUs(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === activeChooseUs
                        ? 'w-5 bg-blue-500'
                        : 'w-1.5 bg-white/40 hover:bg-white/60'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION (Light Theme) */}
      <section className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block">
              Success Stories
            </span>
            <h2 className="text-4xl font-extrabold mt-4 text-slate-900 tracking-tight">
              Trusted by tech industry champions
            </h2>
          </div>

          <div className="swiper mySwiper pb-12">
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              <div
                className="swiper-slide p-8 bg-white border border-slate-100 rounded-2xl flex flex-col justify-between h-[250px] shadow-sm"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-slate-600">
                    "DivoAI's cloud architecture migration reduced our monthly GCP expenses by 40% while quadrupling our application speed. Remarkable engineers."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                    SC
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">Sarah Chen</h4>
                    <p className="text-xs text-slate-500">CTO, VektorAI</p>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div
                className="swiper-slide p-8 bg-white border border-slate-100 rounded-2xl flex flex-col justify-between h-[250px] shadow-sm"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-slate-600">
                    "Their automated deployment pipelines minimized software staging cycles from two days to under ten minutes. Their cybersecurity audit was incredibly thorough."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">Michael R.</h4>
                    <p className="text-xs text-slate-500">VP Engineering, Zenith Labs</p>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div
                className="swiper-slide p-8 bg-white border border-slate-100 rounded-2xl flex flex-col justify-between h-[250px] shadow-sm"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-slate-600">
                    "DivoAI engineers are highly proactive. Their 24/7 managed support patrols have intercepted and resolved three infrastructure faults before they caused outages."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                  <div className="h-10 w-10 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-sm">
                    EV
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">Elena V.</h4>
                    <p className="text-xs text-slate-500">Product Director, PayStream</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination mt-10"></div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION (Light Theme) */}
      <section id="blog" className="py-28 bg-white text-slate-900 relative border-t border-slate-100">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block">
              Insights & Trends
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tight text-slate-900">
              Latest from the <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Tech Blog</span>
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Stay ahead of technical innovation with strategies, workflows, and analyses curated by DivoAI IT architects.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="blog-card-light flex flex-col justify-between" data-aos="flip-left" data-aos-delay="100">
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src="/images/blog_ai.png"
                    alt="AI DevOps Pipeline Visual"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    Artificial Intelligence
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-slate-400 text-xs font-semibold">March 12, 2026 • 5 min read</p>
                  <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition duration-300">
                    How AI is redefining automated DevOps pipelines
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Explore machine learning anomalies identification, auto-healing Kubernetes nodes, and neural infrastructure optimization.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/insights" className="text-sm font-bold text-blue-600 flex items-center gap-1 group">
                  Read Article <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition"></i>
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="blog-card-light flex flex-col justify-between" data-aos="flip-left" data-aos-delay="200">
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src="/images/blog_cloud.png"
                    alt="Cloud Scalability Visual"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    Cloud Native
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-slate-400 text-xs font-semibold">March 5, 2026 • 4 min read</p>
                  <h3 className="text-xl font-bold text-slate-900 hover:text-purple-600 transition duration-300">
                    Serverless & Edge: The ultimate scaling playbook
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    A deep dive into serverless database sharding, edge cache rendering speeds, and cloud bill optimizations.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/insights" className="text-sm font-bold text-purple-600 flex items-center gap-1 group">
                  Read Article <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition"></i>
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="blog-card-light flex flex-col justify-between" data-aos="flip-left" data-aos-delay="300">
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src="/images/blog_security.png"
                    alt="Zero Trust Security Visual"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    Cybersecurity
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-slate-400 text-xs font-semibold">Feb 28, 2026 • 6 min read</p>
                  <h3 className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition duration-300">
                    Establishing zero trust in hybrid developer environments
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    How security architectures use strict identity authorization, device certificates, and isolated networks.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <Link to="/insights" className="text-sm font-bold text-emerald-600 flex items-center gap-1 group">
                  Read Article <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Light/Grey Theme) */}
      <section id="about" className="py-28 bg-[#F8FAFC] text-slate-900 relative border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column Image Slideshow */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 shadow-2xl bg-slate-950 aspect-[4/3] w-full group">
                {/* Slides */}
                {whoWeAreSlides.map((slide, idx) => {
                  let statusClass = 'slide-inactive';
                  if (idx === activeSlide) {
                    statusClass = 'slide-active';
                  } else if (idx === prevSlide) {
                    statusClass = 'slide-exiting';
                  }
                  return (
                    <div
                      key={idx}
                      className={`absolute inset-0 w-full h-full who-we-are-slide slide-${slide.type} ${statusClass}`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}

                {/* Dark Overlay gradient for metadata legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10 pointer-events-none"></div>

                {/* Live Node Status at the top */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Live System Active</span>
                </div>

                {/* Slide Metadata text overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded inline-block mb-1">
                    System Core
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight leading-snug drop-shadow-md">
                    {whoWeAreSlides[activeSlide].title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed drop-shadow-sm max-w-sm">
                    {whoWeAreSlides[activeSlide].subtitle}
                  </p>
                </div>

                {/* Navigation Indicator Progress Dots */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5">
                  {whoWeAreSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setPrevSlide(activeSlide);
                        setActiveSlide(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === activeSlide
                        ? 'w-6 bg-gradient-to-r from-blue-500 to-indigo-500'
                        : 'w-1.5 bg-white/30 hover:bg-white/50'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column Content */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Architecting the Future of Digital Innovation
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                At DivoAI, we don’t just build software — we engineer scalable digital ecosystems. Since 2018, we’ve partnered with global businesses to design high-performance websites, custom software, and cloud-driven solutions that accelerate growth and innovation.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                By combining cutting-edge technology with intuitive user experiences, we help businesses move faster, scale smarter, and stay ahead in a rapidly evolving digital world.
              </p>

              <div className="grid sm:grid-cols-1 gap-4 pt-4 text-slate-800">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-blue-600 text-lg"></i>
                  <span className="font-medium text-sm">150+ Projects Delivered Worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-blue-600 text-lg"></i>
                  <span className="font-medium text-sm">Trusted by Growing Startups & Enterprises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-blue-600 text-lg"></i>
                  <span className="font-medium text-sm">Built for Performance, Security & Scale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (Light Background with Dark Card) */}
      <section id="contact" className="py-28 bg-white text-slate-900 relative border-t border-slate-100">
        {/* Glow Background blobs */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pulse-glow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-[90px] pulse-glow delay-700"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#0B0F19] rounded-3xl p-8 md:p-14 border border-white/10 shadow-2xl text-white" data-aos="zoom-in">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Let’s Build Something Powerful Together
              </span>
              <div className="min-h-[96px] md:min-h-[80px] flex items-center justify-center mb-2 overflow-hidden">
                <h2 className={`text-3xl md:text-4xl font-black tracking-tight text-center gradient-text headline-${headlineIdx} ${headlineStatus}`}>
                  {headlines[headlineIdx]}
                </h2>
              </div>
              <p className="text-slate-400 mt-3">Have a vision for your next website, SaaS platform, or custom software? Share your goals with us — our team will help you design, build, and scale it with precision.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="text-center py-10 px-4 space-y-6" data-aos="fade-up">
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-400 max-w-md mx-auto text-sm">
                    Thank you for reaching out to DivoAI. We have received your inquiry and our tech architects will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                    setFormStatus('idle');
                  }}
                  className="btn-primary px-8 py-3 rounded-full font-bold text-sm transition hover:scale-[1.02] text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input-dark rounded-xl p-4 text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sarah@vektor.ai"
                    className="form-input-dark rounded-xl p-4 text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone (optional)</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 019-2834"
                    className="form-input-dark rounded-xl p-4 text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. VektorAI"
                    className="form-input-dark rounded-xl p-4 text-sm"
                  />
                </div>
                <div className="col-span-full flex flex-col space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">How can we help?</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Outline your application stack, scaling issues, or project timeline..."
                    className="form-input-dark rounded-xl p-4 text-sm"
                    required
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="col-span-full text-center text-red-400 text-xs font-semibold bg-red-500/10 border border-red-500/20 py-2.5 px-4 rounded-xl">
                    <i className="fas fa-exclamation-circle mr-2"></i> Something went wrong. Please check your network or try again.
                  </div>
                )}

                <div className="col-span-full flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary px-12 py-4 rounded-full font-bold text-base w-full md:w-auto hover:scale-[1.02] transition flex items-center justify-center gap-2 text-white disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        Sending... <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      </>
                    ) : (
                      <>
                        Send Message <i className="fas fa-paper-plane text-xs"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07090e] text-slate-400 relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-6">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Col 1 — Brand */}
            <div className="space-y-5 footer-col-1">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* SVG Logo Icon */}
                  <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="divoai-footer-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M26 80 L50 28 L74 80"
                      stroke="url(#divoai-footer-gradient)"
                      strokeWidth="15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="50" cy="74" r="8" fill="url(#divoai-footer-gradient)" />
                  </svg>
                  {/* Brand Text */}
                  <div className="text-2xl font-black transition flex items-center text-white tracking-tight">
                    <span>Divo</span>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">AI</span>
                  </div>
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">IT Solutions</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                DivoAI IT Solutions delivers modern websites, powerful software tools, and intelligent IT systems tailored for today’s businesses. Every solution we create is designed to be fast, secure, scalable, and user-focused.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 pt-1">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200">
                  <i className="fab fa-linkedin text-sm"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-200">
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all duration-200">
                  <i className="fab fa-twitter text-sm"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200">
                  <i className="fab fa-github text-sm"></i>
                </a>
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="footer-col-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
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
                      <i className="fas fa-chevron-right text-[10px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:translate-x-0.5 transition-all duration-200"></i>
                      <span className="footer-link-text">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Our Services */}
            <div className="footer-col-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Our Services</h5>
              </div>
              <ul className="space-y-3.5">
                {[
                  'Web Development',
                  'Custom Software',
                  'SaaS Solutions',
                  'Automation',
                  'IT Support',
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-[10px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:translate-x-0.5 transition-all duration-200"></i>
                      <span className="footer-link-text">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact Us */}
            <div className="footer-col-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Contact Us</h5>
              </div>
              <ul className="space-y-3.5">
                {/* Location */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-map-marker-alt text-xs text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 leading-relaxed">Bengaluru, India</p>
                  </div>
                </li>
                {/* Email */}
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-xs text-purple-400"></i>
                  </div>
                  <a href="mailto:hello@divo.ai" className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200">
                    hello@divo.ai
                  </a>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-xs text-blue-400"></i>
                  </div>
                  <a href="tel:+917260912826" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200">
                    +91 72609 12826
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 footer-bottom-bar">
            <p>© 2026 <span className="text-slate-200 font-semibold">DivoAI IT Solutions</span> — Building Digital Products That Scale. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <a href="#home" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
              <span className="text-slate-500">ISO 27001 Certified</span>
            </div>
          </div>

        </div>
      </footer>

      {/* WhatsApp Widget */}
      {whatsAppActive && (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
          {/* Popup Card (Live Chat Style) */}
          <div className={`w-80 rounded-2xl bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 shadow-2xl text-white overflow-hidden mb-4 transition-all duration-300 transform ${showWhatsAppPopup ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-950 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center border border-white/10 text-white font-black text-sm">
                    D
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#0F172A]"></span>
                </div>
                <div className="text-left">
                  <h6 className="text-xs font-bold text-white leading-tight">DivoAI Support</h6>
                  <p className="text-[9px] text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="text-slate-400 hover:text-white text-xs focus:outline-none p-1 transition"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Chat Body */}
            <div ref={chatBodyRef} className="p-4 bg-[#07090e]/80 max-h-[300px] overflow-y-auto text-left relative scroll-smooth">
              <div className="text-[10px] text-slate-600 text-center mb-3">Today</div>

              {/* Dynamic Messages */}
              {visibleMessages.map((msg) => (
                <div key={msg.id} className="flex gap-2 max-w-[85%] mb-3 animate-fade-in-up">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white border border-white/5">
                    N
                  </div>
                  <div className="bg-slate-900 border border-white/5 text-slate-300 text-xs rounded-2xl rounded-tl-none p-3 shadow-md leading-relaxed whitespace-pre-line">
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2 max-w-[85%] mb-3 items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white border border-white/5 animate-pulse">
                    N
                  </div>
                  <div className="bg-slate-900 border border-white/5 text-slate-400 text-xs rounded-2xl rounded-tl-none px-4 py-3 shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0s]"></span>
                  </div>
                </div>
              )}

              {/* Quick Replies */}
              {visibleMessages.length >= 2 && (
                <div className="flex flex-col gap-1.5 items-end mb-1 animate-fade-in-up">
                  {[
                    "I want to build a website or SaaS",
                    "Custom software & automation query",
                    "Get pricing for custom software/IT"
                  ].map((reply) => (
                    <button
                      key={reply}
                      type="button"
                      onClick={() => setWhatsAppMessage(reply)}
                      className="text-[10px] text-blue-400 hover:text-white bg-blue-500/10 hover:bg-blue-600 border border-blue-500/20 hover:border-blue-500 rounded-xl px-3 py-1.5 transition-all duration-200 text-right max-w-[90%] shadow-sm"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!whatsAppMessage.trim()) return;
                const encodedMsg = encodeURIComponent(whatsAppMessage.trim());
                window.open(`https://wa.me/917260912826?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
                setWhatsAppMessage('');
              }}
              className="border-t border-white/5 p-3 bg-[#0a0c10] flex items-center gap-2"
            >
              <input
                type="text"
                value={whatsAppMessage}
                onChange={(e) => setWhatsAppMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition"
              />
              <button
                type="submit"
                disabled={!whatsAppMessage.trim()}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${whatsAppMessage.trim() ? 'bg-[#25D366] hover:bg-[#20ba5a] text-slate-900 cursor-pointer shadow-md' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
              >
                <i className="fas fa-paper-plane text-[10px]"></i>
              </button>
            </form>
          </div>

          {/* Floating Toggle Button */}
          <button
            onClick={() => setShowWhatsAppPopup(!showWhatsAppPopup)}
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 relative focus:outline-none"
            aria-label="Toggle WhatsApp chat"
          >
            {showWhatsAppPopup ? (
              <i className="fas fa-chevron-down text-lg"></i>
            ) : (
              <i className="fab fa-whatsapp text-2xl"></i>
            )}
            {/* Notification Dot */}
            {!showWhatsAppPopup && (
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;