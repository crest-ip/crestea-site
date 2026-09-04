import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const input = fileURLToPath(new URL('../public/crest-symbol.png', import.meta.url));
const output = fileURLToPath(new URL('../public/crest-symbol-transparent.png', import.meta.url));

const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);

for (let source = 0, target = 0; source < data.length; source += 3, target += 4) {
  const red = data[source];
  const green = data[source + 1];
  const blue = data[source + 2];
  const distanceFromWhite = Math.sqrt(
    (255 - red) ** 2 + (255 - green) ** 2 + (255 - blue) ** 2
  );
  const alpha = Math.max(0, Math.min(255, Math.round((distanceFromWhite - 5) * 4.25)));

  rgba[target] = red;
  rgba[target + 1] = green;
  rgba[target + 2] = blue;
  rgba[target + 3] = alpha;
}

await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png()
  .toFile(output);
