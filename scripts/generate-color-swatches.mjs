import fs from 'fs';
import path from 'path';

const dir = 'public/img/colors';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const primary = [
  { step: '50', hex: '#fffbeb', name: 'primary-50' },
  { step: '100', hex: '#fef3c7', name: 'primary-100' },
  { step: '200', hex: '#fde68a', name: 'primary-200' },
  { step: '300', hex: '#fcd34d', name: 'primary-300' },
  { step: '400', hex: '#ffde4d', name: 'primary-400 (Hover)' },
  { step: '500', hex: '#ffcc00', name: 'primary-500 (Base)' },
  { step: '600', hex: '#d4a900', name: 'primary-600' },
  { step: '700', hex: '#aa8700', name: 'primary-700' },
  { step: '800', hex: '#806500', name: 'primary-800' },
  { step: '900', hex: '#554300', name: 'primary-900' },
  { step: '950', hex: '#2b2200', name: 'primary-950' },
];

const secondary = [
  { step: '50', hex: '#f8fafc', name: 'secondary-50 (Texto Dark)' },
  { step: '100', hex: '#f1f5f9', name: 'secondary-100' },
  { step: '200', hex: '#e2e8f0', name: 'secondary-200' },
  { step: '300', hex: '#cbd5e1', name: 'secondary-300 (Fondo Claro)' },
  { step: '400', hex: '#94a3b8', name: 'secondary-400' },
  { step: '500', hex: '#64748b', name: 'secondary-500' },
  { step: '600', hex: '#475569', name: 'secondary-600' },
  { step: '700', hex: '#2d3748', name: 'secondary-700 (Card Hover)' },
  { step: '800', hex: '#1a202c', name: 'secondary-800 (Card Dark)' },
  { step: '900', hex: '#0f172a', name: 'secondary-900 (Texto Light)' },
  { step: '950', hex: '#0b0e14', name: 'secondary-950 (Fondo Dark)' },
];

function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? '#0b0e14' : '#ffffff';
}

function generatePaletteStrip(colors, filename) {
  const cardWidth = 76;
  const gap = 8;
  const totalWidth = colors.length * (cardWidth + gap) + gap;
  const height = 110;

  let rects = '';
  colors.forEach((c, i) => {
    const x = gap + i * (cardWidth + gap);
    const textFill = getTextColor(c.hex);
    rects += `
    <g transform="translate(${x}, 12)">
      <rect width="${cardWidth}" height="86" rx="8" fill="${c.hex}" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
      <text x="${cardWidth / 2}" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" text-anchor="middle" fill="${textFill}">${c.step}</text>
      <text x="${cardWidth / 2}" y="60" font-family="monospace" font-size="10" text-anchor="middle" fill="${textFill}" opacity="0.9">${c.hex}</text>
    </g>`;
  });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 ${totalWidth} ${height}">
    <rect width="${totalWidth}" height="${height}" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1"/>
    ${rects}
  </svg>`;

  fs.writeFileSync(path.join(dir, filename), svg);
}

function generateSingleSwatch(c, filename) {
  const strokeColor = getTextColor(c.hex) === '#0b0e14' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.25)';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22">
    <rect width="36" height="22" rx="4" fill="${c.hex}" stroke="${strokeColor}" stroke-width="1"/>
  </svg>`;
  fs.writeFileSync(path.join(dir, filename), svg);
}

generatePaletteStrip(primary, 'palette-primary.svg');
generatePaletteStrip(secondary, 'palette-secondary.svg');

primary.forEach(c => generateSingleSwatch(c, `primary-${c.step}.svg`));
secondary.forEach(c => generateSingleSwatch(c, `secondary-${c.step}.svg`));

console.log('All palette and swatch SVGs generated in ' + dir);
