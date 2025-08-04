import { promises as fs } from 'fs';
import { glob } from 'glob';
import { resolve } from 'node:path';

async function generateCssImports() {
  const cssFiles = await glob('src/**/*.css', { absolute: true });
  
  // Convert absolute paths to relative paths from src/main.js
  const imports = cssFiles.map((absPath) => {
    const relPath = './' + absPath.split('src/')[1].replace(/\\/g, '/');
    return `import '${relPath}';`;
  });

  const content = [
    '// THIS FILE IS AUTO-GENERATED - DO NOT EDIT DIRECTLY',
    ...imports,
  ].join('\n');

  const mainJsPath = resolve('src/main.js');
  await fs.writeFile(mainJsPath, content, 'utf8');

  console.log(`Generated ${cssFiles.length} CSS imports in src/main.js`);
}

generateCssImports().catch(err => {
  console.error(err);
  process.exit(1);
});
