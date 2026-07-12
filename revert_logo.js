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
    
    // Replace SVG gradient stops
    content = content.replace(/<stop offset="0%" stopColor="#D90429" \/>/g, '<stop offset="0%" stopColor="#3B82F6" />');
    content = content.replace(/<stop offset="100%" stopColor="#FF1744" \/>/g, '<stop offset="100%" stopColor="#8B5CF6" />');
    
    // Replace logo text and chevron gradients
    content = content.replace(/from-\[#D90429\] to-\[#FF1744\] bg-clip-text/g, 'from-blue-500 to-purple-600 bg-clip-text');
    
    // Replace vertical divider gradient
    content = content.replace(/from-\[#D90429\] to-\[#FF1744\] rounded-full/g, 'from-blue-500 to-purple-600 rounded-full');

    fs.writeFileSync(file, content);
});
console.log('Logo colors reverted to blue/purple');
