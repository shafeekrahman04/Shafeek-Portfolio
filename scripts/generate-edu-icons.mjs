import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const eduDir = path.resolve(__dirname, '..', 'public', 'assets', 'images', 'education');

if (!fs.existsSync(eduDir)) fs.mkdirSync(eduDir, { recursive: true });

const svgs = {
  'annamalai-university.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e1b4b"/>
        <stop offset="50%" stop-color="#312e81"/>
        <stop offset="100%" stop-color="#4338ca"/>
      </linearGradient>
    </defs>
    <rect width="600" height="350" fill="url(#grad1)"/>
    <circle cx="300" cy="150" r="70" fill="rgba(255,255,255,0.08)"/>
    <path d="M300 100 L360 135 L300 170 L240 135 Z" fill="#38bdf8"/>
    <path d="M260 150 L260 185 Q300 210 340 185 L340 150 Q300 175 260 150 Z" fill="#818cf8"/>
    <line x1="360" y1="135" x2="360" y2="190" stroke="#f59e0b" stroke-width="4"/>
    <circle cx="360" cy="195" r="7" fill="#f59e0b"/>
    <text x="300" y="255" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">ANNAMALAI UNIVERSITY</text>
    <text x="300" y="285" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Bachelor of Computer Applications (BCA)</text>
    <text x="300" y="312" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle">GRADUATED • 2021 - 2024</text>
  </svg>`,

  'irt-polytechnic.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="50%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
    </defs>
    <rect width="600" height="350" fill="url(#grad2)"/>
    <circle cx="300" cy="150" r="70" fill="rgba(255,255,255,0.06)"/>
    <rect x="250" y="110" width="100" height="70" rx="10" fill="#0284c7"/>
    <rect x="265" y="125" width="70" height="40" rx="4" fill="#0f172a"/>
    <path d="M285 190 L315 190 L320 205 L280 205 Z" fill="#64748b"/>
    <text x="300" y="255" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">IRT POLYTECHNIC COLLEGE</text>
    <text x="300" y="285" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Diploma in Computer Engineering (DCE)</text>
    <text x="300" y="312" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle">COMPLETED • 2019 - 2021</text>
  </svg>`,

  'time-school.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e1b4b"/>
        <stop offset="50%" stop-color="#2e1065"/>
        <stop offset="100%" stop-color="#3b0764"/>
      </linearGradient>
    </defs>
    <rect width="600" height="350" fill="url(#grad3)"/>
    <circle cx="300" cy="150" r="70" fill="rgba(255,255,255,0.06)"/>
    <path d="M300 100 L345 130 L345 180 L255 180 L255 130 Z" fill="#a855f7"/>
    <rect x="285" y="145" width="30" height="35" rx="3" fill="#ffffff"/>
    <polygon points="300,105 320,120 280,120" fill="#fbbf24"/>
    <text x="300" y="255" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">TIME MATRIC HR SEC SCHOOL</text>
    <text x="300" y="285" font-family="Arial, sans-serif" font-size="16" fill="#94a3b8" text-anchor="middle">Secondary School Leaving Certificate (SSLC)</text>
    <text x="300" y="312" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#34d399" text-anchor="middle">COMPLETED • 2017 - 2018</text>
  </svg>`
};

for (const [file, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(eduDir, file), content.trim());
}

console.log('Generated local SVG education banners!');
