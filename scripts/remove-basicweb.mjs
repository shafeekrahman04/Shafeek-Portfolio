import fs from 'fs';
import path from 'path';

const files = ['src/data/projects.json', 'projects/projects.json'];
for (const f of files) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replaceAll('"category": "basicweb"', '"category": "web"');
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
}
