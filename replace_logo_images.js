const fs = require('fs');

const files = [
    'src/pages/ContactPage.js',
    'src/pages/AboutPage.js',
    'src/pages/ServicesPage.js',
    'src/pages/InsightsPage.js'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Extract a unique identifier from the filename for the linear gradient ID
    const uniqueId = file.match(/\/([^\/]+)\.js$/)[1].substring(0, 3).toLowerCase();
    
    // Navbar Replacement
    const navReplacement = `            {/* SVG Logo Icon */}
            <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="divoai-logo-grad-\${uniqueId}" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path 
                d="M26 80 L50 28 L74 80" 
                stroke="url(#divoai-logo-grad-\${uniqueId})" 
                strokeWidth="15" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="50" cy="74" r="8" fill="url(#divoai-logo-grad-\${uniqueId})" />
            </svg>
            
            {/* Brand Text */}
            <div className="logo-text text-2xl font-extrabold tracking-tight transition group-hover:opacity-90 flex items-center text-white">
              <span>Divo</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">AI</span>
            </div>
            
            {/* Divider and Subtitle */}
            <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full group-hover:scale-y-110 transition duration-300" />
            <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase hidden sm:inline">IT Solutions</span>`;

    content = content.replace(/<img src="\/divoailogo\.jpeg" alt="DivoAI Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" \/>/, navReplacement);

    // Footer Replacement
    const footerReplacement = `                  {/* SVG Logo Icon */}
                  <svg viewBox="0 0 100 100" className="w-6 h-6 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="divoai-footer-gradient-\${uniqueId}" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M26 80 L50 28 L74 80" 
                      stroke="url(#divoai-footer-gradient-\${uniqueId})" 
                      strokeWidth="15" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                    <circle cx="50" cy="74" r="8" fill="url(#divoai-footer-gradient-\${uniqueId})" />
                  </svg>
                  {/* Brand Text */}
                  <div className="text-2xl font-black transition flex items-center text-white tracking-tight">
                    <span>Divo</span>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ml-0.5">AI</span>
                  </div>
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />`;
                  
    content = content.replace(/<img src="\/divoailogo\.jpeg" alt="DivoAI Logo" className="h-8 md:h-10 w-auto object-contain mb-2" \/>/, footerReplacement);

    fs.writeFileSync(file, content);
});
console.log('Images replaced with SVG text logos successfully!');
