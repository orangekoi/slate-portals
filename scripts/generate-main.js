import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';

const srcDir = path.resolve('./src');
const jsFiles = globSync('**/*.js', { cwd: srcDir, ignore: ['main.js'] });
const cssFiles = globSync('**/*.css', { cwd: srcDir });

let imports = '';

// Import all CSS files first
imports += cssFiles.map(file => `import './${file}';`).join('\n') + '\n';

// Import all JS files after
imports += jsFiles.map(file => `import './${file}';`).join('\n');

fs.writeFileSync(path.join(srcDir, 'main.js'), imports);
console.log('✅ main.js generated with all JS and CSS imports.');
