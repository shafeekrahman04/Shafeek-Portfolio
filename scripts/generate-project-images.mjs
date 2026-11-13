import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projDir = path.resolve(__dirname, '..', 'public', 'assets', 'images', 'projects');

if (!fs.existsSync(projDir)) fs.mkdirSync(projDir, { recursive: true });

const projectsList = [
  { id: 'the-vedic-products', title: 'THE VEDIC PRODUCTS', tag: 'E-COMMERCE PLATFORM', bg1: '#064e3b', bg2: '#047857', accent: '#34d399', icon: 'M16 2a14 14 0 100 28 14 14 0 000-28zm-2 20l-6-6 2.8-2.8 3.2 3.2 7.2-7.2L24 12l-10 10z' },
  { id: 'wallan-pharma', title: 'WALLAN PHARMA', tag: 'PHARMA INVENTORY SYSTEM', bg1: '#1e3a8a', bg2: '#0284c7', accent: '#38bdf8', icon: 'M14 4h4v6h6v4h-6v6h-4v-6H8v-4h6V4z' },
  { id: 'bestotaxi', title: 'BESTOTAXI', tag: 'TAXI CAB DISPATCH & BOOKING', bg1: '#78350f', bg2: '#d97706', accent: '#fbbf24', icon: 'M4 16l3-8h10l3 8v6h-3v-2H7v2H4v-6zm3 0h10l-1.5-4h-7L7 16z' },
  { id: 'akis-tech', title: 'AKIS TECH', tag: 'INTERIOR & MEP DESIGN', bg1: '#312e81', bg2: '#4338ca', accent: '#818cf8', icon: 'M4 4h24v6H4V4zm0 9h24v6H4v-6zm0 9h24v6H4v-6z' },
  { id: 'fecoresh', title: 'FECORESH', tag: 'CHEMICAL SOLUTIONS STORE', bg1: '#065f46', bg2: '#059669', accent: '#6ee7b7', icon: 'M12 2l8 12-4 12H8L4 14 12 2z' },
  { id: 'alhaseena', title: 'ALHASEENA', tag: 'BILLING & CLIENT INVOICING', bg1: '#831843', bg2: '#be185d', accent: '#f472b6', icon: 'M6 4h20v24H6V4zm4 4v4h12V8H10zm0 6v2h12v-2H10zm0 4v2h8v-2H10z' },
  { id: 'greycolorme', title: 'GREY COLOR ME', tag: 'APPAREL & PRODUCTS CATALOG', bg1: '#374151', bg2: '#4b5563', accent: '#9ca3af', icon: 'M16 4l12 6-12 6-12-6 12-6zm0 14l12 6-12 6-12-6 12-6z' },
  { id: 'meera-broilers', title: 'MEERA BROILERS', tag: 'DISTRIBUTION & BILLING', bg1: '#7c2d12', bg2: '#c2410c', accent: '#fb923c', icon: 'M16 2a14 14 0 100 28 14 14 0 000-28z' },
  { id: 'm-structure', title: 'M STRUCTURE', tag: 'STAFF & PROJECT PORTAL', bg1: '#1e1b4b', bg2: '#3730a3', accent: '#a5b4fc', icon: 'M6 26V6l10-4 10 4v20H6zm4-16h4v4h-4v-4zm0 6h4v4h-4v-4zm8-6h4v4h-4v-4zm0 6h4v4h-4v-4z' },
  { id: 'pharmacy-app', title: 'PHARMACY STORE APP', tag: 'MED STORE ACCOUNTS & POS', bg1: '#0f766e', bg2: '#0d9488', accent: '#2dd4bf', icon: 'M14 6h4v6h6v4h-6v6h-4v-6H8v-4h6V6z' },
  { id: 'nalam-acc', title: 'NALAM ACCOUNTS', tag: 'ACCOUNTING & INVOICE MGMT', bg1: '#111827', bg2: '#1f2937', accent: '#60a5fa', icon: 'M6 4h20v24H6V4zm4 4v4h12V8H10zm0 6v2h12v-2H10zm0 4v2h8v-2H10z' },
  { id: 'quran-app', title: 'QURAN APP', tag: 'MOBILE & WEB APPLICATION', bg1: '#064e3b', bg2: '#047857', accent: '#34d399', icon: 'M16 4l10 5v14l-10 5-10-5V9l10-5z' },
  { id: 'invoice-gen', title: 'INVOICE GENERATOR', tag: 'ENTERPRISE BILLING ENGINE', bg1: '#4c1d95', bg2: '#6d28d9', accent: '#c084fc', icon: 'M6 4h20v24H6V4zm4 4v4h12V8H10zm0 6v2h12v-2H10zm0 4v2h8v-2H10z' },
  { id: 'gravityforcetech', title: 'GRAVITYFORCETECH', tag: 'MEP ENGINEERING PLATFORM', bg1: '#1e3a8a', bg2: '#2563eb', accent: '#60a5fa', icon: 'M16 2L4 8v16l12 6 12-6V8L16 2z' },
  { id: 'portfolio-website', title: 'PORTFOLIO APP', tag: 'REACT + VITE SHOWCASE', bg1: '#4338ca', bg2: '#6366f1', accent: '#38bdf8', icon: 'M16 4a12 12 0 100 24 12 12 0 000-24zm0 4a8 8 0 110 16 8 8 0 010-16z' }
];

