const fs = require('fs');

const files = [
    'src/components/Navbar.js',
    'src/App.js',
    'src/pages/ContactPage.js',
    'src/pages/AboutPage.js',
    'src/pages/ServicesPage.js',
    'src/pages/InsightsPage.js'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Pattern for the Navbar logo blocks
    // We match from {/* SVG Logo Icon */} until the end of the "IT Solutions" span
    const navRegex1 = /\{\/\*\s*SVG Logo Icon\s*\*\/\}(.|\n)*?<span className="text-\[10px\] font-semibold tracking-widest text-slate-400 uppercase hidden sm:inline">IT Solutions<\/span>/gm;
    const navRegex2 = /\{\/\*\s*SVG Logo Icon\s*\*\/\}(.|\n)*?<span className="text-xs font-light tracking-wider text-gray-400">IT SOLUTIONS<\/span>/gm;
    const navRegex3 = /\{\/\*\s*SVG Logo Icon\s*\*\/\}(.|\n)*?<span className="text-\[10px\] font-semibold tracking-widest text-slate-500 uppercase">IT Solutions<\/span>/gm; // Footer subtitle in some places
    
    // Pattern for Footer logo block where there's no subtitle, ending at the vertical divider
    const footerRegex = /\{\/\*\s*SVG Logo Icon\s*\*\/\}(.|\n)*?<div className="w-1 h-6 bg-gradient-to-b from-\[#D90429\] to-\[#FF1744\] rounded-full" \/>/gm;
    
    // In App.js footer, the divider is slightly different
    const footerRegexApp = /\{\/\*\s*SVG Logo Icon\s*\*\/\}(.|\n)*?<div className="w-1 h-6 bg-gradient-to-b from-\[#D90429\] to-\[#FF1744\] rounded-full"><\/div>/gm;

    const imgTagNav = `<img src="/logo.png" alt="DivoAI Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />`;
    const imgTagFooter = `<img src="/logo.png" alt="DivoAI Logo" className="h-8 md:h-10 w-auto object-contain mb-2" />`;

    // Replace Navbar blocks
    content = content.replace(navRegex1, imgTagNav);
    content = content.replace(navRegex2, imgTagNav);
    
    // Replace Footer blocks
    content = content.replace(navRegex3, imgTagFooter);
    content = content.replace(footerRegex, imgTagFooter);
    content = content.replace(footerRegexApp, imgTagFooter);
    
    // Some footer might just end with IT Solutions in uppercase
    const footerRegexAppSubtitle = /\{\/\*\s*SVG Logo Icon\s*\*\/\}(.|\n)*?<span className="text-\[10px\] font-semibold tracking-widest text-slate-500 uppercase">IT SOLUTIONS<\/span>/gm;
    content = content.replace(footerRegexAppSubtitle, imgTagFooter);

    fs.writeFileSync(file, content);
});
console.log('Logo images injected successfully!');
