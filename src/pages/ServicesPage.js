import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './ServicesPage.css';

const services = [
  {
    id: 'web-development',
    icon: 'fa-laptop-code',
    color: 'blue',
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-600',
    accentFrom: 'from-blue-500',
    accentTo: 'to-indigo-600',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    borderColor: 'border-blue-100',
    label: 'Web Development',
    title: 'Build High-Converting Websites',
    tagline: 'From landing pages to enterprise portals — we craft every pixel with purpose.',
    description:
      'We build stunning, lightning-fast, and SEO-optimized web experiences designed to engage visitors, drive conversions, and establish a premium brand presence. Every project is crafted with performance benchmarks, accessibility standards, and cross-device excellence in mind.',
    features: [
      'Custom design system & brand identity alignment',
      'React, Next.js, and Vue.js frontends',
      'Core Web Vitals optimization (LCP, CLS, FID)',
      'SEO-first architecture with structured data',
      'Headless CMS integration (Contentful, Sanity)',
      'Progressive Web App (PWA) capabilities',
      'WCAG 2.1 accessibility compliance',
      'Analytics & conversion tracking setup',
    ],
    deliverables: ['Responsive Web App', 'Performance Audit', 'SEO Report', 'Source Code'],
    timeline: '4–8 weeks',
    ideal: 'Startups, SMEs, Enterprises',
  },
  {
    id: 'custom-software',
    icon: 'fa-code',
    color: 'purple',
    iconBg: 'bg-purple-50',
    iconText: 'text-purple-600',
    accentFrom: 'from-purple-500',
    accentTo: 'to-pink-600',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    borderColor: 'border-purple-100',
    label: 'Custom Software',
    title: 'Develop Powerful Custom Software',
    tagline: 'Bespoke solutions engineered precisely around your operational DNA.',
    description:
      'Tailored digital solutions built from the ground up to solve your unique operational challenges, automate key workflows, and scale alongside your business. We combine deep technical expertise with strategic thinking to deliver software that becomes your competitive advantage.',
    features: [
      'Microservices & monolith architecture design',
      'RESTful & GraphQL API development',
      'PostgreSQL, MongoDB, Redis database design',
      'Background job queues & event-driven systems',
      'Multi-environment CI/CD pipelines',
      'Unit, integration & E2E test coverage',
      'Role-based access control (RBAC)',
      'Audit logging & compliance reporting',
    ],
    deliverables: ['Production Codebase', 'API Documentation', 'Deployment Guide', 'Admin Panel'],
    timeline: '8–20 weeks',
    ideal: 'SaaS Founders, Enterprises, Agencies',
  },
  {
    id: 'saas-products',
    icon: 'fa-rocket',
    color: 'cyan',
    iconBg: 'bg-cyan-50',
    iconText: 'text-cyan-600',
    accentFrom: 'from-cyan-500',
    accentTo: 'to-blue-600',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-cyan-700',
    borderColor: 'border-cyan-100',
    label: 'SaaS Products',
    title: 'Launch Scalable SaaS Platforms',
    tagline: 'Turn your idea into a revenue-generating software product.',
    description:
      'End-to-end SaaS product engineering — from architecture to market launch. We design secure multi-tenant platforms with flexible subscription billing, robust API frameworks, and usage analytics dashboards that grow alongside your customer base.',
    features: [
      'Multi-tenant SaaS architecture',
      'Stripe / Razorpay subscription billing',
      'Usage metering & quota enforcement',
      'OAuth 2.0 / SSO integration',
      'Feature flagging & A/B testing',
      'In-app onboarding & product tours',
      'Customer analytics & cohort dashboards',
      'White-labeling & partner portals',
    ],
    deliverables: ['Live SaaS Platform', 'Billing Integration', 'Admin Dashboard', 'API Docs'],
    timeline: '12–24 weeks',
    ideal: 'Founders, Product Teams, VCs',
  },
  {
    id: 'ui-ux-design',
    icon: 'fa-bezier-curve',
    color: 'indigo',
    iconBg: 'bg-indigo-50',
    iconText: 'text-indigo-600',
    accentFrom: 'from-indigo-500',
    accentTo: 'to-purple-600',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700',
    borderColor: 'border-indigo-100',
    label: 'UI/UX Design',
    title: 'Design Experiences Users Love',
    tagline: 'Where research meets craft — interfaces that feel inevitable.',
    description:
      'User-centric UI/UX design that transforms complex workflows into clean, intuitive journeys. We conduct deep user research, build clickable prototypes, and iterate rapidly to ensure every design decision is grounded in real user behavior and business goals.',
    features: [
      'User research & persona development',
      'Information architecture & user flows',
      'Wireframing & low-fidelity prototyping',
      'High-fidelity Figma design systems',
      'Interactive clickable prototypes',
      'Usability testing & heatmap analysis',
      'Motion design & micro-interaction specs',
      'Design-to-dev handoff (Zeplin / Figma)',
    ],
    deliverables: ['Design System', 'Figma Prototype', 'Usability Report', 'Component Library'],
    timeline: '3–8 weeks',
    ideal: 'Product Teams, Founders, Enterprises',
  },
  {
    id: 'automation',
    icon: 'fa-cogs',
    color: 'pink',
    iconBg: 'bg-pink-50',
    iconText: 'text-pink-600',
    accentFrom: 'from-pink-500',
    accentTo: 'to-rose-600',
    badgeBg: 'bg-pink-50',
    badgeText: 'text-pink-700',
    borderColor: 'border-pink-100',
    label: 'Automation',
    title: 'Automate & Optimize Your Business',
    tagline: 'Replace repetitive work with intelligent, self-running systems.',
    description:
      'Eliminate manual work by integrating smart APIs, cloud-based workflows, and automated databases that save hours of team labor daily. From CRM automation to data pipeline orchestration, we make your business run faster and smarter.',
    features: [
      'Zapier, Make (Integromat) & n8n workflows',
      'CRM & ERP system integrations',
      'Email & notification automation sequences',
      'ETL data pipelines & warehouse sync',
      'AI-powered document processing',
      'Webhook orchestration & event sourcing',
      'Scheduled job scheduling & monitoring',
      'Reporting & KPI dashboard automation',
    ],
    deliverables: ['Automation Blueprints', 'Live Workflows', 'Monitoring Dashboard', 'Runbooks'],
    timeline: '2–6 weeks',
    ideal: 'Operations Teams, SMEs, Scale-ups',
  },
  {
    id: 'it-support',
    icon: 'fa-headset',
    color: 'emerald',
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
    accentFrom: 'from-emerald-500',
    accentTo: 'to-teal-600',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    borderColor: 'border-emerald-100',
    label: 'IT Support',
    title: 'Complete IT Solutions & Support',
    tagline: 'Your infrastructure, always on. Always secure.',
    description:
      'Proactive server maintenance, security auditing, daily backups, and rapid-response technical troubleshooting to keep your operations running flawlessly. Our 24/7 managed support team acts as an extension of your internal engineering team.',
    features: [
      '24/7 infrastructure monitoring & alerting',
      'Security vulnerability assessments',
      'Automated daily backup management',
      'SSL certificate & domain management',
      'Cloud cost optimization reviews',
      'Incident response & root cause analysis',
      'Patch management & OS hardening',
      'Disaster recovery planning & testing',
    ],
    deliverables: ['Monthly Reports', 'Security Audit', 'Runbooks', 'SLA Agreement'],
    timeline: 'Ongoing retainer',
    ideal: 'Businesses, Agencies, Enterprises',
  },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We deep-dive into your goals, constraints, and technical landscape to shape the perfect strategy.' },
  { step: '02', title: 'Architecture & Design', desc: 'Our architects map out the system design, tech stack, and UX blueprint before a single line of code.' },
  { step: '03', title: 'Agile Development', desc: 'Bi-weekly sprints with live demos, code reviews, and continuous integration pipelines.' },
  { step: '04', title: 'QA & Testing', desc: 'Multi-layer testing — unit, integration, performance, and user acceptance — before any launch.' },
  { step: '05', title: 'Launch & Deploy', desc: 'Zero-downtime deployments with monitoring, rollback capability, and go-live support.' },
  { step: '06', title: 'Scale & Support', desc: 'Ongoing optimization, feature iterations, and 24/7 support as your product grows.' },
];

