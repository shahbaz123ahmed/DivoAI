import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './AboutPage.css';

const whoWeAreSlides = [
  {
    src: '/wer/slide1.jpg',
    title: 'Custom Software',
    subtitle: 'Tailored applications designed to solve your unique business challenges',
    type: 'fade-zoom'
  },
  {
    src: '/wer/slide2.jpg',
    title: 'Web Platforms',
    subtitle: 'High-performance, scalable websites built for modern enterprises',
    type: 'slide-horizontal'
  },
  {
    src: '/wer/slide3.jpg',
    title: 'UI/UX Design',
    subtitle: 'Intuitive and engaging user experiences that delight your customers',
    type: 'slide-vertical'
  },
  {
    src: '/wer/slide4.jpg',
    title: 'Cloud Solutions',
    subtitle: 'Reliable, secure, and robust cloud infrastructure for growing teams',
    type: 'wipe-diagonal'
  },
  {
    src: '/wer/slide5.jpg',
    title: 'Digital Strategy',
    subtitle: 'Strategic roadmaps to accelerate your digital transformation journey',
    type: 'blur-fade'
  },
  {
    src: '/wer/slide6.jpg',
    title: 'Dedicated Support',
    subtitle: 'Ongoing maintenance, upgrades, and reliable technical partnerships',
    type: 'fade-zoom'
  }
];

const values = [
  {
    icon: 'fa-handshake',
    title: 'Client Partnership',
    desc: 'We treat your business as our own, building long-term relationships based on trust, collaboration, and shared success.',
    color: 'red',
    iconBg: 'bg-[#D90429]/10',
    iconText: 'text-[#D90429]',
    borderGlow: 'hover:border-[#D90429]/30'
  },
  {
    icon: 'fa-code',
    title: 'Engineering Excellence',
    desc: 'We write clean, scalable, and maintainable code, ensuring your software remains robust and reliable as you grow.',
    color: 'red',
    iconBg: 'bg-[#D90429]/10',
    iconText: 'text-[#D90429]',
    borderGlow: 'hover:border-[#D90429]/30'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Security & Reliability',
    desc: 'Security is paramount. We implement industry best practices to protect your data and ensure uninterrupted system performance.',
    color: 'red',
    iconBg: 'bg-[#D90429]/10',
    iconText: 'text-[#D90429]',
    borderGlow: 'hover:border-[#D90429]/30'
  },
  {
    icon: 'fa-rocket',
    title: 'Agile Delivery',
    desc: 'We move fast without sacrificing quality. Our agile methodologies ensure rapid iterations and transparent project milestones.',
    color: 'red',
    iconBg: 'bg-[#D90429]/10',
    iconText: 'text-[#D90429]',
    borderGlow: 'hover:border-[#D90429]/30'
  },
  {
    icon: 'fa-search',
    title: 'Absolute Transparency',
    desc: 'Clear communication, honest pricing, and open collaboration. No hidden fees, no tech jargon—just results.',
    color: 'red',
    iconBg: 'bg-[#D90429]/10',
    iconText: 'text-[#D90429]',
    borderGlow: 'hover:border-[#D90429]/30'
  },
  {
    icon: 'fa-layer-group',
    title: 'Scalable Architecture',
    desc: 'We design systems that grow with your business, utilizing cloud-native patterns to ensure long-term sustainability.',
    color: 'red',
    iconBg: 'bg-[#D90429]/10',
    iconText: 'text-[#D90429]',
    borderGlow: 'hover:border-[#D90429]/30'
  }
];

const timelineEvents = [
  {
    year: '2018',
    title: 'Foundation & Vision',
    desc: 'DivoAI is founded in Bengaluru with a clear mission: to deliver premium, high-quality custom software solutions to modern businesses.'
  },
  {
    year: '2020',
    title: 'Expanding Our Horizons',
    desc: 'Grew our engineering team and began partnering with international clients across Europe and North America to build robust web platforms.'
  },
  {
    year: '2022',
    title: 'Enterprise Partnerships',
    desc: 'Successfully delivered our 50th major enterprise project, solidifying our reputation for reliability, speed, and clean code.'
  },
  {
    year: '2024',
    title: 'Full-Service Agency',
    desc: 'Expanded our service offerings to include end-to-end product design, comprehensive UI/UX overhauls, and managed cloud hosting.'
  },
  {
    year: '2026',
    title: 'The Next Chapter',
    desc: 'Evolving our brand and processes to become a globally recognized digital transformation agency, empowering businesses of all sizes.'
  }
];

