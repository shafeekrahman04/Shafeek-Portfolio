import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const skillsDir = path.join(rootDir, 'public', 'assets', 'images', 'skills');
const projectsDir = path.join(rootDir, 'public', 'assets', 'images', 'projects');
const educationDir = path.join(rootDir, 'public', 'assets', 'images', 'education');

[skillsDir, projectsDir, educationDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function downloadFile(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    console.log(`Saved: ${destPath}`);
    return true;
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
    return false;
  }
}

async function run() {
  console.log('Downloading Education images...');
  const eduImages = [
    {
      name: 'annamalai-university.jpg',
      url: 'https://firebasestorage.googleapis.com/v0/b/shafeek-portfolio.appspot.com/o/education%2FAnnamalai-University.jpg?alt=media&token=891776bf-ac25-4340-a608-9b7522f14615'
    },
    {
      name: 'irt-polytechnic.jpg',
      url: 'https://firebasestorage.googleapis.com/v0/b/shafeek-portfolio.appspot.com/o/education%2FIRT_Polytechnic_College_1.jfif?alt=media&token=038044d4-99fc-4dc0-bc42-b32b391cf64b'
    },
    {
      name: 'time-school.jpg',
      url: 'https://firebasestorage.googleapis.com/v0/b/shafeek-portfolio.appspot.com/o/education%2Ftime.jpg?alt=media&token=73ede28e-0836-4a0c-84b0-7c9081f75fd0'
    }
  ];

  for (const item of eduImages) {
    await downloadFile(item.url, path.join(educationDir, item.name));
  }

  console.log('Downloading Skills images...');
  const skillsPath = path.join(rootDir, 'src', 'data', 'skills.json');
  const skills = JSON.parse(fs.readFileSync(skillsPath, 'utf8'));

  for (const skill of skills) {
    if (skill.icon && skill.icon.startsWith('http')) {
      const parsedUrl = new URL(skill.icon);
      // Extracts path component from o/skills%2Fxxx.png
      let filename = path.basename(decodeURIComponent(parsedUrl.pathname));
      if (!filename.includes('.')) filename += '.png';
      const dest = path.join(skillsDir, filename);
      const success = await downloadFile(skill.icon, dest);
      if (success) {
        skill.icon = `/assets/images/skills/${filename}`;
      }
    }
  }
  fs.writeFileSync(skillsPath, JSON.stringify(skills, null, 2));
  fs.writeFileSync(path.join(rootDir, 'skills.json'), JSON.stringify(skills, null, 2));

  console.log('Downloading Projects images...');
  const projectsPath = path.join(rootDir, 'src', 'data', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

  for (const project of projects) {
    if (project.image && project.image.startsWith('http')) {
      const parsedUrl = new URL(project.image);
      let filename = path.basename(decodeURIComponent(parsedUrl.pathname));
      if (!filename.includes('.')) filename += '.png';
      const dest = path.join(projectsDir, filename);
      const success = await downloadFile(project.image, dest);
      if (success) {
        project.image = `/assets/images/projects/${filename}`;
      }
    }
  }
  fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));
  fs.writeFileSync(path.join(rootDir, 'projects', 'projects.json'), JSON.stringify(projects, null, 2));

  console.log('All images downloaded and JSON files updated locally!');
}

run();
