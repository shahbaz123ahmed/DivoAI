import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './InsightsPage.css';

const articles = [
  {
    id: 'ai-devops',
    category: 'Artificial Intelligence',
    categoryBg: 'bg-blue-600',
    title: 'How AI is redefining automated DevOps pipelines',
    date: 'March 12, 2026',
    readTime: '5 min read',
    img: '/images/in1.jpg',
    summary: 'Explore machine learning anomaly identification, auto-healing Kubernetes nodes, and neural infrastructure optimization in modern systems.',
    featured: true,
    fullContent: (
      <div className="modal-article-body">
        <p>DevOps has historically relied on static configuration files, rigid conditional logic, and reactive threshold alert systems. Today, the convergence of deep learning and container telemetry is giving birth to <strong>AIOps</strong> — intelligent infrastructure systems capable of prediction, auto-remediation, and cost optimization.</p>

        <blockquote>
          "By utilizing real-time log parsing models, modern DevOps platforms can identify system anomalies minutes before they manifest as outages."
        </blockquote>

        <h2>1. Anomaly Identification with Log Semantics</h2>
        <p>Traditional metrics trigger when CPU or Memory usage exceeds 90%. But failure modes often begin with silent, semantic variations in system logs. Neural networks trained on sequential logs can identify patterns like connection timeouts increasing by 5%, even if memory is healthy. This provides early warning indicators that allow developers to pre-emptively shard databases or spin up edge nodes.</p>

        <h2>2. Auto-Healing Kubernetes Clusters</h2>
        <p>In modern cloud systems, human operator intervention is too slow. Here is how auto-healing loops operate:</p>
        <ul>
          <li><strong>Detection:</strong> Continuous telemetry loops monitor Pod metrics and API server latency.</li>
          <li><strong>Inference:</strong> A machine learning agent categorizes the state of the node (e.g., memory leak, deadlock).</li>
          <li><strong>Resolution:</strong> The controller triggers automated drain, restart, or rollback procedures.</li>
        </ul>

        <h2>3. Optimizing Infrastructure Configurations</h2>
        <p>Below is a comparison of traditional static configuration versus AI-driven dynamic configuration:</p>

        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Static Configurations</th>
              <th>AI-Driven DevOps</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Resource Allocation</td>
              <td>Fixed bounds (e.g. 2GB Ram)</td>
              <td>Dynamic resizing based on workload</td>
            </tr>
            <tr>
              <td>Incident Response</td>
              <td>Manual intervention from paging</td>
              <td>Self-healing container restarts</td>
            </tr>
            <tr>
              <td>Cost Optimization</td>
              <td>Over-provisioned servers</td>
              <td>Scale-to-zero when demand drops</td>
            </tr>
          </tbody>
        </table>

        <h2>Sample Auto-healing Telemetry Configuration</h2>
        <pre>
          <code>
            {`apiVersion: ai.divo.ai/v1alpha1
kind: TelemetryHealer
metadata:
  name: edge-api-healer
spec:
  targetRef:
    kind: Deployment
    name: edge-gateway
  anomalyThreshold: 0.85
  autoRemediation:
    actions:
      - scaleUp
      - restartPod
    cooldownSeconds: 300`}
          </code>
        </pre>

        <div className="warning-callout">
          <strong>Important Takeaway:</strong> Transitioning to AIOps requires robust structured data logging. Start by centralizing system traces and standardizing telemetry schemas before piping data to inference models.
        </div>
      </div>
    )
  },
  {
    id: 'serverless-edge',
    category: 'Cloud Native',
    categoryBg: 'bg-purple-600',
    title: 'Serverless & Edge: The ultimate scaling playbook',
    date: 'March 5, 2026',
    readTime: '4 min read',
    img: '/images/in2.jpg',
    summary: 'A deep dive into serverless database sharding, edge cache rendering speeds, and cloud bill optimizations for enterprise platforms.',
    featured: false,
    fullContent: (
      <div className="modal-article-body">
        <p>Building high-performance global applications requires a shift from centralized hosting models to distributed compute at the network edge. This playbook reviews edge caching, database sharding, and cold-start optimization strategies.</p>

        <h2>1. Global Rendering and Routing</h2>
        <p>Edge nodes allow you to render React/Next.js pages close to the user. Rather than routing all users back to a central server in Virginia or Dublin, dynamic content is resolved at the nearest Point of Presence (PoP). Latency drops from 200ms to under 15ms globally.</p>

        <blockquote>
          "Compute is cheap, but distance is constrained by the speed of light. Moving logic closer to the user is the only way to achieve instant load speeds."
        </blockquote>

        <h2>2. Handling the Edge Database Bottleneck</h2>
        <p>Computing at the edge is easy, but connecting to a single, database instance defeats the purpose. Modern setups deploy:</p>
        <ol>
          <li>Global database read replicas at major regional hubs.</li>
          <li>Distributed transaction managers implementing optimistic concurrency control.</li>
          <li>Key-value caches at the Edge nodes for rapid configuration checks.</li>
        </ol>

        <h2>3. Optimizing Cloud Bills</h2>
        <p>Using serverless compute means you only pay for active execution. Idle servers cost $0. When traffic spikes, instances spin up dynamically. When traffic drops to zero, compute drops to zero. This scale-to-zero capability cuts infrastructure budgets by 30-50% on average.</p>
      </div>
    )
  },
  {
    id: 'zero-trust',
    category: 'Cybersecurity',
    categoryBg: 'bg-emerald-600',
    title: 'Establishing zero trust in hybrid developer environments',
    date: 'Feb 28, 2026',
    readTime: '6 min read',
    img: '/images/in3.jpg',
    summary: 'How security architectures utilize strict identity authorization, device certificates, and isolated networks to secure remote developers.',
    featured: false,
    fullContent: (
      <div className="modal-article-body">
        <p>As hybrid working patterns become standard, perimeter security is obsolete. Zero-Trust Network Access (ZTNA) operates on a simple principle: <strong>Never Trust, Always Verify</strong>. Every device, user, and session must be authenticated continuously.</p>

        <h2>1. The Architecture of Zero Trust</h2>
        <p>Zero Trust replaces traditional VPNs with micro-perimeters. Developers no longer gain access to the entire private subnet. Instead, access is granted strictly to specific ports on specific target assets, authenticated at the application layer.</p>

        <h2>2. Essential Pillars of ZTNA</h2>
        <ul>
          <li><strong>Identity:</strong> Multi-factor authentication tied to identity provider certificates.</li>
          <li><strong>Device Health:</strong> Continuous verification of endpoint configuration (disk encryption, firewall status, security patches).</li>
          <li><strong>Contextual Authorization:</strong> Denying access if requests originate from anomalous locations or unusual times, even with correct passwords.</li>
        </ul>

        <div className="warning-callout">
          <strong>Security Warning:</strong> Passwords alone are no longer a viable security wall. Integrate hardware security keys (like YubiKeys) and cryptographic device signatures to secure access to repositories and staging build grids.
        </div>
      </div>
    )
  },
  {
    id: 'figma-tokens',
    category: 'Product Design',
    categoryBg: 'bg-pink-600',
    title: 'Designing with tokens: Translating Figma to production code',
    date: 'Feb 15, 2026',
    readTime: '5 min read',
    img: '/images/in5.jpg',
    summary: 'Bridging the design-to-development gap by utilizing dynamic design tokens in Figma and compiling them directly into Tailwind/CSS structures.',
    featured: false,
    fullContent: (
      <div className="modal-article-body">
        <p>Design tokens are the visual atoms of a design system. By defining variables for colors, spacings, borders, and animations, teams can enforce brand consistency across web, iOS, and Android products dynamically.</p>

        <h2>1. The Token Pipeline</h2>
        <p>Instead of manually copying hex codes from design specs, the modern workflow compiles design attributes directly:</p>
        <ol>
          <li>Designer edits color variables in the Figma Design Library.</li>
          <li>Figma API triggers a GitHub Action to fetch variables.</li>
          <li>Token Transformer compiles design JSON into CSS variables and Tailwind theme keys.</li>
          <li>Dev server auto-updates, publishing brand adjustments immediately.</li>
        </ol>

        <h2>2. Benefits of Design Tokens</h2>
        <ul>
          <li>Eliminates design deviation during development handoff.</li>
          <li>Enables multi-brand white labeling by simply loading a different token payload.</li>
          <li>Supports seamless dark mode toggles at the root stylesheet level.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'saas-billing',
    category: 'SaaS Strategy',
    categoryBg: 'bg-indigo-600',
    title: 'Usage-based SaaS billing: Architecture and trade-offs',
    date: 'Feb 5, 2026',
    readTime: '8 min read',
    img: '/images/in4.jpg',
    summary: 'Architectural blueprints for high-throughput usage tracking, Stripe billing integrations, and customer quota enforcement systems.',
    featured: false,
    fullContent: (
      <div className="modal-article-body">
        <p>Usage-based billing (or pay-as-you-go) aligns software costs directly with customer value. However, tracking millions of user actions in real-time, matching them to quotas, and sync-billing Stripe requires absolute transaction precision.</p>

        <h2>1. High-throughput Metering Engine</h2>
        <p>A resilient billing engine must handle event streams without impacting core latency. Events are piped to a distributed queue (e.g. Kafka or Redis), aggregated into hourly buckets, and stored in a time-series database. This ensures high availability and shields database layers from raw payload spikes.</p>

        <h2>2. Quota Enforcement Logic</h2>
        <p>To avoid revenue loss, system rules must enforce quotas instantaneously. Redis memory tables store current usages, allowing API gateways to perform latency-free limits checks before resolving request payloads.</p>

        <table>
          <thead>
            <tr>
              <th>Metric Type</th>
              <th>Storage Layer</th>
              <th>Update Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Current Session Limits</td>
              <td>In-Memory Redis Cache</td>
              <td>Sub-millisecond (On every API call)</td>
            </tr>
            <tr>
              <td>Historical Aggregations</td>
              <td>Time-Series Database</td>
              <td>Hourly intervals</td>
            </tr>
            <tr>
              <td>Invoicing and Transactions</td>
              <td>Relational DB + Stripe Sync</td>
              <td>Daily / Monthly billing cycles</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 'predictive-telemetry',
    category: 'Cloud Native',
    categoryBg: 'bg-cyan-600',
    title: 'Predictive telemetry: Shielding platforms from downtime',
    date: 'Jan 22, 2026',
    readTime: '6 min read',
    img: '/images/in6.jpg',
    summary: 'Using time-series logs and machine learning models to detect performance bottlenecks and intercept faults before they cause outages.',
    featured: false,
    fullContent: (
      <div className="modal-article-body">
        <p>Predictive telemetry uses statistical forecasting models to predict platform failures before they happen. Rather than waiting for a server crash, models analyze system trends to preemptively intercept issues.</p>

        <h2>1. Early Warning Signs of System Failures</h2>
        <p>Most outages leave telemetry traces hours before the actual crash. These traces include database connection lock escalations, subtle disk I/O latency increases, or growing thread queues. Forecasters map these parameters and score server state continuously.</p>

        <h2>2. Automated Defenses</h2>
        <ul>
          <li><strong>Pre-emptive Scaling:</strong> Spin up additional replicas before load tests or heavy hours.</li>
          <li><strong>Circuit Breaking:</strong> Automatically isolate failing database clusters and route read queries to caches.</li>
          <li><strong>Automated Rollover:</strong> Roll back failing Canary releases if error rates rise in the first minutes of deployment.</li>
        </ul>
      </div>
    )
  }
];

export default function InsightsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuClickCount, setMobileMenuClickCount] = useState(0);

  const location = useLocation();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const categories = ['All', 'Artificial Intelligence', 'Cloud Native', 'Cybersecurity', 'Product Design', 'SaaS Strategy'];

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

      // Footer Animations
      window.gsap.fromTo('.ins-footer-col-1',
        { opacity: 0, x: -120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.1, ease: 'power4.out',
          scrollTrigger: { trigger: '.ins-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.ins-footer-col-2',
        { opacity: 0, y: -100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.3, ease: 'power4.out',
          scrollTrigger: { trigger: '.ins-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.ins-footer-col-3',
        { opacity: 0, y: 100 },
        {
          opacity: 1, y: 0, duration: 2.4, delay: 0.5, ease: 'power4.out',
          scrollTrigger: { trigger: '.ins-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.ins-footer-col-4',
        { opacity: 0, x: 120 },
        {
          opacity: 1, x: 0, duration: 2.4, delay: 0.7, ease: 'power4.out',
          scrollTrigger: { trigger: '.ins-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
      window.gsap.fromTo('.ins-footer-bottom-bar',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 2.8, delay: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.ins-footer', start: 'top 95%', toggleActions: 'restart reverse restart reverse' }
        }
      );
    }

    // Navbar scroll listener
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

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setNewsletterStatus('submitting');
    setTimeout(() => {
      setNewsletterStatus('success');
      setEmail('');
    }, 1200);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(a => a.featured);

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
                <linearGradient id="divoai-logo-grad-ins" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path 
                d="M26 80 L50 28 L74 80" 
                stroke="url(#divoai-logo-grad-ins)" 
                strokeWidth="15" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="50" cy="74" r="8" fill="url(#divoai-logo-grad-ins)" />
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
            <Link to="/insights" className="nav-link text-blue-400 hover:text-white transition">Insights</Link>
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
          <Link to="/services" className="mobile-menu-link group">
            <span>Services</span>
            <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200"></i>
          </Link>
          <Link to="/insights" className="mobile-menu-link group text-blue-400 font-semibold">
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

      {/* ── HERO SECTION ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Glow elements */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_75%,transparent_100%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide mb-6"
              data-aos="fade-down"
            >
              <i className="fas fa-microchip animate-pulse"></i> DivoAI Tech Insights
            </span>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Stay Ahead of the <br />
              <span className="gradient-text font-black">Digital Curve.</span>
            </h1>
            <p
              className="text-slate-300 text-lg max-w-xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Deep tech guides, scaling playbooks, and systems architecture insights written by DivoAI IT Solutions architects.
            </p>
          </div>

          {/* Featured Article Banner */}
          {featuredArticle && (
            <div
              className="max-w-5xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group mb-20"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="md:w-1/2 overflow-hidden relative min-h-[300px]">
                <img
                  src={featuredArticle.img}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  Featured Article
                </span>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] text-white ${featuredArticle.categoryBg}`}>{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                </div>
                <button
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="mt-8 text-sm font-bold text-blue-400 flex items-center gap-2 group/btn cursor-pointer w-fit"
                >
                  Read Featured Article
                  <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SEARCH & FILTER SECTION ── */}
      <section className="py-12 border-t border-b border-white/5 bg-[#090d16]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="text"
                placeholder="Search architecture logs, categories, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0d1320] border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <i className="fas fa-times" />
                </button>
              )}
            </div>

            {/* Category Filter Scroll */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1.5 -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-pill text-xs font-semibold px-4 py-2.5 rounded-full border border-white/10 bg-[#0d1320] text-slate-400 hover:text-white hover:border-white/20 whitespace-nowrap cursor-pointer ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ARTICLES GRID ── */}
      <section className="py-24 bg-[#0a0c10]/40">
        <div className="container mx-auto px-6 max-w-6xl">

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/5 rounded-3xl bg-slate-900/10">
              <i className="fas fa-search-minus text-4xl text-slate-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-300">No Articles Found</h3>
              <p className="text-slate-500 text-sm mt-1">Try tweaking your search term or selecting another category.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-6 text-xs font-bold text-blue-400 hover:underline"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <div className="insights-grid">
              {filteredArticles.map((article, i) => (
                <div
                  key={article.id}
                  className="insight-card bg-slate-900/20 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between group"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div>
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className={`absolute top-4 left-4 text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md ${article.categoryBg}`}>
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6 space-y-3 text-left">
                      <div className="flex gap-2 items-center text-[10px] text-slate-400 font-semibold">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2 text-left">
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="text-xs font-bold text-blue-400 hover:text-white flex items-center gap-1 group/btn cursor-pointer"
                    >
                      Read Article
                      <i className="fas fa-arrow-right text-[9px] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTAs ── */}
      <section className="py-24 bg-[#0a0c10]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div
            className="newsletter-card rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block">
                Weekly Tech Brief
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Subscribe to Architecture Logs
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                No spam. Only high-end scalability blueprints, systems optimization metrics, and engineering notes straight to your inbox.
              </p>

              {newsletterStatus === 'success' ? (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold rounded-2xl animate-fade-in-up">
                  <i className="fas fa-check-circle mr-2" /> Subscription Active! Welcome aboard, Architect.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-3 pt-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your system architect email..."
                    className="w-full bg-[#0d1320]/80 border border-white/10 rounded-full px-5 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/40 transition-colors duration-300"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'submitting'}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex-shrink-0"
                  >
                    {newsletterStatus === 'submitting' ? (
                      <>Syncing... <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                    ) : (
                      <>Subscribe <i className="fas fa-paper-plane text-[9px]" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ins-footer bg-[#07090e] text-slate-400 relative z-10 pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Col 1 — Brand */}
            <div className="space-y-5 ins-footer-col-1 text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {/* SVG Logo Icon */}
                  <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="divoai-ins-footer-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M26 80 L50 28 L74 80" 
                      stroke="url(#divoai-ins-footer-gradient)" 
                      strokeWidth="15" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <circle cx="50" cy="74" r="8" fill="url(#divoai-ins-footer-gradient)" />
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
            <div className="ins-footer-col-2 text-left">
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
            <div className="ins-footer-col-3 text-left">
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
            <div className="ins-footer-col-4 text-left">
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
          <div className="ins-footer-bottom-bar border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2026 <span className="text-slate-200 font-semibold">DivoAI IT Solutions</span> — Building Digital Products That Scale. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
              <span className="text-slate-500">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── READ ARTICLE OVERLAY MODAL ── */}
      {activeArticle && (
        <div
          className="read-modal-overlay active"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="read-modal-content p-6 md:p-10 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors duration-200 text-lg p-2 focus:outline-none cursor-pointer"
            >
              <i className="fas fa-times" />
            </button>

            {/* Header info */}
            <div className="space-y-4 pb-6 border-b border-white/5">
              <span className={`inline-block text-white text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md ${activeArticle.categoryBg}`}>
                {activeArticle.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                {activeArticle.title}
              </h1>
              <div className="flex gap-3 text-xs text-slate-400 font-medium">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {/* Detailed Body */}
            <div className="py-6">
              {activeArticle.fullContent}
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-6 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition cursor-pointer"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
