import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './AboutPage.css';

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

const values = [
  {
    icon: 'fa-lightbulb',
    title: 'Innovation First',
    desc: 'We push the boundaries of technology, bringing AIOps, machine learning, and serverless compute to standard enterprise operations.',
    color: 'blue',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-400',
    borderGlow: 'hover:border-blue-500/30'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Zero-Trust Security',
    desc: 'Security is integrated into our engineering DNA. Every solution undergoes strict identity, device health, and network telemetry audits.',
    color: 'emerald',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-400',
    borderGlow: 'hover:border-emerald-500/30'
  },
  {
    icon: 'fa-chart-line',
    title: 'High-Performance Scale',
    desc: 'Lightning-fast edge nodes, distributed database sharding, and scale-to-zero capabilities that keep operating costs optimal.',
    color: 'purple',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-400',
    borderGlow: 'hover:border-purple-500/30'
  },
  {
    icon: 'fa-circle-check',
    title: 'Customer Success',
    desc: 'We partner closely with founders and enterprise leaders, delivering custom software designed specifically for their workflows.',
    color: 'cyan',
    iconBg: 'bg-cyan-500/10',
    iconText: 'text-cyan-400',
    borderGlow: 'hover:border-cyan-500/30'
  },
  {
    icon: 'fa-handshake',
    title: 'Integrity & Excellence',
    desc: 'Transparency in pricing, milestones, and system metrics. Every line of code is clean, robust, and documented.',
    color: 'pink',
    iconBg: 'bg-pink-500/10',
    iconText: 'text-pink-400',
    borderGlow: 'hover:border-pink-500/30'
  }
];

const timelineEvents = [
  {
    year: '2018',
    title: 'Foundation & Genesis',
    desc: 'DivoAI IT Solutions is founded in Bengaluru, India, focused on delivering high-end custom web and database systems.'
  },
  {
    year: '2020',
    title: 'Global Delivery & Expansion',
    desc: 'Expanded engineering centers globally, supporting clients in Europe and North America with modern cloud architectures.'
  },
  {
    year: '2022',
    title: 'Security Certifications',
    desc: 'Achieved ISO 27001 information security compliance, solidifying our zero-trust engineering standards for enterprises.'
  },
  {
    year: '2024',
    title: 'AIOps & Cloud-Native Focus',
    desc: 'Pioneered auto-healing container telemetry configurations and low-latency global edge sharding networks.'
  },
  {
    year: '2026',
    title: 'Digital Systems Leadership',
    desc: 'Rebranding DivoAI into a global enterprise cloud powerhouse, orchestrating modern solutions that scale to millions of users.'
  }
];

