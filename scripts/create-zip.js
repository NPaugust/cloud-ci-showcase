const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const OUTPUT = path.join(process.cwd(), 'cloud-ci-showcase.zip');
const SOURCES = [
  'package.json',
  'package-lock.json',
  'src',
  'tests',
  'docs',
  '.github',
  'jest.config.js',
  'eslint.config.cjs',
  'prettier.config.cjs',
  'README.md',
];

const ensureReadme = () => {
  if (!fs.existsSync('README.md')) {
    fs.writeFileSync('README.md', '# Cloud CI Showcase\n\nREADME placeholder.', 'utf8');
  }
};

const buildArchiveCommand = () => {
  if (process.platform === 'win32') {
    const items = SOURCES.map((item) => `"${item}"`).join(', ');
    return {
      cmd: 'powershell',
      args: [
        '-Command',
        `Compress-Archive -Path @(${items}) -DestinationPath "${OUTPUT}" -Force`,
      ],
    };
  }

  return {
    cmd: 'zip',
    args: ['-r', OUTPUT, ...SOURCES],
  };
};

ensureReadme();

const { cmd, args } = buildArchiveCommand();
const result = spawnSync(cmd, args, { stdio: 'inherit' });

if (result.status !== 0) {
  console.error('Failed to create zip archive');
  process.exit(result.status ?? 1);
}

console.log(`Created ${OUTPUT}`);

