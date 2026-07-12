const fs = require('fs');

const files = [
    'src/pages/ContactPage.js',
    'src/pages/AboutPage.js',
    'src/pages/ServicesPage.js',
    'src/pages/InsightsPage.js'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    const oldClass = 'className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5"';
    const newClass = 'className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent"';
    
    content = content.replace(oldClass, newClass);

    fs.writeFileSync(file, content);
});
console.log('Subpage navbars updated to bg-transparent!');