for (const p of projectsList) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450" width="100%" height="100%">
    <defs>
      <linearGradient id="bg-${p.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.bg1}"/>
        <stop offset="100%" stop-color="${p.bg2}"/>
      </linearGradient>
      <linearGradient id="card-${p.id}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.12)"/>
        <stop offset="100%" stop-color="rgba(0,0,0,0.4)"/>
      </linearGradient>
    </defs>
    <rect width="700" height="450" fill="url(#bg-${p.id})"/>
    <circle cx="600" cy="50" r="160" fill="rgba(255,255,255,0.04)"/>
    <circle cx="100" cy="400" r="180" fill="rgba(0,0,0,0.15)"/>
    
    <!-- Browser Window Shell -->
    <rect x="50" y="45" width="600" height="360" rx="16" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
    <rect x="50" y="45" width="600" height="45" rx="16" fill="rgba(30,41,59,0.9)"/>
    
    <!-- Window controls -->
    <circle cx="80" cy="68" r="6" fill="#ef4444"/>
    <circle cx="100" cy="68" r="6" fill="#f59e0b"/>
    <circle cx="120" cy="68" r="6" fill="#10b981"/>
    
    <!-- Address bar -->
    <rect x="150" y="56" width="380" height="24" rx="12" fill="rgba(15,23,42,0.6)"/>
    <text x="340" y="72" font-family="'Courier New', monospace" font-size="11" fill="#94a3b8" text-anchor="middle">https://${p.id}.app</text>
    
    <!-- Content Card -->
    <g transform="translate(100, 140)">
      <rect x="0" y="0" width="500" height="220" rx="12" fill="url(#card-${p.id})" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <circle cx="65" cy="65" r="35" fill="rgba(255,255,255,0.1)"/>
      <path d="${p.icon}" fill="${p.accent}" transform="translate(45, 45) scale(1.2)"/>
      <text x="125" y="55" font-family="'Poppins', sans-serif" font-size="22" font-weight="800" fill="#ffffff" letter-spacing="0.5">${p.title}</text>
      <rect x="125" y="70" width="220" height="24" rx="12" fill="rgba(255,255,255,0.08)"/>
      <text x="235" y="86" font-family="'Poppins', sans-serif" font-size="11" font-weight="600" fill="${p.accent}" text-anchor="middle">${p.tag}</text>
      
      <!-- Tech stack pills -->
      <g transform="translate(30, 135)">
        <rect x="0" y="0" width="85" height="26" rx="6" fill="rgba(99,102,241,0.2)" stroke="rgba(99,102,241,0.4)"/>
        <text x="42" y="17" font-family="sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">React.js</text>
        
        <rect x="95" y="0" width="95" height="26" rx="6" fill="rgba(56,189,248,0.2)" stroke="rgba(56,189,248,0.4)"/>
        <text x="142" y="17" font-family="sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">REST APIs</text>
        
        <rect x="200" y="0" width="85" height="26" rx="6" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.4)"/>
        <text x="242" y="17" font-family="sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">JWT Auth</text>
        
        <rect x="295" y="0" width="125" height="26" rx="6" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.4)"/>
        <text x="357" y="17" font-family="sans-serif" font-size="11" font-weight="600" fill="#ffffff" text-anchor="middle">Responsive UI</text>
      </g>
    </g>
  </svg>`;

  fs.writeFileSync(path.join(projDir, `${p.id}.svg`), svg.trim());
}

console.log('Generated', projectsList.length, 'local SVG project illustrations!');
