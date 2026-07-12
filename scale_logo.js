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
    
    // Replace the class string for the navbar image
    const oldClass = 'className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"';
    const newClass = 'className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 scale-125 md:scale-[1.4] origin-left group-hover:scale-[1.3] md:group-hover:scale-[1.5]"';
    
    // Replace the footer class string as well so it matches the larger size, without affecting footer height
    const oldFooterClass = 'className="h-8 md:h-10 w-auto object-contain mb-2"';
    const newFooterClass = 'className="h-8 md:h-10 w-auto object-contain mb-2 scale-125 md:scale-[1.4] origin-left"';

    content = content.replace(new RegExp(oldClass.replace(/[.*+?^$\{\}\(\)\|\[\]\\]/g, '\\$&'), 'g'), newClass);
    content = content.replace(new RegExp(oldFooterClass.replace(/[.*+?^$\{\}\(\)\|\[\]\\]/g, '\\$&'), 'g'), newFooterClass);

    fs.writeFileSync(file, content);
});
console.log('Logo scale classes added to all pages!');
