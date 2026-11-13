import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillsDir = path.resolve(__dirname, '..', 'public', 'assets', 'images', 'skills');

if (!fs.existsSync(skillsDir)) fs.mkdirSync(skillsDir, { recursive: true });

const svgs = {
  'react.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
  
  'nextjs.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="100%" height="100%"><circle cx="90" cy="90" r="90" fill="#000"/><path fill="#fff" d="M149.508 157.438L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.407z"/><path fill="#fff" d="M115 54h12v45.5h-12z"/></svg>`,
  
  'typescript.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%"><rect width="128" height="128" fill="#3178c6" rx="16"/><path fill="#fff" d="M38 46h52v12H68v46H54V58H38V46zm62 39.5c0 7.8-5.8 12.5-14.8 12.5-8.4 0-14.2-4.5-14.5-11.8h11.2c.2 2.8 2.2 4.5 4.8 4.5 2.5 0 4.2-1.2 4.2-3.2 0-2.2-2-3-6-4.2-6.8-2-12.8-5-12.8-12.5 0-7.2 5.5-12 13.8-12 7.8 0 13.2 4.2 13.5 11.2h-11c-.2-2.5-1.8-4-3.8-4-2 0-3.5 1-3.5 2.8 0 1.8 1.5 2.5 5.5 3.5 7.5 2 13.5 4.8 13.5 13.2z"/></svg>`,

  'javascript.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%"><rect width="128" height="128" fill="#f7df1e" rx="16"/><path d="M68 83c0 14-8 19-19 19-10 0-16-5-18-12l11-6c1 4 3 7 7 7 4 0 7-2 7-8V46h12v37zm25 19c-14 0-22-8-22-20 0-14 9-22 23-22 13 0 21 8 21 20v2H83c1 7 5 10 11 10 5 0 8-2 10-6l9 5c-4 7-10 11-20 11zm-1-32c-5 0-9 3-10 8h20c0-5-4-8-10-8z" fill="#000"/></svg>`,

  'html5.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%"><path fill="#e34f26" d="M71 460L30 0h452l-41 460-185 52z"/><path fill="#ef652a" d="M256 472l149-41 35-391H256v432z"/><path fill="#ebebeb" d="M256 208h-63l-4-49h67V109H135l13 148h108v-49zm0 157l-60-16-4-45h-50l8 94 106 29v-62z"/><path fill="#fff" d="M256 208v-49h63l6-60h-69V109h121l-12 148H256zm0 157v62l106-29 11-124h-50l-6 45-61 46z"/></svg>`,

  'css3.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%"><path fill="#1572b6" d="M71 460L30 0h452l-41 460-185 52z"/><path fill="#33a9dc" d="M256 472l149-41 35-391H256v432z"/><path fill="#ebebeb" d="M256 208h-63l-4-49h67V109H135l13 148h108v-49zm0 157l-60-16-4-45h-50l8 94 106 29v-62z"/><path fill="#fff" d="M256 208v-49h63l6-60h-69V109h121l-12 148H256zm0 157v62l106-29 11-124h-50l-6 45-61 46z"/></svg>`,

  'bootstrap.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%"><path fill="#7952b3" d="M64 0h384c35 0 64 29 64 64v384c0 35-29 64-64 64H64c-35 0-64-29-64-64V64C0 29 29 0 64 0z"/><path fill="#fff" d="M208 128h104c35 0 56 18 56 46 0 22-14 38-34 43 26 5 44 24 44 50 0 34-26 55-66 55H208V128zm52 74h44c11 0 18-6 18-16s-7-16-18-16h-44v32zm0 78h50c12 0 20-7 20-18 0-10-8-18-20-18h-50v36z"/></svg>`,

  'materialui.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path fill="#0081cb" d="M0 2.475v10.39L9 18.04V7.65L0 2.475m24 0l-9 5.175v10.39l9-5.175V2.475M9 7.65l6 3.45-6 3.45-6-3.45 6-3.45m6 7.965l-6 3.45v5.175l6-3.45v-5.175z"/></svg>`,

  'nodejs.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#68a063" d="M16 2l12 7v14l-12 7-12-7V9l12-7zm0 3.2L6.8 10.5v11L16 26.8l9.2-5.3v-11L16 5.2z"/><path fill="#333" d="M13 11h6v2h-4v2h3v2h-3v4h-2V11zm8 4h2v6h-2v-6z"/></svg>`,

  'java.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#ea2d2e" d="M11 25c5 0 9-1 12-4-2 0-5 1-8 1-3 0-4-1-4-1 0 1 0 3 0 4zm-1-4c6 0 11-1 15-4-3 0-7 1-11 1-4 0-5-1-5-1 0 1 0 3 1 4z"/><path fill="#5382a1" d="M15 16c2-2 3-5 3-7-1 2-2 4-4 5-1 1-2 3-2 5 1-1 2-2 3-3zm4-5c1-2 2-4 2-6-1 2-2 3-3 4-1 1-2 3-2 5 1-1 2-2 3-3z"/><path fill="#e76f00" d="M9 28c8 1 15-1 18-5-3 0-6 1-10 1-5 0-7-1-7-1 0 1 0 3-1 5z"/></svg>`,

  'springboot.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#6cb33e" d="M16 2l12 7v14l-12 7-12-7V9l12-7z"/><path fill="#fff" d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1 12.5v-9l7 4.5-7 4.5z"/></svg>`,

  'postgresql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#336791" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm6 21c-2 0-3-1-4-3-1-2-1-4-2-6h2c1 3 2 5 4 5s3-1 3-3c0-2-1-3-3-4l-3-2c-3-2-4-4-4-7 0-3 2-5 5-5 3 0 5 1 6 3l-2 2c-1-1-2-2-4-2s-3 1-3 3c0 2 1 3 3 4l3 2c3 2 4 4 4 7 0 4-3 6-7 6z"/></svg>`,

  'mysql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%"><path fill="#00758f" d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm-4 28l-3-8h6l-3 8zm12-4c0 3-2 5-5 5h-4V15h4c3 0 5 2 5 5v8z"/><path fill="#f29111" d="M27 20h2v8h-2z"/></svg>`,

  'mongodb.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#47a248" d="M16 2C15 6 10 11 10 17c0 4 3 8 6 13 3-5 6-9 6-13 0-6-5-11-6-15z"/><path fill="#3fa037" d="M16 2v28c3-5 6-9 6-13 0-6-5-11-6-15z"/></svg>`,

  'git.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#f05032" d="M30 14L18 2a2.8 2.8 0 00-4 0L10.6 5.4l5.2 5.2a3.4 3.4 0 014.2 4.2l5.1 5.1c1.3-.4 2.8.2 3.5 1.5.9 1.5.5 3.5-1 4.4a3.3 3.3 0 01-4.4-1c-.7-1.1-.6-2.5 0-3.6L18 16v8.2a3.3 3.3 0 01-1.3 2.6 3.3 3.3 0 01-4.5-.8c-.9-1.5-.5-3.5 1-4.4.9-.5 2-.6 2.8-.2V15a3.3 3.3 0 01-1.8-4.3L8.9 5.4 2 12.3a2.8 2.8 0 000 4L14 28.4a2.8 2.8 0 004 0L30 16.3a2.8 2.8 0 000-2.3z"/></svg>`,

  'github.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#fff" fill-rule="evenodd" d="M16 2C8.3 2 2 8.3 2 16c0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.5c-3.9.8-4.7-1.9-4.7-1.9-.6-1.6-1.5-2.1-1.5-2.1-1.3-.9.1-.9.1-.9 1.4.1 2.2 1.5 2.2 1.5 1.2 2.2 3.3 1.5 4.1 1.2.1-.9.5-1.5.9-1.9-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.4-.6-1.8.1-3.7 0 0 1.2-.4 3.9 1.5 1.1-.3 2.4-.5 3.6-.5s2.5.2 3.6.5c2.7-1.9 3.9-1.5 3.9-1.5.7 1.9.3 3.3.1 3.7.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4 1 1.3 1 2.6v3.9c0 .4.3.8 1 .7C26 27.4 30 22.2 30 16c0-7.7-6.3-14-14-14z"/></svg>`,

  'firebase.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#ffa000" d="M5 24L13 4l4 7-6 13z"/><path fill="#f57c00" d="M27 24L20 8l-3 6 10 10z"/><path fill="#ffca28" d="M17 14l-4-3-8 13 12 7 10-7-10-10z"/></svg>`,

  'restapi.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><rect width="32" height="32" rx="6" fill="#0284c7"/><path fill="#fff" d="M6 10h5a4 4 0 010 8H8v4H6V10zm2 6h3a2 2 0 000-4H8v4zm9-6h2v12h-2V10zm5 0h6v2h-4v3h3v2h-3v3h4v2h-6V10z"/></svg>`,

  'postman.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><circle cx="16" cy="16" r="16" fill="#ff6c37"/><path fill="#fff" d="M22 10l-10 6 3 2 7-8zm-11 7l-2 5 5-2-3-3z"/></svg>`,

  'mssql.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><rect width="32" height="32" rx="6" fill="#cc292b"/><path fill="#fff" d="M8 10h16v3H8zm0 5h16v3H8zm0 5h16v3H8z"/></svg>`,

  'netlify.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%"><path fill="#00c7b7" d="M16 2L3 15l13 13 13-13L16 2zm0 5l8 8-8 8-8-8 8-8z"/></svg>`
};

for (const [file, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(skillsDir, file), content.trim());
}

console.log('Generated', Object.keys(svgs).length, 'local SVG skill icons!');