const techStack = [
  { label: 'React', icon: 'fa-react', color: 'text-cyan-500' },
  { label: 'Next.js', icon: 'fa-n', color: 'text-slate-900' },
  { label: 'Node.js', icon: 'fa-node-js', color: 'text-green-600' },
  { label: 'Python', icon: 'fa-python', color: 'text-yellow-500' },
  { label: 'AWS', icon: 'fa-aws', color: 'text-orange-500' },
  { label: 'Docker', icon: 'fa-docker', color: 'text-blue-500' },
  { label: 'GitHub', icon: 'fa-github', color: 'text-slate-800' },
  { label: 'Figma', icon: 'fa-figma', color: 'text-pink-500' },
  { label: 'Vue.js', icon: 'fa-vuejs', color: 'text-emerald-500' },
  { label: 'Git', icon: 'fa-git-alt', color: 'text-orange-600' },
  { label: 'JavaScript', icon: 'fa-js', color: 'text-yellow-400' },
  { label: 'Stripe', icon: 'fa-stripe', color: 'text-indigo-600' },
  { label: 'Cloudflare', icon: 'fa-cloudflare', color: 'text-orange-500' },
  { label: 'Shopify', icon: 'fa-shopify', color: 'text-green-500' },
  { label: 'WordPress', icon: 'fa-wordpress', color: 'text-sky-600' },
  { label: 'Databases', icon: 'fa-database', color: 'text-slate-600' },
];

