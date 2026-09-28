import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Helper to optimize a single file in-place
async function optimizeInPlace(filePath, maxWidth, quality = 80) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }
  const inputBuffer = fs.readFileSync(filePath);
  const metadata = await sharp(inputBuffer).metadata();
  
  if (metadata.width > maxWidth) {
    const outputBuffer = await sharp(inputBuffer)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
    fs.writeFileSync(filePath, outputBuffer);
    console.log(`Optimized in-place: ${filePath} (${inputBuffer.length}B -> ${outputBuffer.length}B, width: ${maxWidth}px)`);
  } else {
    // Just recompress if needed
    const outputBuffer = await sharp(inputBuffer)
      .webp({ quality })
      .toBuffer();
    if (outputBuffer.length < inputBuffer.length) {
      fs.writeFileSync(filePath, outputBuffer);
      console.log(`Recompressed: ${filePath} (${inputBuffer.length}B -> ${outputBuffer.length}B)`);
    }
  }
}

// Helper to generate a derived variant (e.g. -mobile, -sm)
async function generateVariant(srcPath, destPath, width, height = null, quality = 78) {
  if (!fs.existsSync(srcPath)) {
    console.warn(`Source not found: ${srcPath}`);
    return;
  }
  const inputBuffer = fs.readFileSync(srcPath);
  const resizeOptions = { width, withoutEnlargement: true };
  if (height) resizeOptions.height = height;

  const outputBuffer = await sharp(inputBuffer)
    .resize(resizeOptions)
    .webp({ quality })
    .toBuffer();

  fs.writeFileSync(destPath, outputBuffer);
  console.log(`Generated variant: ${destPath} (${outputBuffer.length}B, width: ${width}px)`);
}

async function run() {
  console.log('--- 1. GENERATING HERO MOBILE VARIANT ---');
  // Hero mobile: 640px width
  await generateVariant('public/img/bg/heeder.webp', 'public/img/bg/heeder-mobile.webp', 640, null, 78);

  console.log('\n--- 2. OPTIMIZING MASTER LOGO ---');
  // Logo: resize to 200px width (retina 3x for 48-64px navbar and 112px footer)
  await optimizeInPlace('public/img/logo.webp', 200, 82);

  console.log('\n--- 3. OPTIMIZING OVERSIZED BACKGROUNDS & ASSETS ---');
  // Decorative backgrounds and oversized assets
  await optimizeInPlace('public/img/bg/bgcuerdas.webp', 1200, 75);
  await optimizeInPlace('public/img/bg/testimonios.webp', 800, 75);
  await optimizeInPlace('public/img/services/zonasEntrenamiento.webp', 1000, 80);
  await optimizeInPlace('public/img/coach/coachJairo.webp', 300, 80);
  await optimizeInPlace('public/img/coach/coachJairo2.webp', 300, 80);

  console.log('\n--- 4. GENERATING MOBILE VARIANTS FOR HOME SERVICE CARDS ---');
  // Service cards mobile (-sm: 480px width)
  await generateVariant('public/img/services/zonasEntrenamiento.webp', 'public/img/services/zonasEntrenamiento-sm.webp', 480, null, 78);
  await generateVariant('public/img/services/entrenamientosPersonalizados.webp', 'public/img/services/entrenamientosPersonalizados-sm.webp', 480, null, 78);
  await generateVariant('public/img/services/clasesGrupales.webp', 'public/img/services/clasesGrupales-sm.webp', 480, null, 78);

  console.log('\nAll image optimizations and variants complete!');
}

run().catch(console.error);