const leadership = [
  {
    name: 'Shahbaz Ahmed',
    role: 'CEO & Principal Architect',
    desc: 'Founder of DivoAI. Leading strategic cloud architectures, enterprise client integrations, and operations.',
    icon: 'fa-user-tie',
    glow: 'border-blue-500/20 shadow-blue-500/5'
  },
  {
    name: 'Elena Rostova',
    role: 'VP of Engineering / CTO',
    desc: 'Former systems engineer at Yandex. Overseeing zero-trust CI/CD build grids, microservices, and log telemetry.',
    icon: 'fa-laptop-code',
    glow: 'border-purple-500/20 shadow-purple-500/5'
  },
  {
    name: 'Marcus Aurelius',
    role: 'Head of UI/UX & Product Design',
    desc: 'Figma token compiling expert. Bridging the developer-to-designer handoff to create visually breathtaking layouts.',
    icon: 'fa-bezier-curve',
    glow: 'border-pink-500/20 shadow-pink-500/5'
  }
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(5);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClickCount, setMobileMenuClickCount] = useState(0);

  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize/refresh AOS
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, mirror: true, offset: 80 });
      window.AOS.refresh();
    }

    // Register GSAP ScrollTrigger and run animations
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Footer Column Animations
      window.gsap.fromTo('.abt-footer-col-1',
        { opacity: 0, x: -120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.1, ease: 'power4.out',
          scrollTrigger: { trigger: '.abt-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.abt-footer-col-2',
        { opacity: 0, y: -100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.3, ease: 'power4.out',
          scrollTrigger: { trigger: '.abt-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.abt-footer-col-3',
        { opacity: 0, y: 100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.5, ease: 'power4.out',
          scrollTrigger: { trigger: '.abt-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.abt-footer-col-4',
        { opacity: 0, x: 120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.7, ease: 'power4.out',
          scrollTrigger: { trigger: '.abt-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.abt-footer-bottom-bar',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 2.8, delay: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.abt-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
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

    // Slideshow Auto Rotation
    const slideTimer = setInterval(() => {
      setPrevSlide((prev) => (prev + 1) % whoWeAreSlides.length);
      setActiveSlide((prev) => (prev + 1) % whoWeAreSlides.length);
    }, 6000);

    return () => {
      clearInterval(slideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                <linearGradient id="divoai-logo-grad-abt" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path 
                d="M26 80 L50 28 L74 80" 
                stroke="url(#divoai-logo-grad-abt)" 
                strokeWidth="15" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="50" cy="74" r="8" fill="url(#divoai-logo-grad-abt)" />
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
            <Link to="/about" className="nav-link text-blue-400 hover:text-white transition">About</Link>
            <Link to="/contact" className="nav-link hover:text-white transition">Contact</Link>
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
          <Link to="/about" className="mobile-menu-link group text-blue-400 font-semibold">
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

      {/* ── HERO SECTION ── */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        {/* Glow elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide mb-6"
              data-aos="fade-down"
            >
              <i className="fas fa-rocket animate-pulse"></i> About DivoAI IT Solutions
            </span>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Architecting the Future of <br />
              <span className="gradient-text font-black">Digital Innovation.</span>
            </h1>
            <p
              className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We engineer high-performance web systems, custom SaaS applications, and secure cloud pipelines for digital leaders worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE & SLIDESHOW SECTION ── */}
      <section className="py-24 bg-[#090d16]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* Left Column Slideshow */}
            <div className="lg:col-span-5 relative" data-aos="fade-right">
              <div className="relative aspect-square w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 mx-auto">

                {whoWeAreSlides.map((slide, idx) => {
                  let slideStatus = "who-we-are-slide";
                  if (idx === activeSlide) slideStatus += " slide-active";
                  else if (idx === prevSlide) slideStatus += " slide-exiting";

                  return (
                    <div
                      key={idx}
                      className={`${slideStatus} ${slide.type}`}
                    >
                      <img
                        src={slide.src}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}

                {/* Glass Status Chip overlay */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">Live System Active</span>
                </div>

                {/* Metadata overlay */}
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

                {/* Progress dot indicators */}
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

            {/* Right Column Story */}
            <div className="lg:col-span-7 space-y-6 text-left" data-aos="fade-left">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Global IT Architects Building Digital Empires
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                At DivoAI, we don’t just build software — we engineer scalable digital ecosystems. Since 2018, we’ve partnered with global businesses to design high-performance websites, custom software, and cloud-driven solutions that accelerate growth and operational excellence.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                By combining cutting-edge technology with user-centered design, we help businesses move faster, scale smarter, and establish premium brand authorities in their industries.
              </p>

              {/* Checkmarks */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 text-slate-400 text-sm font-semibold">
                {[
                  '150+ Projects Delivered Worldwide',
                  '99% Client Retention Rate',
                  'ISO 27001 Certified Security Standards',
                  '24/7 Managed Mission-Critical Support'
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <i className="fas fa-check-circle text-blue-500 text-base" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE VALUES SECTION ── */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              The Values That Drive Us
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              We stand by rigorous technical criteria, extreme quality design, and clear client partnerships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {values.map((val, i) => (
              <div
                key={val.title}
                className={`abt-value-card p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-blue-500/20 transition-all duration-300 group ${val.borderGlow}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className={`h-12 w-12 rounded-xl ${val.iconBg} ${val.iconText} flex items-center justify-center text-xl mb-6 transition-transform group-hover:scale-110`}>
                  <i className={`fas ${val.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE TIMELINE SECTION ── */}
      <section className="py-24 bg-[#090d16] relative overflow-hidden">
        {/* Glow behind timeline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              The Evolution of DivoAI
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              From a regional dev lab to a globally trusted, certified enterprise technology partner.
            </p>
          </div>

          {/* Timeline Node List */}
          <div className="timeline-container relative pl-6 sm:pl-0">
            {/* Central Vertical Line for Desktop */}
            <div className="timeline-center-line absolute top-0 bottom-0 left-6 sm:left-1/2 w-[2px] bg-white/5 -translate-x-[1px]" />

            {timelineEvents.map((ev, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={ev.year}
                  className={`timeline-item relative mb-12 sm:mb-16 flex flex-col sm:flex-row items-start ${isEven ? 'sm:justify-start' : 'sm:justify-end'
                    }`}
                  data-aos={isEven ? 'fade-right' : 'fade-left'}
                  data-aos-delay={i * 100}
                >
                  {/* Visual Node Dot on Line */}
                  <div className="timeline-node absolute left-[15px] sm:left-1/2 top-4 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#090d16] -translate-x-1/2 z-10 shadow-lg shadow-blue-500/30 animate-pulse" />

                  {/* Content Container */}
                  <div className={`timeline-content w-full sm:w-[45%] text-left bg-slate-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-sm relative ${isEven ? 'sm:mr-auto pl-8 sm:pl-6' : 'sm:ml-auto pl-8 sm:pl-6'
                    }`}>
                    <span className="text-xs font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1 block">
                      {ev.year}
                    </span>
                    <h4 className="text-base font-extrabold text-white mb-2">{ev.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{ev.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section className="py-24 bg-[#0B0F19]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Team Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Meet Our Tech Architects
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              The engineers, designers, and strategists behind DivoAI’s product delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {leadership.map((member, i) => (
              <div
                key={member.name}
                className={`leadership-card p-8 rounded-3xl border bg-slate-900/10 hover:bg-slate-900/30 transition-all duration-300 group flex flex-col justify-between ${member.glow}`}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div>
                  <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 text-2xl mb-6 transition-transform group-hover:scale-105">
                    <i className={`fas ${member.icon}`} />
                  </div>
                  <h3 className="text-lg font-extrabold text-white leading-tight mb-1">{member.name}</h3>
                  <div className="text-[11px] font-bold text-blue-400 tracking-wider uppercase mb-4">{member.role}</div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{member.desc}</p>
                </div>
                <div className="flex gap-3 pt-2">
                  {['linkedin', 'twitter', 'github'].map((s) => (
                    <a
                      key={s}
                      href={`https://${s}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200"
                    >
                      <i className={`fab fa-${s} text-xs`} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN US CTA ── */}
      <section className="py-24 bg-[#0a0c10]/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            className="careers-cta-card rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Start a Strategy Session
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Build Your Digital Empire?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                Get in touch with Shahbaz and our core engineering team to map out your custom software solution or high-converting platform.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-[1.03] inline-block cursor-pointer"
                >
                  Consult An Architect <i className="fas fa-arrow-right ml-1.5 text-[9px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="abt-footer bg-[#07090e] text-slate-400 relative z-10 pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Col 1 — Brand */}
            <div className="space-y-5 abt-footer-col-1 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* SVG Logo Icon */}
                  <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="divoai-abt-footer-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M26 80 L50 28 L74 80" 
                      stroke="url(#divoai-abt-footer-gradient)" 
                      strokeWidth="15" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <circle cx="50" cy="74" r="8" fill="url(#divoai-abt-footer-gradient)" />
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
            <div className="abt-footer-col-2 text-left">
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
            <div className="abt-footer-col-3 text-left">
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
            <div className="abt-footer-col-4 text-left">
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
          <div className="abt-footer-bottom-bar border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
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