const leadership = [
  {
    name: 'Kashif',
    role: 'CEO & Founder',
    desc: 'Guiding company strategy, fostering client relationships, and ensuring DivoAI delivers exceptional value on every project.',
    icon: 'fa-user-tie',
    image: '/kashif.jpeg',
    glow: 'border-[#D90429]/20 shadow-[#D90429]/5'
  },
  {
    name: 'Sakshi Patwar',
    role: 'Head of Marketing',
    desc: 'Driving brand growth through innovative marketing strategies, data-driven decision-making, and impactful campaigns while strengthening customer engagement and expanding market reach.',
    icon: 'fa-laptop-code',
    image: '/sakshi.jpeg',
    glow: 'border-[#D90429]/20 shadow-[#D90429]/5'
  },
  {
    name: ' MD Shahbaz Ahmed',
    role: 'Senior Software Developer',
    desc: 'Transforming complex ideas and business requirements into scalable, efficient, and user-focused digital solutions through modern technologies, clean architecture, and exceptional user experiences.',
    icon: 'fa-bezier-curve',
    image: '/shahbaz.jpg',
    glow: 'border-[#D90429]/20 shadow-[#D90429]/5'
  }
  {
    name: 'Abhijeet Kumar',
    role: 'Head of UI/UX & Design',
    desc: 'Translating complex business requirements into intuitive, breathtaking, and user-friendly digital experiences. replace with software developer.',
    icon: 'fa-bezier-curve',
    image: '/shahbaz.jpg',
    glow: 'border-[#D90429]/20 shadow-[#D90429]/5'
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
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            <img src="/logo.png" alt="DivoAI Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 scale-[2.5] md:scale-[3] origin-left group-hover:scale-[2.6] md:group-hover:scale-[3.1]" />
          </Link>

          <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
            <Link to="/" className="nav-link hover:text-white transition">Home</Link>
            <Link to="/services" className="nav-link hover:text-white transition">Services</Link>
            <Link to="/insights" className="nav-link hover:text-white transition">Insights</Link>
            <Link to="/about" className="nav-link text-[#D90429] hover:text-white transition">About</Link>
            <Link to="/contact" className="nav-link hover:text-white transition">Contact</Link>
          </div>

          <Link
            to="/contact"
            className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D90429] to-[#B50321] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#D90429]/20 transition-all hover:scale-[1.03]"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-xl cursor-pointer text-[#D90429] hover:text-[#FF1744] transition" onClick={() => {
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
          <Link to="/about" className="mobile-menu-link group text-[#D90429] font-semibold">
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
              className="block w-full py-3.5 rounded-full bg-gradient-to-r from-[#D90429] to-[#B50321] text-white font-bold text-center text-sm shadow-lg shadow-[#D90429]/10 hover:shadow-[#D90429]/25 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        {/* Softer Glow elements */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#D90429]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FF1744]/5 rounded-full blur-[100px] pointer-events-none" />
        {/* Minimal Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_75%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D90429]/10 border border-[#D90429]/20 text-red-300 text-xs font-semibold tracking-wide mb-6"
              data-aos="fade-down"
            >
              <i className="fas fa-building"></i> About Our Agency
            </span>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Empowering Businesses Through <br />
              <span className="text-[#D90429] font-black">Digital Transformation.</span>
            </h1>
            <p
              className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We design, build, and scale premium software solutions and web platforms for modern enterprises that demand excellence.
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

                {/* Glass Status Chip overlay - simplified */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider">Our Services</span>
                </div>

                {/* Metadata overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
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
                        ? 'w-6 bg-gradient-to-r from-[#D90429] to-[#FF1744]'
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF1744] bg-[#D90429]/10 border border-[#D90429]/20 px-3.5 py-1.5 rounded-full inline-block">
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
                    <i className="fas fa-check-circle text-[#D90429] text-base" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF1744] bg-[#D90429]/10 border border-[#D90429]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              The Values That Drive Us
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              We stand by rigorous technical criteria, extreme quality design, and clear client partnerships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 text-left">
            {values.map((val, i) => (
              <div
                key={val.title}
                className={`abt-value-card p-8 rounded-2xl border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-[#D90429]/20 transition-all duration-300 group ${val.borderGlow}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className={`h-12 w-12 rounded-xl ${val.iconBg} ${val.iconText} flex items-center justify-center text-xl mb-6 transition-transform group-hover:scale-110`}>
                  <i className={`fas ${val.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#D90429] transition">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE TIMELINE SECTION ── */}
      <section className="py-24 bg-[#090d16] relative overflow-hidden">
        {/* Subtle glow behind timeline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#D90429]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="max-w-2xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF1744] bg-[#D90429]/10 border border-[#D90429]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
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
                  <div className="timeline-node absolute left-[15px] sm:left-1/2 top-4 w-4 h-4 rounded-full bg-[#D90429] border-4 border-[#090d16] -translate-x-1/2 z-10 shadow-md shadow-[#D90429]/20" />

                  {/* Content Container */}
                  <div className={`timeline-content w-full sm:w-[45%] text-left bg-slate-900/30 border border-white/5 p-6 rounded-2xl backdrop-blur-sm relative ${isEven ? 'sm:mr-auto pl-8 sm:pl-6' : 'sm:ml-auto pl-8 sm:pl-6'
                    }`}>
                    <span className="text-xs font-black bg-gradient-to-r from-[#D90429] to-[#FF1744] bg-clip-text text-transparent mb-1 block">
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
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF1744] bg-[#D90429]/10 border border-[#D90429]/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Team Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Meet Our Leadership
            </h2>
            <p className="text-slate-400 mt-3 text-sm">
              The experts driving strategy, design, and product delivery at DivoAI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {leadership.map((member, i) => (
              <div
                key={member.name}
                className={`leadership-card p-8 rounded-3xl border bg-slate-900/10 hover:bg-slate-900/30 transition-all duration-300 group flex flex-col justify-between ${member.glow}`}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="flex flex-col items-center">
                  <div className="h-20 w-20 rounded-2xl mx-auto bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 text-3xl mb-6 overflow-hidden transition-transform group-hover:scale-105">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <i className={`fas ${member.icon}`} />
                    )}
                  </div>
                  <h3 className="text-lg font-extrabold text-white leading-tight mb-1">{member.name}</h3>
                  <div className="text-[11px] font-bold text-[#FF1744] tracking-wider uppercase mb-4">{member.role}</div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN US CTA ── */}
      <section className="py-24 bg-[#111111]/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            className="careers-cta-card rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF1744] bg-[#D90429]/10 border border-[#D90429]/20 px-3.5 py-1.5 rounded-full inline-block">
                Start a Strategy Session
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Build Your Digital Future?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                Get in touch with Shahbaz and our core engineering team to map out your custom software solution or high-converting platform.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D90429] to-[#B50321] text-white font-bold text-xs hover:shadow-lg hover:shadow-[#D90429]/20 transition-all hover:scale-[1.03] inline-block cursor-pointer"
                >
                  Consult An Architect <i className="fas fa-arrow-right ml-1.5 text-[9px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="abt-footer bg-[#0A0A0A] text-slate-400 relative z-10 pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Col 1 — Brand */}
            <div className="space-y-5 abt-footer-col-1 text-left">
              <div>
                <img src="/logo.png" alt="DivoAI Logo" className="h-8 md:h-10 w-auto object-contain mb-2 scale-[2.5] md:scale-[3] origin-left" />
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
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#D90429] hover:border-[#D90429]/40 hover:bg-[#D90429]/10 transition-all duration-200"
                  >
                    <i className={`fab fa-${s} text-sm`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Quick Links */}
            <div className="abt-footer-col-2 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-[#D90429] to-[#FF1744] rounded-full" />
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
                    <Link to={to} className="text-sm text-slate-500 hover:text-[#D90429] transition-colors duration-200 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-[10px] bg-gradient-to-r from-[#D90429] to-[#FF1744] bg-clip-text text-transparent group-hover:translate-x-0.5 transition-all duration-200" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Our Services */}
            <div className="abt-footer-col-3 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-[#D90429] to-[#FF1744] rounded-full" />
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
                    <Link to={`/services#${id}`} className="text-sm text-slate-500 hover:text-[#D90429] transition-colors duration-200 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-[10px] bg-gradient-to-r from-[#D90429] to-[#FF1744] bg-clip-text text-transparent group-hover:translate-x-0.5 transition-all duration-200" />
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact Us */}
            <div className="abt-footer-col-4 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-[#D90429] to-[#FF1744] rounded-full" />
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Contact Us</h5>
              </div>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fas fa-map-marker-alt text-xs text-[#D90429]" />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">Bengaluru, India</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-xs text-[#D90429]" />
                  </div>
                  <a href="mailto:hello@divoai.com" className="text-sm text-slate-400 hover:text-[#D90429] transition-colors duration-200">
                    hello@divoai.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#D90429]/10 border border-[#D90429]/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-xs text-[#D90429]" />
                  </div>
                  <a href="tel:+917260912860" className="text-sm text-slate-400 hover:text-[#D90429] transition-colors duration-200">
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
              <a href="#" className="text-slate-400 hover:text-[#D90429] transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-[#D90429] transition-colors duration-200">Privacy Policy</a>
              <span className="text-slate-500">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
