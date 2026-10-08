import { ImageResponse } from 'next/og';
import { logoDataUrl } from '@/lib/seo';

export const alt = 'Grover Law Offices, Advocates & Consultants, New Delhi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  // Logo artwork spans roughly x 400–1220, y 280–1160 of the 1600px source.
  const crop = { x: 360, y: 250, side: 920 };
  const side = 470;
  const k = side / crop.side;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#F6F5F2', borderTop: '10px solid #B08D57' }}>
        <div style={{ width: side, height: side, display: 'flex', overflow: 'hidden', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={await logoDataUrl()} alt="" width={1600 * k} height={1600 * k}
            style={{ position: 'absolute', left: -crop.x * k, top: -crop.y * k }} />
        </div>
        <div style={{ marginTop: 12, fontSize: 26, letterSpacing: 6, color: '#7A5C2B', textTransform: 'uppercase' }}>
          Advocates &amp; Consultants · New Delhi
        </div>
      </div>
    ),
    size,
  );
}