const colorMap = {
  blue:    { ring: 'ring-blue-200',    dot: 'bg-blue-500',    badge: 'bg-blue-600',    pill: 'bg-blue-50 text-blue-700 border-blue-100'    },
  purple:  { ring: 'ring-purple-200',  dot: 'bg-purple-500',  badge: 'bg-purple-600',  pill: 'bg-purple-50 text-purple-700 border-purple-100'  },
  cyan:    { ring: 'ring-cyan-200',    dot: 'bg-cyan-500',    badge: 'bg-cyan-600',    pill: 'bg-cyan-50 text-cyan-700 border-cyan-100'    },
  indigo:  { ring: 'ring-indigo-200',  dot: 'bg-indigo-500',  badge: 'bg-indigo-600',  pill: 'bg-indigo-50 text-indigo-700 border-indigo-100'  },
  pink:    { ring: 'ring-pink-200',    dot: 'bg-pink-500',    badge: 'bg-pink-600',    pill: 'bg-pink-50 text-pink-700 border-pink-100'    },
  emerald: { ring: 'ring-emerald-200', dot: 'bg-emerald-500', badge: 'bg-emerald-600', pill: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClickCount, setMobileMenuClickCount] = useState(0);

  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Scroll to top instantly
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize/refresh AOS
    if (window.AOS) {
      window.AOS.init({ duration: 800, once: false, mirror: true, offset: 80 });
      window.AOS.refresh();
    }

    // Register GSAP ScrollTrigger and run animations
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Col 1 — slides in from the LEFT
      window.gsap.fromTo('.svc-footer-col-1',
        { opacity: 0, x: -120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.1, ease: 'power4.out',
          scrollTrigger: { trigger: '.svc-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      // Col 2 — drops in from the TOP
      window.gsap.fromTo('.svc-footer-col-2',
        { opacity: 0, y: -100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.3, ease: 'power4.out',
          scrollTrigger: { trigger: '.svc-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      // Col 3 — rises in from the BOTTOM
      window.gsap.fromTo('.svc-footer-col-3',
        { opacity: 0, y: 100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.5, ease: 'power4.out',
          scrollTrigger: { trigger: '.svc-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      // Col 4 — slides in from the RIGHT
      window.gsap.fromTo('.svc-footer-col-4',
        { opacity: 0, x: 120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.7, ease: 'power4.out',
          scrollTrigger: { trigger: '.svc-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      // Bottom bar — fades up
      window.gsap.fromTo('.svc-footer-bottom-bar',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 2.8, delay: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.svc-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
    }

    // Navbar scroll
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
                <linearGradient id="divoai-logo-grad-svc" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path 
                d="M26 80 L50 28 L74 80" 
                stroke="url(#divoai-logo-grad-svc)" 
                strokeWidth="15" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="50" cy="74" r="8" fill="url(#divoai-logo-grad-svc)" />
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
            <Link to="/services" className="nav-link text-blue-400 hover:text-white transition">Services</Link>
            <Link to="/insights" className="nav-link hover:text-white transition">Insights</Link>
            <Link to="/about" className="nav-link hover:text-white transition">About</Link>
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
          <Link to="/services" className="mobile-menu-link group text-blue-400 font-semibold">
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

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide mb-6"
            data-aos="fade-down"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            6 Core Service Areas · Full-Stack Delivery
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything your business{' '}
            <br className="hidden sm:inline" />
            <span className="gradient-text font-black">needs to win online.</span>
          </h1>

          <p
            className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From pixel-perfect websites to mission-critical SaaS platforms — DivoAI delivers
            end-to-end digital solutions engineered for scale, performance, and growth.
          </p>

          <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
            <a
              href="#services-grid"
              className="btn-primary px-8 py-4 rounded-full font-bold text-white flex items-center gap-2 hover:scale-[1.02] transition"
            >
              Explore Services <i className="fas fa-arrow-down text-xs" />
            </a>
            <Link
              to="/contact"
              className="btn-secondary-dark px-8 py-4 rounded-full font-semibold text-white flex items-center gap-2 hover:scale-[1.02] transition"
            >
              <i className="fas fa-comments text-xs text-blue-400" /> Free Consultation
            </Link>
          </div>

          {/* Stat strip */}
          <div
            className="flex flex-wrap justify-center gap-8 mt-16 pt-10 border-t border-white/5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {[
              { val: '150+', label: 'Projects Delivered' },
              { val: '99.9%', label: 'Uptime SLA' },
              { val: '24/7', label: 'Support Coverage' },
              { val: '6+', label: 'Years of Expertise' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold gradient-text">{val}</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE QUICK-NAV PILLS ── */}
      <div className="bg-[#0d1120] border-y border-white/5 py-5 sticky top-[72px] z-40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-nowrap gap-3 overflow-x-auto no-scrollbar pb-1">
            {services.map((s) => {
              const c = colorMap[s.color];
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold whitespace-nowrap transition-all duration-200 hover:scale-[1.03] ${c.pill}`}
                >
                  <i className={`fas ${s.icon} text-[11px]`} />
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── DETAILED SERVICE SECTIONS ── */}
      <div id="services-grid" className="bg-white">
        {services.map((service, index) => {
          const c = colorMap[service.color];
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 border-b border-slate-100 relative overflow-hidden ${isEven ? 'bg-white' : 'bg-[#F8FAFC]'}`}
            >
              {/* Accent blob */}
              <div
                className={`absolute -top-32 ${isEven ? '-right-32' : '-left-32'} w-96 h-96 rounded-full blur-[100px] opacity-[0.06] bg-gradient-to-br ${service.accentFrom} ${service.accentTo} pointer-events-none`}
              />

              <div className="container mx-auto px-6 relative z-10">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                  {/* Content Column */}
                  <div
                    className={isEven ? 'order-1' : 'order-1 lg:order-2'}
                    data-aos={isEven ? 'fade-right' : 'fade-left'}
                  >
                    {/* Label */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`h-12 w-12 rounded-2xl ${service.iconBg} flex items-center justify-center ${service.iconText} text-xl service-icon-container`}>
                        <i className={`fas ${service.icon}`} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${c.pill}`}>
                        {service.label}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
                      {service.title}
                    </h2>
                    <p className={`text-base font-semibold mb-4 bg-gradient-to-r ${service.accentFrom} ${service.accentTo} bg-clip-text text-transparent`}>
                      {service.tagline}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-8 text-base">
                      {service.description}
                    </p>

                    {/* Features grid */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <div className={`mt-1 h-5 w-5 rounded-full ${service.iconBg} flex items-center justify-center ${service.iconText} flex-shrink-0`}>
                            <i className="fas fa-check text-[9px]" />
                          </div>
                          <span className="text-slate-700 text-sm leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Meta pills */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-500">
                        <i className="fas fa-clock text-slate-400 text-xs" />
                        <span className="font-semibold text-slate-700">{service.timeline}</span>
                        <span className="text-slate-400">timeline</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <i className="fas fa-users text-slate-400 text-xs" />
                        <span className="text-slate-600">{service.ideal}</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Column */}
                  <div
                    className={isEven ? 'order-2' : 'order-2 lg:order-1'}
                    data-aos={isEven ? 'fade-left' : 'fade-right'}
                    data-aos-delay="100"
                  >
                    <div className={`rounded-3xl p-8 border ${service.borderColor} bg-gradient-to-br from-white to-slate-50 shadow-xl relative overflow-hidden`}>
                      {/* Header */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentFrom} ${service.accentTo}`} />

                      <div className="mb-6">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Deliverables</div>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((d) => (
                            <span
                              key={d}
                              className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${c.pill}`}
                            >
                              <i className="fas fa-check mr-1.5 text-[9px]" />{d}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Feature preview list */}
                      <div className="space-y-3">
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">What's Included</div>
                        {service.features.slice(0, 5).map((f, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 group"
                          >
                            <div className={`h-7 w-7 rounded-lg ${service.iconBg} ${service.iconText} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition`}>
                              <i className={`fas ${service.icon} text-[10px]`} />
                            </div>
                            <span className="text-slate-700 text-sm font-medium">{f}</span>
                          </div>
                        ))}
                        <div className="text-center pt-2">
                          <span className="text-xs text-slate-400 font-medium">+{service.features.length - 5} more included</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <Link
                          to="/contact"
                          className={`w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:scale-[1.02] bg-gradient-to-r ${service.accentFrom} ${service.accentTo} shadow-lg`}
                        >
                          Start This Project <i className="fas fa-arrow-right text-xs" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── PROCESS SECTION ── */}
      <section className="py-28 bg-[#0B0F19] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              How we turn your <br />
              <span className="gradient-text">idea into reality</span>
            </h2>
            <p className="text-slate-400 mt-4 text-lg">
              A proven 6-stage delivery framework built for speed, quality, and zero surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <div
                key={step.step}
                className="svc-process-card p-7 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-5xl font-black bg-gradient-to-r from-blue-500/20 to-purple-500/20 bg-clip-text text-transparent mb-4 leading-none">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Built with best-in-class tools
            </h2>
          </div>

          {/* Tech Stack Single Row Infinite Marquee with Dynamic Zig-zag Bobbing */}
          <div className="svc-marquee-container" data-aos="fade-up" data-aos-delay="100">
            <div className="svc-marquee-track">
              {/* First loop of all 16 items */}
              {techStack.map((tech, i) => (
                <div
                  key={`${tech.label}-single-1`}
                  className={`flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm w-24 h-24 flex-shrink-0 svc-marquee-card ${i % 2 === 0 ? 'svc-zigzag-up' : 'svc-zigzag-down'}`}
                >
                  <i className={`${tech.icon === 'fa-n' || tech.icon === 'fa-database' ? 'fas' : 'fab'} ${tech.icon} text-2xl ${tech.color}`} />
                  <span className="text-[10px] font-bold text-slate-600">{tech.label}</span>
                </div>
              ))}
              {/* Second identical loop of all 16 items for seamless infinite scroll */}
              {techStack.map((tech, i) => (
                <div
                  key={`${tech.label}-single-2`}
                  className={`flex flex-col items-center justify-center gap-2 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm w-24 h-24 flex-shrink-0 svc-marquee-card ${i % 2 === 0 ? 'svc-zigzag-up' : 'svc-zigzag-down'}`}
                >
                  <i className={`${tech.icon === 'fa-n' || tech.icon === 'fa-database' ? 'fas' : 'fab'} ${tech.icon} text-2xl ${tech.color}`} />
                  <span className="text-[10px] font-bold text-slate-600">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
        <div className="container mx-auto px-6 relative z-10">
          <div
            className="max-w-4xl mx-auto bg-[#0B0F19] rounded-3xl p-12 md:p-16 border border-white/10 shadow-2xl text-center"
            data-aos="zoom-in"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-6">
              Ready to Build?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Let's turn your vision <br />
              <span className="gradient-text">into a live product.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Book a free strategy call with our engineers. No fluff — just a clear plan, honest timeline, and transparent pricing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary px-10 py-4 rounded-full font-bold text-white flex items-center gap-2 hover:scale-[1.02] transition text-base"
              >
                Start a Project <i className="fas fa-arrow-right text-sm" />
              </Link>
              <Link
                to="/"
                className="btn-secondary-dark px-10 py-4 rounded-full font-semibold text-white flex items-center gap-2 hover:scale-[1.02] transition text-base"
              >
                <i className="fas fa-home text-sm text-blue-400" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="svc-footer bg-[#07090e] text-slate-400 relative z-10 pt-16 pb-8">
        <div className="container mx-auto px-6">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Col 1 — Brand */}
            <div className="space-y-5 svc-footer-col-1">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* SVG Logo Icon */}
                  <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="divoai-svc-footer-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M26 80 L50 28 L74 80" 
                      stroke="url(#divoai-svc-footer-gradient)" 
                      strokeWidth="15" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <circle cx="50" cy="74" r="8" fill="url(#divoai-svc-footer-gradient)" />
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
                DivoAI IT Solutions delivers modern websites, powerful software tools, and intelligent IT systems tailored for today's businesses. Every solution we create is designed to be fast, secure, scalable, and user-focused.
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
            <div className="svc-footer-col-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Quick Links</h5>
              </div>
              <ul className="space-y-3.5">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About Us', to: '/about' },
                  { label: 'Our Services', to: '/services' },
                  { label: 'Insights & Blog', to: '/insights' },
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
            <div className="svc-footer-col-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-white">Our Services</h5>
              </div>
              <ul className="space-y-3.5">
                {[
                  { label: 'Web Development', id: 'web-development' },
                  { label: 'Custom Software', id: 'custom-software' },
                  { label: 'SaaS Solutions', id: 'saas-products' },
                  { label: 'Automation', id: 'automation' },
                  { label: 'IT Support', id: 'it-support' },
                ].map(({ label, id }) => (
                  <li key={label}>
                    <a href={`#${id}`} className="text-sm text-slate-500 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-[10px] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:translate-x-0.5 transition-all duration-200"></i>
                      <span className="footer-link-text">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact Us */}
            <div className="svc-footer-col-4">
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
                  <a href="mailto:hello@divoai.com" className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200">
                    hello@divoai.com
                  </a>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-xs text-blue-400"></i>
                  </div>
                  <a href="tel:+917260912860" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200">
                    +91 72609 12860
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="svc-footer-bottom-bar border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
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
