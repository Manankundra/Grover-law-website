import { ImageResponse } from 'next/og';
import { logoDataUrl } from '@/lib/seo';

// Crops the "GL" monogram out of the 1600px logo and renders it at `size` px square.
export async function monogram(size: number) {
  const crop = { x: 445, y: 290, side: 720 }; // centred on the monogram's vertical rule (x≈805)
  const k = size / crop.side;
  return new ImageResponse(
    (
      <div style={{ width: size, height: size, display: 'flex', overflow: 'hidden', background: '#F6F5F2', position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={await logoDataUrl()} alt="" width={1600 * k} height={1600 * k}
          style={{ position: 'absolute', left: -crop.x * k, top: -crop.y * k }} />
      </div>
    ),
    { width: size, height: size },
  );
}
